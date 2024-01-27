import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedItemsAfterRemoval = [...state.items];
      updatedItemsAfterRemoval.splice(existingItemIndex, 1);

      return {
        items: updatedItemsAfterRemoval,
        totalAmount: state.totalAmount - existingItem.price * existingItem.amount,
      };

    case "INCREMENT_AMOUNT":
      const incAmountItems = state.items.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );
      const updatedTotalIncAmount =
        state.totalAmount + action.items.find((item) => item.id === action.id).price;
      return {
        items: incAmountItems,
        totalAmount: updatedTotalIncAmount,
      };

    case "DECREMENT_AMOUNT":
      const decAmountItems = state.items.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount - 1 } : item
      );
      const updatedTotalDecAmount =
        state.totalAmount - action.items.find((item) => item.id === action.id).price;
      return {
        items: decAmountItems,
        totalAmount: updatedTotalDecAmount,
      };

      default:
        return state;
    }
  };
  
  const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
    );
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({ type: "ADD_ITEM", item: item });
    };
  
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    };
  
    const updateItemAmount = (id, action) => {
        const updatedItems = cartState.items.map((item) =>
          item.id === id
            ? {
                ...item,
                amount: action === "INCREMENT_AMOUNT" ? item.amount + 1 : item.amount - 1,
              }
            : item
        );
      
        const updatedTotalAmount = calculateTotalAmount(updatedItems);
      
        dispatchCartAction({
          type: action,
          id: id,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        });
      };
      
      const calculateTotalAmount = (items) => {
        return items.reduce((total, item) => total + item.price * item.amount, 0);
      };
      
      
      
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      updateItemAmount: updateItemAmount,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  

export default CartProvider;
