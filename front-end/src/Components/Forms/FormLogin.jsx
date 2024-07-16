import React, {useState, useEffect, useContext} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useNavigate  } from 'react-router-dom';
import SessionService from '../../Services/Session.js';
import { GlobalStateContext } from '../Context/GlobalStateContext.jsx';
import {FormManager, FormContainer, Container, Button, Input, Error,WrongValuesText} from '../../Styles/FormLoginComponents.js'

const inputs = [
  {id: 1, label: "Email", placeholder: "Escribe tu correo", name: "email", type: "email" },
  {id: 2, label: "Contraseña", placeholder: "Escribe tu contraseña", name: "password", type: "text"},
]

const FormLogin = () => {

  const {dispatch,state} = useContext(GlobalStateContext);
  const [wrongValues, setWrongValues] = useState("");
  const navigate = useNavigate ();

  const getInitialValues = () =>({
    email:"",
    password:"",
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        email: Yup.string().email().required("Campo Obligatorio"),
        password: Yup.string().required('Campo Obligatorio')
      })
    )
  );

  const onSubmit = async (values) => {
    try{
      const user = await SessionService.login({
        email: values.email,
        password: values.password
      })
      if(user) {
        const initials = user.userInfo.name.charAt(0) + user.userInfo.lastName.charAt(0);
        dispatch({ type: "LOGIN", token: user.token, initials: initials, userInfo: user.userInfo});
        navigate("/home");
      }
    }catch(error){
      console.log(error);
      setWrongValues("Email o Contraseña incorrectos")
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
      <FormContainer form="register">
        <h2>Inicio de Sesión</h2>
        <WrongValuesText>{wrongValues}</WrongValuesText>
        <form  id="register-form" onSubmit={handleSubmit}>
          {   
            inputs.map(fields => (
              <Container key={fields.id}>
                <label style={{paddingBottom: "10px"}}>{fields.label}</label>
                <Input
                  type={fields.type}
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
        <Button id='btnEnter' form="register-form" btn="submit" type="submit">Ingresar</Button>
      </FormContainer>
    </FormManager>
  )
};

export default FormLogin;