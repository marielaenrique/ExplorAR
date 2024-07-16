import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CardsContainer,
  DivContent,
  ButtonPagination,
  PaginationDiv,
  H2Title,
  BackgroundDiv
} from "../../Styles/CategorySectionComponents.js";
import ExperienciesCard from "../Recommendations/ExperienceCard.jsx";
import CategoryService from "../../Services/Categories";

const CategorySection = () => {
  const location = useLocation();
  const [experiences, setExperiences] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [categoryID, setCategoryID] = useState(0);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/");

    if (pathSegments[1] === "category" && pathSegments.length >= 3) {
      const categoryId = parseInt(pathSegments[3]);
      setCategoryID(categoryId);
      const categoryTitle = pathSegments[2];
      setCategoryTitle(categoryTitle);
    }
  }, [location]);

  const fetchData = async (categoryID, pageNumber) => {
    const response = await CategoryService.listExperience(
      categoryID,
      pageNumber
    );
    const data = response;
    setExperiences(data.content);
    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    if (categoryID > 0) {
      fetchData(categoryID, currentPage);
    }
  }, [categoryID, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
<BackgroundDiv>
    <H2Title>{categoryTitle}</H2Title>
    <CardsContainer>
      <DivContent>
        {totalElements === 0 ? (
          <p>No hay recomendaciones disponibles.</p>
        ) : (
          experiences.map((experience) => (
            <ExperienciesCard
              key={experience.id}
              image={experience.images[0]?.url}
              title={experience.title}
              description={experience.description}
              id={experience.id}
              rating={experience.rating.toFixed(1)}
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
    </CardsContainer>
    </BackgroundDiv>
  );
};

export default CategorySection;
