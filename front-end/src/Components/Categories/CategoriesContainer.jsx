import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import CategoryCard from "./CategoryCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesService from "../../Services/Categories.js"
import { CardContainer, Title} from "../../Styles/Categories";

const CategoriesContainer = () => {

	const [allCategories, setAllCategories] = useState([]);

	useEffect(() => {
        getCategories();
    }, []);
  
    const getCategories = async () => {
      try {
        const response = await CategoriesService.listCategory();
        setAllCategories(response);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
			{
			breakpoint: 1424,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
			breakpoint: 912,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
				}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1
				}
			},
		]
	};

	return (
		<>
			<Title>¿Qué tipo de experiencia quieres tener hoy?</Title>
		
			<CardContainer>
				<Slider {...settings}>
					{allCategories.map((category) => (
						<Link to={`/category/${category.title}/${category.id}`} key={category.id}>
							<CategoryCard
								img={category.image}
								title={category.title}
								description={category.description}
							/>
						</Link>
					))}
				</Slider>
			</CardContainer>
		
		</>
	);
};

export default CategoriesContainer;


