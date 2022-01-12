// import React, { createContext, useContext, useReducer } from "react";
// import "./cart.css";
// import { products } from "./product";
// import ContextCart from "./ContextCart";
// import reducer from "./reducer";

// // create a context
// export const CartContext = createContext();

// const initialState = {
//   item: products,
//   totalAmount: 25600,
//   totalItems: 0,
//   quantity: 1,
// };

// const Cart = () => {
//   // inPlace of useState we will use the useReducer Hook
//   // const [item, setItem] = useState(products);

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   return (
//     <>
//       <CartContext.Provider
//         value={{ ...state, clearCart, removeItem, increment, decrement }}>
//         <ContextCart />
//       </CartContext.Provider>
//     </>
//   );
// };

// // custom Hook
// export const useGlobalContext = () => {
//   return useContext(CartContext);
// };

// export default Cart;

import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: Rs.{getTotalSum()}</div>
    </>
  );
}




