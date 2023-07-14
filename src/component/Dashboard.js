import React from 'react'
import "./Dashboard.css"
import {sidebardata } from "./sidebardata"
import Logo from "./contact.png"

function Dashboard() {
  return (
    <div className="main">
    <div className="sidebar">
    <div className="topbar">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="hh1">ADMIN</h1>
      </div>
        <ul className="sidebarlist">
        {sidebardata.map((val,key)=>{
        return(
            <li key={key} className="row" id={window.location.pathname==val.link ? "active" : " "}onClick={()=>{
            window.location.pathname=val.link}}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
            </li>
        );
    })}</ul>
        </div>
        </div>
  )
}

export default Dashboard;

