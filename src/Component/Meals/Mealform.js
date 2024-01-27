import React, { useRef, useState } from "react";
import classes from'./Mealform.module.css';


const MealForm=(props)=>{
  const[amountIsValid,setAmountIsValid]=useState(true)
  const amountInputref=useRef();

  const submitHandeler=(event)=>{
      event.preventDefault();

      const enteredAmount = amountInputref.current.value;
      const eneredAmountNumber= +enteredAmount;
      if(enteredAmount.trim().length ===0 ||eneredAmountNumber <1 ||eneredAmountNumber>5){
        
        setAmountIsValid(false);
        return;  
      }

      props.onAddToCart(eneredAmountNumber)
  };
  return(
     <form className={classes.from} onSubmit={submitHandeler}>
        <div className={classes.formdiv}>
            <label>Amount</label>
            <input
            ref={amountInputref}
            id="amount"
            type="number"
            min={1}
            max={5}
            step={1}
            defaultValue={1}
            />
        </div>
        <button>
            +Add
        </button>
        {!amountIsValid && <p>Please enter a valid</p>}
     </form>
  )
}

export default MealForm;