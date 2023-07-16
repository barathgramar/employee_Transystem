import { useState } from "react";
import { ALoginApi } from "../service/Api";
import { StoreUserData } from "../service/Storage";
import { isAuthenticated } from "../service/Auth";
import { Link, Navigate } from "react-router-dom";
import "./AdminLogin.css"

export default function ULoginPage(){

    const InitialErrors={
        email:{required:false},
        password:{required:false},
        custom_error:null
    }
    const[error,seterror]=useState(InitialErrors);

    const [loading,setloading]=useState(false);

    const handleSubmit=(event)=>{
        console.log(inputs);
        event.preventDefault();
        let errors=InitialErrors;
        let hasError=false;
    
        if(inputs.email==""){
        errors.email.required = true ;
        hasError=true;
        }
        if(inputs.password==""){
        errors.password.required = true ;
        hasError=true;
        }
        if(!hasError){
            setloading(true);
         ALoginApi(inputs).then((response) => {
            console.log(response);
            StoreUserData(response.data.idToken);
            window.location.href = "/adminhome";
        })
        .catch((err) => {
            if(err.code=="ERR_BAD_REQUEST")
            seterror({...errors,custom_error:"Invalid Username or Password"})
        })
        .finally(() => {
        setloading(false);
        });
         }
         seterror({...errors});
        }

        const handleInputs=(event)=>{
            setInputs({...inputs,[event.target.name]:event.target.value})
          }

        const [inputs,setInputs]=useState({
            email:"",
            password:"",
          })

      return(
        <section className="login-block">
            <div className="container1">
                <div className="row ">
                    <div className="login-sec">
                        <h2 className="login-sec-heads">Admin</h2>
                        <form  onSubmit={handleSubmit} className="login-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" name="email"  id="" onChange={handleInputs} placeholder="email"  />
                            {error.email.required?
                                (<span className="text-danger" >
                                Email is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input  className="form-control" type="password"  name="password"onChange={handleInputs} placeholder="password" id="" />
                            {error.password.required?
                                (<span className="text-danger" >
                                Password is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
                        {loading?(<div  className="text-center">
                                <div className="spinner-border text-primary " role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div>):null}
                           <span className="text-danger" >
                           {error.custom_error?
                                (<p>{error.custom_error}</p>):null
                           }
                            </span>
                            <input  type="submit" className="btn-login"  disabled={loading} value="Login" />
                        </div>
                        <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
)
}