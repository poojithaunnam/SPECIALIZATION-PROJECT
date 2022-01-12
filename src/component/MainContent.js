// import React from 'react'
// import products from "./product";


// const MainContent = () => {
//     // const {addItem} = useCart();
//     const listItems = products.map((item) =>
    
//         <div className="card" key={item.id}>
//             <div className="card_img">
//                 <img src={item.img} />
//             </div>
//             <div className="card_header">
//                 <h2>{item.products_name}</h2>
//                 <p>{item.description}</p>
//                 <p className="price">{item.price}<span>{item.quantity}</span></p>
//                 <button className="btn btn-success" 
//             //  onClick={() =>addItem(item.id)}
//                 >Add to cart</button>
//             </div>
//         </div>

//     );
//     return (
//         <div className="main_content">
//             <h3>Mobiles</h3>
//             {listItems}
//         </div>
//     )
// }
// export default MainContent;

import React, { useState } from 'react';

import Products from '../components/products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function MainContent() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default MainContent;