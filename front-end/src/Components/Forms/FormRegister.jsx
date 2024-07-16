import React, { useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';
import SessionService from '../../Services/Session.js';
import { GlobalStateContext } from '../Context/GlobalStateContext.jsx';
import {FormManager, FormContainer, Container, Button, Input, Error} from '../../Styles/FormRegisterComponents.js'
import ValidationEmail from './ValidationEmail.jsx';

const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/;
const VALID_ELEMENT = /^(?!\s)(\s*\S){2,}$/;
const VALID_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inputs = [
  {id: 1, label: "Nombre", placeholder: "Ingrese su nombre", name: "name", type: "text"},
  {id: 2, label: "Apellido", placeholder: "Ingrese su apellido", name: "lastname", type: "text"},
  {id: 3, label: "Email", placeholder: "Escribe tu correo", name: "email", type: "email" },
  {id: 4, label: "Contraseña", placeholder: "Escribe tu contraseña", name: "password", type: "password"},
  {id: 5, label: "Repita su contraseña", placeholder: "Confirme su contraseña", name: "repeatPassword", type: "password"}
]

const FormRegister = () => {

  const [showValidation, setShowValidation] = useState();

  useEffect(() =>{
    setShowValidation(false)

  },[])

  const getInitialValues = () =>({
    name:"",
    lastname: "",
    email:"",
    password:"",
    repeatPassword:""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(3, 'El campo debe tener al menos 3 caracteres')
          .required("campo obligatorio")
          .matches(VALID_ELEMENT,
            'No puede haber espacios al inicio ni al final de este campo',
          ),
        lastname: Yup.string()
          .min(3, 'El campo debe tener al menos 3 caracteres')
          .required("campo obligatorio")
          .matches(VALID_ELEMENT,
            'No puede haber espacios al inicio ni al final de este campo',
          ),
        email: Yup.string()
        .email()
        .required("campo obligatorio")
        .matches(VALID_EMAIL,
          'ingrese un mail válido, ejemplo@ejemplo.com',
      ),
        password: Yup.string()
          .min(6, 'La contraseña debe tener al menos 6 caracteres')
          .max(20, 'La contraseña no debe superar los 20 caracteres')
          .required('campo obligatorio')
          .matches(VALID_PASSWORD_REGEX,
            'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número',
        ),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 
          'Las contraseñas no  coinciden')
          .required('repita su contraseña'),
      })
    )
  );

  const onSubmit = async (values) =>{
    try{
      const finalValues = {...values, role: "USER"};
      const newUser =  await SessionService.register({
        name: finalValues.name,
        lastname: finalValues.lastname,
        email: finalValues.email,
        password: finalValues.password,
        role: finalValues.role
      })
      console.log(newUser);
      if(newUser === 200) {
        setShowValidation(true);
        console.log(setShowValidation);
      }
    }catch(error){
      console.log(error);
    }
  };

  const {values, setFieldValue, errors, handleSubmit} = useFormik({ 
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validationOnChange: false,
    validateOnBlur: false,
    onSubmit
  });


  return (
    <FormManager>
      {
        showValidation ? 
        <ValidationEmail email={values.email}/> : 
        <FormContainer form="register">
        <form  id="register-form" onSubmit={handleSubmit}>
        {   
          inputs.map(fields => (
            <Container key={fields.id}>
              <label style={{paddingBottom: "10px"}}>{fields.label}</label>
              <Input
                name={fields.name}
                placeholder={fields.placeholder}
                value={values[fields.name]}
                onChange={(e) => setFieldValue(fields.name, e.target.value)}
              />
              {
                errors[fields.name] &&(
                  <Error>{errors[fields.name]}</Error>
                )
            }
            </Container>
          ))
        }
        </form>
        <Button form="register-form" btn="submit" type="submit">Registrarse</Button>
        </FormContainer>
      }
      
    </FormManager>
  )
};

export default FormRegister;