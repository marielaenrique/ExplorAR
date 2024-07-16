import React, { useEffect, useState } from "react";
import ExperienciesCard from "./ExperienceCard";
import {
  DivContent,
  H2Title,
  PaginationDiv,
  ButtonPagination,
  BackgroundDiv,
} from "../../Styles/RecommendationsComponent";
import ExperiencesService from "../../Services/Experiences";

const RecommendationsContainer = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [randomRecommendations, setRandomRecommendations] = useState([]);

  const fetchData = async (pageNumber) => {
    try {
      const response = await ExperiencesService.list(pageNumber);
      const data = response;
      setTotalElements(data.totalElements);
      setRecommendations(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomRecommendations = () => {
    const shuffledData = [...recommendations].sort(() => Math.random() - 0.5);
    setRandomRecommendations(shuffledData);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    generateRandomRecommendations();
  }, [recommendations]);

  return (
    <BackgroundDiv>
      <H2Title>Nuestras recomendaciones</H2Title>
      <DivContent>
        {totalElements === 0 ? (
          <p>No hay recomendaciones disponibles.</p>
        ) : (
          randomRecommendations.map((recommendation) => (
            <ExperienciesCard
              key={recommendation.id}
              image={recommendation.images[0]?.url}
              title={recommendation.title}
              description={recommendation.description}
              id={recommendation.id}
              rating={recommendation.rating.toFixed(1)}
            />
          ))
        )}
      </DivContent>
      <PaginationDiv>
        <ButtonPagination onClick={() => handlePageChange(0)}>
          Primera
        </ButtonPagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <ButtonPagination
            key={index}
            onClick={() => handlePageChange(index)}
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </ButtonPagination>
        ))}
        <ButtonPagination
          onClick={() =>
            handlePageChange(totalPages > 0 ? totalPages - 1 : totalPages)
          }
        >
          Última
        </ButtonPagination>
      </PaginationDiv>
    </BackgroundDiv>
  );
};

export default RecommendationsContainer;
