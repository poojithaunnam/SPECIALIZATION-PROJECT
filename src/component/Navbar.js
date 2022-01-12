// import React, { useContext } from "react";
// import { CartContext } from "./Cart";

// const Navbar = () => {
//   const { totalItems } = useContext(CartContext);
//   return (
//     <>
//       <header>
//         <div className="continue-shopping">
//           <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
//           <h3>continue shoping</h3>
//         </div>

//         <div className="cart-icon">
//           <img src="./images/cart.png" alt="cart-logo" />
//           <p>{totalItems}</p>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React,{ Component} from 'react';
import {MenuItems} from "./MenuItems"

import './navbar.css'

 export class Navbar extends Component{
     state = {clicked:false}

     handleClick=()=>{
         this.setState({clicked:!this.state.clicked})
     }
    render(){
        return (
            
            <nav className="NavbarItems">
            <h1 className="navbar-logo">Ecommerce<i className='fab fa-react' ></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>

            <ul className={this.state.clicked ? 'nav-menu active' :
        'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}

                            </a>
                        </li>

                )
                
                })}
           
            </ul>
            {/* <Button>Sign up</Button> */}

            </nav>
           
        )

    }
}
export default Navbar;