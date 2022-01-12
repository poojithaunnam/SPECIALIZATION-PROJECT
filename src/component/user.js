
import React, { Component } from 'react'
import axios from 'axios'
import "./user.css"


class users extends Component{
    constructor(props){
        super(props);
        this.state = { 
            std:[],
            errors:''
        }
    }

    componentDidMount(){
      axios.get('http://localhost:8888/Customers')
                .then(res =>{
                    console.log(res.data);
                    this.setState({
                        std:res.data
                    })
                }).
            catch(error =>{
                console.log(error)
                this.setState({
                    errors:'unable to fetch data'
            })

            })

    }

    render(){

        const{std,errors}=this.state
        return(
        <div>
 <h1>User Details</h1><hr></hr>
          <table>
             
          <thead>
              <tr>
                  <th>Id</th>
                  <th>firstname</th>
                  <th>lastname</th>
                  <th>emailid</th>
                  <th>password</th>
                  <th>confirmpassword</th>
                  <th>dob</th>
                  <th>mobile no</th>
                  <th>account</th>

              </tr>

          </thead>
          <tbody>
              {std.length ? std.map(stds=>(<tr key={stds.id}> <td>{stds.id} </td> <td>{stds.firstname} </td> 
              <td>{stds.lastname} </td> <td>{stds.emailid} </td> <td>{stds.password}</td>  <td>{stds.confirmpassword}</td> 
              <td>{stds.dob}</td> <td>{stds.mobileno}</td> <td>{stds.account}</td></tr>)): null}
          { errors ? <h2>{errors}</h2> :null}

          </tbody>
          </table>
            </div>
        );
    }
}
export default users;