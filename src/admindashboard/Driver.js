import React ,{useState,useEffect, Fragment}from "react";
import "./Driver.css"
import { Button,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Driver_Service from "../service/Driver_Service";
import Dashboard from "../Component/Dashboard";

const Driver=()=>{

    const[drivers,setDrivers]=useState([]);


    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[phno,setPhno]=useState("");
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        getAllDrivers();
    },[]);

    const saveOrUpdate=(e)=>{
        e.preventDefault();

        const driver={fname,lname,email,phno}

        if(id){
            Driver_Service.updateDriver(id,driver).then((response)=>{
                console.log("updated");
            }).catch(error=>{
                console.log(error);
            })
        }
    }

    const deleteDriver =(id)=>{
        if(id){
        Driver_Service.deleteDriver(id).then((respose)=>{
            getAllDrivers();
        })
        }
    }

    const clearTextFields=()=>{
        setFname("");
        setLname("");
        setEmail("");
        setPhno("");
    };

    const getAllDrivers=()=>{
        Driver_Service.getAllDrivers().then((response)=>{
            setDrivers(response.data)
        })
    }

    const saveDriver=(e)=>{
        e.preventDefault();

    const driver={fname,lname,email,phno}
        Driver_Service.createDriver(driver).then((response)=>{
            console.log(response.data)
            clearTextFields();
        }).catch(error=>{
            console.log(error)
        });
    };

    useEffect(()=>{ 
        Driver_Service.getDriverById(id).then((response)=>{
        setFname(response.data.fname);
        setLname(response.data.lname);
        setEmail(response.data.email);
        setPhno(response.data.phno);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    return(
        <div>
            <Dashboard>
        <div className="contain">
            <br/>
            <div className="text_contain">
         <div className="row1">
            <label htmlFor="firstname" className="label">First Name:</label>
            <input type="text" 
            id="firstname" 
            placeholder="First Name Here" 
            value={fname}
            onChange={(e)=>setFname(e.target.value)}
            />
            <label htmlFor="lastname" className="label">Last Name:</label>
            <input type="text" 
            id="lastname" 
            placeholder="Last Name Here" 
            value={lname}
            onChange={(e)=>setLname(e.target.value)}
            />
            <label htmlFor="email" className="label">Email:</label>
            <input type="text" 
            id="email" 
            placeholder="Email Here" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="row1">
            <label htmlFor="phone" className="label">Phone Number:</label>
            <input type="text" 
            id="phone" 
            value={phno}
            onChange={(e)=>setPhno(e.target.value)}
            placeholder="Phone Number Here" />
            <button className="update-button" onClick={(e)=>{saveDriver(e)}}>Add</button>
            <button className="cancel-button">Cancel</button>
        </div>
            </div>
                <br />
                <div className="table_contain">
                <Table className="table1">
                <thead >
                    <tr>
                        <th >Driver Id </th>
                        <th>First Name</th>
                        <th> Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            drivers.map(
                                driver=>
                                    <tr key={driver.id}>
                                        <td>{driver.id}</td>
                                        <td>{driver.fname}</td>
                                        <td>{driver.lname}</td>
                                        <td>{driver.email}</td>
                                        <td>{driver.phno}</td>
                                        <td><button className="tupdate-button" >Update</button>
                                        <button className="delete-button" onClick={()=>deleteDriver(driver.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                </tbody>
            </Table>
        </div>
        </div>
        </Dashboard>
        </div>
    )
}

export default Driver;
