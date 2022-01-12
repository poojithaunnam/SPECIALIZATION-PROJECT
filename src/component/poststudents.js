import React, { Component } from 'react'
import axios from 'axios'
import "./poststudents.css"

class Poststd extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            firstname:'',
            lastname:'',
            emailid:'',
            password:'',
            confirmpassword:'',
            dob:'',
            mobileno:'',
            account:'',
            error:''

        }
    }
    handleChange=(event)=>
    {

        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit =(event)=>
    {

        event.preventDefault()
        
        axios.post('http://localhost:8888/saveCustomers',this.state)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    render(){
        const{id,firstname,lastname,emailid,password,confirmpassword,dob,mobileno,account}=this.state
        return(
            
           <div className='signup'>
                <form onSubmit={this.handleSubmit}>

                <table  align="center" cellpadding = "5">
                <tr>
              <td colspan="2"><h1 >User registration Form</h1></td>
             </tr>
             <hr></hr>

                   <tr>
                       <td  htmlFor="id">ID</td>
                        <tr><input type="text" name="id" value={id} onChange={this.handleChange}/></tr>
                   
                   </tr>
                   <br></br>
                    
                    <tr>
                       <td htmlFor="firstname">firstname</td>
                        <tr><input type="text" name="firstname" value={firstname} onChange={this.handleChange}/> </tr>
                        </tr>
                       
                        <br></br>
             <tr>
              <td htmlFor="lastname">lastname</td>
            <tr><input type="text" name="lastname" value={lastname} onChange={this.handleChange}/></tr>
          </tr>
                   <br></br>


                   <tr>
                       <td  htmlFor="emailid">emailid</td>
                        <tr><input type="text" name="emailid" value={emailid} onChange={this.handleChange}/></tr>
                        </tr>
                        <br></br>

                        <tr>
                    
                       <td  htmlFor="password">password</td>
                        <tr><input type="text" name="password" value={password} onChange={this.handleChange}/></tr>
                   </tr>
                   <br></br>
                   <tr>
                       <td  htmlFor="confirmpassword">confirmpassword</td>
                        <tr><input type="text" name="confirmpassword" value={confirmpassword} onChange={this.handleChange}/></tr>
                        </tr>
                        <br></br>
                        <tr>
                       <td  htmlFor="dob">dob</td>
                        <tr><input type="text" name="dob" value={dob} onChange={this.handleChange}/></tr>
                        </tr>
                        <br></br>
                        <tr>
                       <td  htmlFor="mobileno">mobileno</td>
                        <tr><input type="text" name="mobileno" value={mobileno} onChange={this.handleChange}/></tr>
                        </tr>
                        <br></br>
                        <tr>
                       <td  htmlFor="account">account</td>
                        <tr><input type="text" name="account" value={account} onChange={this.handleChange}/></tr>
                        </tr>
                        <br></br>

                  <tr>  <td><input type="submit" value="register"/></td>
                   <td> <input type="reset" value="reset"/></td></tr>
                 </table>
                </form>
                </div>
            
        )
    }
}
export default Poststd;