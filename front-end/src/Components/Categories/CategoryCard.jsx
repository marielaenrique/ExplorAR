import React from "react";
import { Card,CardImgBanner } from "../../Styles/Categories";

const CategoryCard = ({img,title,description}) => {


	return (
		<Card>
			<CardImgBanner  img={img}>
				<div>
					<h1>{title}</h1>
				</div>
			</CardImgBanner>
			<div>
				<p>{description}</p>
			</div>
		</Card>
	);
};

export default CategoryCard;