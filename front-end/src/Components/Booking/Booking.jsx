import { GlobalStateContext } from "../Context/GlobalStateContext"
import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faCheckCircle, faXmark} from "@fortawesome/free-solid-svg-icons";
import {DivContainer,DivForm,Form,ButtonReservation,DivDetail,DivReservation,PopupContainer,DivReservationDone,Emoji,DivReservationError,EmojiError} from "../../Styles/BookingComponent"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import BookingService from "../../Services/Booking";
import { differenceInDays, parseISO } from 'date-fns';
// import ExperienceService from "../../Services/Experiences";

function Booking(){

    const {state} = useContext(GlobalStateContext);
    const [reservationDone, setReservationDone] = useState(false);
    const [reservationError, setReservationError] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const VALID_ELEMENT = /^(?!\s)(\s*\S){2,}$/;

    const inputs = [
      {id: 1, label: "Nombre", placeholder: "Ingrese su nombre", name: "name", type: "text"},
      {id: 2, label: "Apellido", placeholder: "Ingrese su apellido", name: "lastName", type: "text"},
      {id: 3, label: "Email", placeholder: "Escribe tu correo", name: "email", type: "email" },
      {id: 4, label: "DNI", placeholder: "Escriba su dni", name: "identification", type: "text"},
      {id: 5, label: "Número de Telefono", placeholder: "Ingrese su numero de telefono", name: "userPhoneNumber", type: "text"},
      {id: 6, label: "Dirección", placeholder: "Confirme su dirección", name: "userAddress", type: "text"},
      {id: 7, label: "Cantidad de acompañantes", placeholder: "Ingrese la cantidad de acompañantes", name: "numberOfPeople", type: "text"}
    ]

    const getInitialValues = () =>({
      name: state.userInfo.name || '',
      lastName: state.userInfo.lastName || '',
      email: state.userInfo.email || '',
      identification: "",
      userPhoneNumber:"",
      userAddress:"",
      numberOfPeople:"",
      startDate : state.currentSearch.date.startDate,
      endDate : state.currentSearch.date.endDate,
      experience : state.experience.id
    });

    const getValidationSchema = () => (
      Yup.lazy(() =>
        Yup.object().shape({
          name: Yup.string()
            .min(3, 'El campo debe tener al menos 3 caracteres')
            .required("Campo Obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          lastName: Yup.string()
            .min(3, 'El campo debe tener al menos 3 caracteres')
            .required("Campo Obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          email: Yup.string()
            .email()
            .required("Campo Obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          identification: Yup.string()
            .required("campo obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          userPhoneNumber: Yup.string()
            .required("campo obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          userAddress: Yup.string()
            .required("campo obligatorio")
            .matches(VALID_ELEMENT,
              'No puede haber espacios al inicio ni al final de este campo',
            ),
          numberOfPeople : Yup.string()
            .required("campo obligatorio")
        })
      )
    );

    const onSubmit = async(values) => {
      try{
        const newReservation = await BookingService.register(state.userInfo.id,values, state);
        if( newReservation === 200){
          setReservationDone(true)
        }
        else{
          setReservationError(true)
        }
        setButtonDisabled(true)
      }catch(e){
        console.log("ERROR", e)
      }
    }

    const {values, setFieldValue, errors, handleSubmit} = useFormik({ 
      initialValues: getInitialValues(),
      validationSchema: getValidationSchema(),
      validationOnChange: false,
      validateOnBlur: false,
      onSubmit
    });
  
  const handlePopupClick = () => {
    setReservationDone(false);
    setReservationError(false)
    setButtonDisabled(true);
  }

  const daysReserved = (startDate, endDate) => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const diffInDays = differenceInDays(end, start);
    return diffInDays + 1
  };
    
    return(
      <DivContainer>
        <DivForm>
        <Form action="" onSubmit={handleSubmit} id="booking-form">
        <h2>Datos de mi perfil</h2>
            {
              inputs.map(fields =>(
                <React.Fragment key={fields.id}>
                <input
                  name={fields.name}
                  placeholder={fields.placeholder}
                  value={values[fields.name]}
                  onChange={(e) => setFieldValue(fields.name, e.target.value)}
                  style={{paddingBottom: "12px", marginBottom: "30px"}}
                  />
                  {
                    errors[fields.name] &&(
                    <p>{errors[fields.name]}</p>
                    )
                  }
                </React.Fragment>
              ))
            }
          </Form> 
        </DivForm>
        <DivDetail>
            <h2>{state.experience.title}</h2>
            <p>{state.experience.description}</p>
            <img src={state.experience.images[0].url} alt="Imagen de la experiencia" />
            <p>🌎 {state.experience.location}</p>
        </DivDetail>
        <DivReservation>
              <h2>Información final</h2>
              <p>Estas reservando esta experiencia : <strong>{state.experience.title}</strong>  </p>
              <p>Desde la fecha: {state.currentSearch.date.startDate}</p>
              <p>Hasta la fecha: {state.currentSearch.date.endDate}</p>
              <p>Precio de la experiencia por dia : {state.experience.pricePerDay}</p>
              <p>Cantidad de días reservados: {daysReserved(state.currentSearch.date.startDate, state.currentSearch.date.endDate)} dias en total </p>
              <p>Precio final : {state.experience.pricePerDay * daysReserved(state.currentSearch.date.startDate, state.currentSearch.date.endDate)}</p>
              <ButtonReservation type="submit" form="booking-form" disabled={buttonDisabled}>Reservar</ButtonReservation>
              {reservationDone && (
                <PopupContainer onClick={handlePopupClick}>
                  <DivReservationDone>
                    <h2>Reserva creada</h2>
                    <Emoji>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </Emoji>
                  </DivReservationDone>
                </PopupContainer>
              )}
            {reservationError && (
                <PopupContainer onClick={handlePopupClick}>
                  <DivReservationError>
                    <h2>Error al crear reserva</h2>
                    <EmojiError>
                      <FontAwesomeIcon icon={faXmark} />
                    </EmojiError>
                  </DivReservationError>
                </PopupContainer>
              )}
          </DivReservation>
          
    </DivContainer>
  )
}

export default Booking;