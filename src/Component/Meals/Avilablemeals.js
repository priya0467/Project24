import React from "react";
import classes from './Avilablemeal.module.css';
import MealList from "./Meallist";


const dummyData = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef patty with fresh lettuce',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Pizza',
      description: ' topped with a variety of fresh vegetables',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Salmon Salad',
      description: 'Healthy salad with grilled salmon, mixed greens',
      price: 39.99,
    },
  ];
  

  

const Avialbemeals=()=>{
    const mealList=dummyData.map(meal=><MealList
         key={meal.id}
         id={meal.id} 
         name={meal.name}
         discription={meal.description}
         price={meal.price}
         />)
    return(
        <section className={classes.list1}>
            <ul className={classes.list2}>
                {mealList}
            </ul>
        </section>

    )
}

export default Avialbemeals;