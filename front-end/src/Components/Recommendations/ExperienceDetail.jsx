import React, { useState, useEffect, useContext} from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick-theme.css";
import VerMas from "./VerMas";
import {
  Container,
  Arrow,
  Content,
  TextContent,
  Name,
  Price,
  Description,
  Location,
  Carousel,
  Image,
  ButtonReservation,
  SilderContainer,
  TextContainer,
  DivCalendar,
  StyledCalendar,
  Rating
} from "../../Styles/ExperienceDetailComponents.js";
import StarRating from "./StarRating";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {format, isBefore } from "date-fns";
import { GlobalStateContext } from '../Context/GlobalStateContext';
import ExperienceService from "../../Services/Experiences";
import BookingService from "../../Services/Booking";

const ExperienceDetail = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 5,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <VerMas/>,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          infinite: false,
          dots: true,
          vertical: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          vertical: false,
        },
      },
    ],
  };

  const {state, dispatch} = useContext(GlobalStateContext);
  const [experienceId, setExperienceId] = useState("");
  const [experience, setExperience] = useState({});
  const [backValue, setBackValue] = useState(0);
  const [invalidDate, setInvalidDate] = useState(false);
  const [datesSelected, setDatesSelected] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ButtonDisabled = invalidDate;
  const [unavailableDates2, setUnavailableDates2] = useState([]);

  const handleReservation = () => {
    dispatch({ type: "SELECTED-EXPERIENCE", experience: experience });
    navigate("/booking");
  };

  const handleStartDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    dispatch({ type: "START-DATE", startDate: formattedDate });
    setInvalidDate(false);
    if(state.currentSearch.date.endDate){
      setDatesSelected(true)
    }else{
      setDatesSelected(false)
    }
};

  const handleEndDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const startDate = state.currentSearch.date.startDate;
    if (startDate && isBefore(date,new Date(startDate))){
      setInvalidDate(true);
      return;
    }
    dispatch({ type: "END-DATE", endDate: formattedDate });
    setInvalidDate(false);
    if(startDate){
      setDatesSelected(true)
    }else{
      setDatesSelected(false)
    }
  };

  const getExperience = async (expId) => {
    try {
      const response = await ExperienceService.getById(expId);
      setExperience(response);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const getUnavaiableDate = async (expId) => {
    try {
      const response = await BookingService.unavaiableDates(expId);
      setUnavailableDates2(response.data.map(date => new Date(date)));
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleBackground = (value) => {
    setBackValue(value);
  };

  const isDisabled = ({ date, view }) => {
    if (view === 'month') {
      const combinedDates = [...unavailableDates2];
      return combinedDates.some(unavailableDate => {
        return date.getUTCFullYear() === unavailableDate.getUTCFullYear() &&
          date.getUTCMonth() === unavailableDate.getUTCMonth() &&
          date.getUTCDate() === unavailableDate.getUTCDate();
      });
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/");
    if (pathSegments[1] === "experience") {
      setExperienceId(pathSegments[2]);
    }
    if (experienceId > 0) {
      getExperience(experienceId);
      getUnavaiableDate(experienceId);
    }
  }, [location, experienceId]);

  useEffect(() => {
    setUnavailableDates2(unavailableDates2);
  }, [unavailableDates2]);
 

  return (
    <>
      <Arrow onClick={() => navigate(-1)}> Volver atrás</Arrow>
      <Container>
        <Content>
          <TextContent>
            <Name>{experience.title}</Name>
            <TextContainer>
              <Price>
                <span>${experience.pricePerDay}</span> por día
              </Price>
              <p>|</p>
              <Rating>
                {experience.rating > 0 && (
                  <>
                    <span>
                      <FontAwesomeIcon icon={faStar} color={"#f9d000"} />{" "}
                      {experience.rating.toFixed(1)}{" "}
                    </span>
                    ({experience.reviews.length} puntuaciones)
                  </>
                )}
                {experience.rating <= 0 &&
                  "Esta experiencia aún no tiene puntuación"}
              </Rating>
            </TextContainer>

            <Description>{experience.description}</Description>
            <Location>
              <FontAwesomeIcon icon={faLocationDot} /> {experience.location}
            </Location>

            <StarRating experience={experienceId} />
          </TextContent>

          <DivCalendar id="calendar-container">
            <StyledCalendar
                onChange={handleStartDateChange}
                tileDisabled={isDisabled}
            />
            <StyledCalendar
                onChange={handleEndDateChange}
                tileDisabled={isDisabled}
            />
          </DivCalendar>
          {invalidDate && <div>No se puede elegir una fecha anterior a la fecha de inicio. Elija otra fecha.</div>}
          <Link to={state.content === "logged" ? "/booking" : "/login"}>
                  <ButtonReservation type="submit" onClick={handleReservation} disabled={!datesSelected || ButtonDisabled}>Iniciar reserva</ButtonReservation>
          </Link>
        </Content>

        <Carousel
          value={
            experience.images && experience.images.length > 0
              ? experience.images[backValue].url
              : null
          }
        >
          <SilderContainer>
            <Slider {...settings}>
              {experience &&
                experience.images &&
                experience.images.map((img, index) => (
                  <Image
                    key={index}
                    onClick={() => handleBackground(index)}
                    src={img.url}
                  />
                ))}
            </Slider>
          </SilderContainer>
        </Carousel>
      </Container>
    </>
  );
};

export default ExperienceDetail;
