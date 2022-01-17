import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
// import Product from "./components/ProductL";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/product" component={ProductList} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </main>
      </Fragment>
    );
  }
}

export default App;
