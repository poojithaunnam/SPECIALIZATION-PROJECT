import React  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import users from './component/user';
import Home from './component/Home';
import MainContent from './component/MainContent';
import './App.css';
import Navbar from './component/Navbar';
import Cart from './components/Cart';
import Login from './component/login';
import Poststd from './component/poststudents';


 
function App() {

    // const onAdd=(product) =>{
    //     const exist = cart.find(X=>x.id===product.id);
    //     if(exists){
    //         SpeechRecognitionAlternative(cart.map(x=>
    //             x.id===product.id ? {...exist,qty:exist.qty+1}:x));
    //     }else{
    //         SpeechRecognitionAlternative([...cart,{...product,qty:1}]);
    //     }
    // }
 
    return (
        <>
        <Navbar></Navbar>

        
        
<hr></hr>

        <Switch>
          
             <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
           
            <Route path='/user' component={users}/>
            <Route path='/signup' component={Poststd}/>
            <Route path='/login' component={Login}/>
            <div className='container'>
            <Route path='/products' component={MainContent}/></div> 
        </Switch>

        <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> MobileStore</a><br></br>
    <a href="https://www.facebook.com/"> facebook</a>
  </div>
 

</footer>
          
    </>

  
    )
}
 
export default App;

