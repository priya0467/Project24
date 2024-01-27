import React, { useContext } from "react";
import classes from './Meallist.module.css'


import MealForm from "./Mealform";
import CartContext from "../../Store/cart-context";


const MealList=(props)=>{
    const cartctx=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`
    
    const addToCartHandeler=amount=>{
         cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price

         })
    }

    return(
  <li className={classes.list1}>
    <div className={classes.div1}>
        <h3 className={classes.name}>
            {props.name}
        </h3>
        <div className={classes.dis}>
            {props.discription}
        </div>
        <div className={classes.price}>
            {price}
        </div>
    </div>
    <div className={classes.form}>
        <MealForm onAddToCart={addToCartHandeler}/>
    </div>
  </li>
)
}

export default MealList;