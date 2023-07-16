import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { RegisterApi } from "../service/Api";
import { StoreUserData } from "../service/Storage";
import { isAuthenticated } from "../service/Auth";
import "./UserRegister.css";
export default function URegisterpage(){

   const InitialErrors={
      email: {required:false},
      uname: {required:false},
      phno: {required:false},
      password:{required:false},
      name:{required:false},
      custom_error:null
  }

    const [error,seterror]=useState(InitialErrors);

    const [loading,setloading]=useState(false)

    const handleSubmit=(event)=>{
      event.preventDefault();
      let errors=InitialErrors;
      let hasError=false;

      if(inputs.email==""){
         errors.email.required = true ;
         hasError=true;
      }
      if(inputs.name==""){
         errors.name.required = true ;
         hasError=true;
      }
      if(inputs.uname==""){
         errors.uname.required = true ;
         hasError=true;
      }
      if(inputs.phno==""){
         errors.phno.required = true ;
         hasError=true;
      }
      if(inputs.password==""){
         errors.password.required = true ;
         hasError=true;
      }
      if(inputs.password.length<6){
        errors.password.length=true;
        hasError=true;
      }

      if(!hasError){
         setloading(true);
      RegisterApi(inputs)
         .then((response) => {
      console.log(response);
      StoreUserData(response.data.idToken);
      window.location.href = "/login";
      })
      .catch((err) => {
   
      if(err.response.data.error.message=="EMAIL_EXISTS"){
      seterror({...errors,custom_error:"Email has been already Registered"})
      }
      })
      .finally(() => {
      setloading(false);
      });
      }
       seterror({...errors});

      }

      const [inputs,setInputs]=useState({
          email:"",
          name:"",
          password:"",
          uname:"",
          phno:"",
    })

    const handleInputs=(event)=>{
      setInputs({...inputs,[event.target.name]:event.target.value})
    }

    if(isAuthenticated()){
      return <Navigate to="/userlogin"/>
    }

    return(
        <section className="register-block">
            <div className="reg-container">
               <div className="row ">
                  <div className="col register-sec">
                     <h2 className="text-center">User Register</h2>
                     <form onSubmit={handleSubmit}className="register-form" action="" >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
                        <input type="text" className="form-control" onChange={handleInputs} name="name" id="" / >
                        {error.name.required?
                            (<span className="text-danger" >
                            Name is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                     <label htmlFor="exampleInputEmail1" className="text-uppercase">username</label>
                     <input type="text" className="form-control" onChange={handleInputs} name="uname" id="" / >
                        {error.uname.required?
                            (<span className="text-danger" >
                            User Name is required.
                        </span>):null
                        }
                     </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                        <input type="text"  className="form-control" onChange={handleInputs} name="email" id="" / >
                        { error.email.required?
                            (<span className="text-danger" >
                            Email is required.
                        </span>):null
                        }
                     </div>

                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Phone Number</label>
                        <input type="text" className="form-control" onChange={handleInputs} name="phno" id="" / >
                        {error.phno.required?
                            (<span className="text-danger" >
                            Phone number is required.
                        </span>):null
                        }
                     </div>

                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password"  onChange={handleInputs} name="password" id="" />
                        {error.password.required?
                            (<span className="text-danger" >
                            Password is required.
                        </span>):null
                        }{error.password.length?
                           (<span className="text-danger">
                              Password Must be above 6 characters
                           </span>):null
                        }
                     </div>

                     <div className="form-group">
                        <span className="text-danger" >
                        {error.custom_error?
                           (<p>{error.custom_error}</p>):null
                        }
                        </span>
                        {loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                        ):null
                        }
          
                        <input type="submit" className="btn-register" disabled={loading} value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       Already have account ? Please <Link to="/userlogin">Login</Link>
                     </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
          </section>
    )
}