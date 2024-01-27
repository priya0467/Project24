import React, { Fragment, useContext} from "react";
import { MdFoodBank } from "react-icons/md";
import classes from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../Store/cart-context";



const Header=(props)=>{
    
    const cartCtx=useContext(CartContext);

    const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);

    const imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZn24Ox1djvA4VqpFqLkrzaoZ4KW-OjRP_7A&usqp=CAU"
    return(
       <Fragment>
        <header className={classes.header}>
            <h1 className={classes.headericon} style={{ fontStyle: 'italic' }}>
            <MdFoodBank/>f☺☺d
            </h1>
            <button onClick={props.onShowCart} className={classes.headerbutton}>
                <span className={classes.spanicon}><FaShoppingCart /></span>
                <span className={classes.yourcart}>Your Cart</span>
                <span className={classes.num}>{numberOfCartItem}</span>
            
            </button>
        </header>
        <div className={classes.headerimage}>
            <img src={imageUrl} alt="Description of the image"
              
             />
        </div>
        <section className={classes.meals}>
        <h2 className={classes.titile}>
            Delicious Food,Delivered To You
        </h2>
        <p>
            Choose your faviroute meal from our broad selected of avilable melas and enjoy the Delicious lunch or dinner at home.
        </p>
        <p>
            All our meals are cooked with high-qulaity ingredients,justy-in-time and ofcoures the experance ed shedf
        </p>
       </section>
       </Fragment>

    )
}
export default Header;