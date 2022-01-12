// import React, { Component } from 'react';
// import axios from 'axios'
// import "./login.css"
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
          
//             tempemail: '',
//             temppass:''
            
//         }
//     }
//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
        
//         axios.post('http://localhost:8888/login',this.state)
//         .then(res =>{
//             console.log(res.data)
//         })
//         .catch(error=>{
//             console.log(error)
//         })

//     }
   
//     render() {
//         const {  email,password} = this.state
//         return (
//             <div>
//                 <form  className='log' onSubmit={this.handleSubmit}>
//                     <div>
//                         <h1>Login</h1><hr></hr>
//                         <label htmlFor="">email ID  :  </label>
//                         <input type="text" name="email" value={email}  onChange={this.handleChange} />
//                     </div>
//                     <br></br>
//                     <div>
//                         <label htmlFor="">password  : </label>
//                         <input type="text" name="password" value={password} onChange={this.handleChange} />
//                     </div><br></br>
//                     <input type="submit" value="submit" />
//                 </form>
//             </div>
//         );
//     }
// }
// export default Login;



import React, { Component, useState } from 'react';
import axios from 'axios';



class Login extends Component {



constructor(props) {
super(props);
this.state = {
email:'',
password:'',
error:''
}

}

handelChange=event=>{
this.setState({[event.target.name]:event.target.value})
}
handelSubmit=event=>{
event.preventDefault()
console.log(this.state);
axios.post('http://localhost:8080/login',this.state). then(res=>{
console.log(res.data);
}).catch(
error=>{
console.log("data already present")
this.setState({error:'Invalid Username or password'})

}
)
}
render() {
const{email,password,error}=this.state;
// const {error,setError}=useState('');
return (
<>
{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
<span className="fa fa-sign-in me-1;text-align:center"></span> Login
</button>



{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel">Login</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
{/* <button className="btn btn-primary w-100 mb-4">
<span className="fa fa-google me-2"></span>Sign in With Google
</button>
<button className="btn btn-primary w-100 mb-4">
<span className="fa fa-facebook me-2"></span>Sign in With Facebook
</button> */}
{/* {error && (
<p className="error"> {error} </p>
)} */}
<form onSubmit={this.handelSubmit}>
{error ? <h2>{error}</h2>:null}



<div className="mb-3">
<label htmlFor="emailid" className="form-label">Email address</label>
<input type="email" className="form-control" id="emailid" name="email" value={email} aria-describedby="emailHelp" onChange={this.handelChange}/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="pass" className="form-label">Password</label>
<input type="password" className="form-control" id="pass" name="password" value={password} onChange={this.handelChange} />
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>

</div>

</div>
</div>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
</div>



</>
);
}
}
export default Login;