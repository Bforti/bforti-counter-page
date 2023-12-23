import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

const Home = (props) => {
	return (
		<div className="d-flex">
			<h1>{props.cinco}</h1>
			<h1>{props.cuatro}</h1>
			<h1>{props.tres}</h1>
			<h1>{props.dos}</h1>
			<h1>{props.uno}</h1>
			
		</div>
	);
};

export default Home;
