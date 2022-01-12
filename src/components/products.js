// export const Products = [
//   {
//     id: 1,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Samsung M21",
//     description: "white in color",
//     price: "2300",
//     img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 4,
//     title: "Iphone 12",
//     description: "Best mobile ever",
//     price: "90500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 5,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 6,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 7,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 8,
//     title: "Iphone 12",
//     description: "Best mobile ever",
//     price: "90500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 9,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
// ];

// export default Products;

import React, { useState } from 'react';

const Mobiles= 'Mobiles';


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: Mobiles,
      name: 'Samsung s21',
      cost: 10000,
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
   
    {
      category: Mobiles,
      name: 'Redmi 9',
      cost: 9000,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg',
    },

    {
      category: Mobiles,
      name: 'Redmi 9',
      cost: 9000,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg',
    },

    {
      category: Mobiles,
      name: 'Redmi 9',
      cost: 9000,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg',
    },

    {
      category: Mobiles,
      name: 'Redmi 9',
      cost: 9000,
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%22',
    },

    {
      category: Mobiles,
      name: 'Redmi 9',
      cost: 9000,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg',
    },


  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Mobiles);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Mobiles}>{Mobiles}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}