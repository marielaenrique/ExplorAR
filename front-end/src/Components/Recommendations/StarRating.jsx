import { useState, useContext } from "react";
import { DivStars, StyledIcon, HiddenRadio } from "../../Styles/StarRating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GlobalStateContext } from "../Context/GlobalStateContext";
import RatingService from "../../Services/Rating";

function StarRating(experienceId) {
  const { state } = useContext(GlobalStateContext);
  const { experience } = experienceId;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const ratingRequest = {
    token: `${state.token}`,
    experienceId: `${experience}`,
    userId: `${state.userInfo.id}`,
    stars: rating,
  };

  const handleRating = async () => {
    if (!state.token) {
      setShowErrorMessage(true);
      return;
    }
    try {
      const response = await RatingService.create(ratingRequest);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DivStars>
      <span>¿Cómo fue tu experiencia?</span>
      <br />
      {[...Array(5)].map((star, i) => {
        const ValueRating = i + 1;
        return (
          <label key={i}>
            <HiddenRadio
              type="radio"
              name="rating"
              value={ValueRating}
              onClick={() => setRating(ValueRating)}
            />
            <StyledIcon
              icon={faStar}
              color={ValueRating <= (hover || rating) ? "#f9d000" : "#E3E4E5"}
              onMouseEnter={() => setHover(ValueRating)}
              onMouseLeave={() => setHover(null)}
              fontSize={"1.5rem"}
            />
          </label>
        );
      })}
      <br></br>
      <button onClick={handleRating}>Enviar</button>

      {showErrorMessage && (
        <p>Para hacer una valoración debes iniciar sesión.</p>
      )}

      {showSuccessMessage && <p>¡Tu valoración se ha enviado con éxito!</p>}
    </DivStars>
  );
}

export default StarRating;
