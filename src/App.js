import React from 'react';
import propTypes from "prop-types";

function Food(props){
  return <div>
    <h3>I love {props.name}</h3>
    <h4>{props.rating}/5.0</h4>
    <img src={props.picture} alt={props.name}/>
  </div>;
}

const foodList = [
  {
    id:1,
    name:"kimchi",
    picture: "",
    rating: 5
  },
  {
    id:2,
    name:"garlic",
    picture:"",
    rating:2.2
  },
  {
    id:3,
    name:"pork",
    picture:"https://cafedelites.com/wp-content/uploads/2019/12/Pork-Loin-Roast-Recipe-1.jpg",
    rating: 8
  }];

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.string.isRequired
}


function App() {
  return(
  <div>
    {foodList.map(food =>
      <Food key={food.id} name={food.name} picture={food.picture} rating={food.rating}/>
    )}
  </div>
  );
}

export default App;
