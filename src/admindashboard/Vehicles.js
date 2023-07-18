import React, { useState } from 'react'
import Dashboard from '../Component/Dashboard'
import { Table } from 'react-bootstrap'
import VehicleService from '../service/VehicleService';
import "./Vehicle.css";

function Vehicles() {

  const[vehicles,setVehicles]=useState([])

  const [vehicleno,setVehicleno]=useState("");
  const [vehiclename,setVehiclename]=useState("");
  const [cab_color,setcab_color]=useState("");
  const [seat,setSeat]=useState("");


  const clearTextFields=()=>{
    setVehicleno("");
    setVehiclename("");
    setcab_color("");
    setSeat("");
  }

  const getAllVehicles=()=>{
    VehicleService.getAllVehicles().then((response) => {
      setVehicles(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  const saveVehicle=(e)=>{
    e.preventDefault();
  const vehicle={
    vehicleno,
    vehiclename,
    cab_color,
    seat
  }
  VehicleService.createVehicle(vehicle).then((response)=>{
    console.log(response.data);
    clearTextFields();
  }).catch(error=>{
    console.log(error);
  })
  }
  const deleteVehicle=(vehicleno)=>{
    if(vehicleno){
      VehicleService.deleteVehicle(vehicleno).then((response)=>{
        getAllVehicles();
      })
    }
  }

  return (
      <div>
            <Dashboard>
        <div className="vehicle-container">
            <br/>
            <div className="vtext_contain">
         <div className="vrow1">
            <label htmlFor="vehicleno" className="label1">Vehicle Number:</label>
            <input type="text" 
            id="vehicleno" 
            placeholder="Vehicle Number Here" 
            value={vehicleno}
            onChange={(e)=>setVehicleno(e.target.value)}
            />
            <label htmlFor="vehiclename" className="label1">Vehicle Name:</label>
            <input type="text" 
            id="vehiclename" 
            placeholder="Vehicle Name Here" 
            value={vehiclename}
            onChange={(e)=>setVehiclename(e.target.value)}
            />
            <label htmlFor="cab_color" className="label1">Color:</label>
            <input type="text" 
            id="cab_color" 
            placeholder="Color Here" 
            value={cab_color}
            onChange={(e)=>setcab_color(e.target.value)}
            />
        </div>
        <div className="vrow1">
            <label htmlFor="phone" className="label1">Seat Count:</label>
            <input type="text" 
            id="seatcount" 
            value={seat}
            onChange={(e)=>setSeat(e.target.value)}
            placeholder="Seat Count Here" />
            <button className="vadd-button" onClick={(e)=>{saveVehicle(e)}}>Add</button>
            <button className="vcancel-button">Cancel</button>
        </div>
            </div>
            </div>
            <br />
            <div className="vehicle-table_container">
              <Table className="vehicltable">
                <thead>
                  <tr>
                    <th>VehicleId</th>
                    <th>Vehicle Number</th>
                    <th>Vehicle Name</th>
                    <th>Color</th>
                    <th>Seats</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    vehicles.map(
                      vehicle=>
                      <tr key={vehicle.vehicleid}>
                        <td>{vehicle.vehicleid}</td>
                        <td>{vehicle.vehicleno}</td>
                        <td>{vehicle.vehiclename}</td>
                        <td>{vehicle.cab_color}</td>
                        <td>{vehicle.seat}</td>
                        <td><button className="vtupdate-btn">Update</button>
                        <button className="vdelete-btn" onClick={()=>deleteVehicle(vehicle.vehicleno)}>Delete</button></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
      </Dashboard>
    </div>
  )
}

export default Vehicles