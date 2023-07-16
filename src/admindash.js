import React from 'react'
import "./AdminDash.css"
import Dashboard from './Component/Dashboard'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Admin_Home from './admindashboard/Admin_Home'
import Driver from './admindashboard/Driver'
import Management from './admindashboard/ManageMent'
import Vehicles from './admindashboard/Vehicles'

const AdminDash = () => {
  return (
   <BrowserRouter>
   <Dashboard>
   <Routes>
    <Route path="/adminhome" element={<Admin_Home/>}/>
    <Route path="/driver" element={<Driver/>}/>
    <Route path="/management" element={<Management/>}/>
    <Route path="/vehicles" element={<Vehicles/>}/>
   </Routes>
   </Dashboard>
   </BrowserRouter>
  )
}

export default AdminDash;