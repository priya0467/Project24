import React, { useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../Modal/Modal";
import CartContext from "../../Store/cart-context";


const Cart=(props)=>{

    const cartCtx = useContext(CartContext);

    const cartItems = (
        <ul className={classes.cartitems}>
    {cartCtx.items.map((item) => (
      <li key={item.id} className={classes.li}>
        <span className={classes.name}>{item.name} </span>
        <span className={classes.price}>${item.price.toFixed(2)}</span>
         <span className={classes.amount}> x{item.amount}</span> 
        <button
          onClick={() => cartCtx.removeItem(item.id)}
          className={classes.removeItem}
        >
          Remove
        </button>
        <button
  onClick={() => cartCtx.updateItemAmount(item.id, 'INCREMENT_AMOUNT', item.price)}
  className={classes.modifyAmount}
>
  +
</button>
<button
  onClick={() => cartCtx.updateItemAmount(item.id, 'DECREMENT_AMOUNT', item.price)}
  className={classes.modifyAmount}
>
  -
</button>

      </li>
    ))}
  </ul>
);

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>
                   Total Amount 
                </span>
                <span>
                ${cartCtx.totalAmount.toFixed(2)}
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes.bt1}>Close</button>
                <button className={classes.bt2}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;