/* eslint-disable */
import React from "react";
import {
  ExperienceCardContainer,
  DivInformation,
  ButtonViewMore,
  CardImgBackground,
  DivRating,
} from "../../Styles/RecommendationsComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import BrandLogo from "../../imgs/CardLogoExperience.png";

function ExperienceCard({ id, title, description, image, rating }) {
  const MAX_WORDS = 10;

  const truncateDescription = (text) => {
    const words = text.split(" ");
    if (words.length > MAX_WORDS) {
      const truncatedWords = words.slice(0, MAX_WORDS);
      return truncatedWords.join(" ") + "...";
    }
    return text;
  };

  const truncatedDescription = truncateDescription(description);

  return (
    <ExperienceCardContainer>
      <CardImgBackground image={image}>
        <div>
          <img src={BrandLogo} style={{ margin: "25px" }} />
        </div>
      </CardImgBackground>

      <DivInformation>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DivRating>
            <p
              style={{
                fontSize: "18px",
              }}
            >
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              />{" "}
              {rating > 0 && <>{rating}</>}
            </p>
          </DivRating>
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              style={{ fontSize: "20px", color: "#1f2123" }}
            />
          </div>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{truncatedDescription}</p>
        </div>
        <Link to={`/experience/${id}`}>
          <ButtonViewMore>Ver detalle</ButtonViewMore>
        </Link>
      </DivInformation>
    </ExperienceCardContainer>
  );
}

export default ExperienceCard;
