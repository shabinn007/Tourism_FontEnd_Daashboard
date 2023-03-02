import React from 'react'
import {  Dropdown, NavDropdown } from 'react-bootstrap'
import { FaUserTie } from "react-icons/fa";
import { AiOutlineArrowRight } from 'react-icons/ai'
// import './NavBar.css'
import img from '../pics/compass.png'
// import img from "../pics/logo.png"

export default function Navbar() {
  return (
    <div className="NavBar">
      <div className= 'm-2'>
         <div className="Topbar" style={{display:'flex', justifyContent:'space-between',boxshadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
          <div className="left" >
          <img style={{width:"124px",height:"95px",marginLeft:'-30px',marginTop:"-15px"}} src={img} alt="" />
          
            <h4 className='logo_title' style ={{marginTop:'-15px'}}>XPLOR</h4>
       
    
          </div>
          <div className="middle" style ={{marginTop:'35px', color:'red', fontFamily:'cursive'}}><h4>PLACE NAME</h4></div>
          <div className="d-flex">
            <FaUserTie className='mt-2' style={{paddingTop: '1px'}}/>
         <NavDropdown 
              className='m-2'
              id="nav-dropdown-dark-example"
              title="Admin"
            >
      <Dropdown.Item styl href="#/action-1"><AiOutlineArrowRight/>View Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2"><AiOutlineArrowRight/>Settings</Dropdown.Item>
      <Dropdown.Item style={{color:"red"}} href="#/action-3" > <AiOutlineArrowRight/>Logout</Dropdown.Item>
      
      </NavDropdown>
      </div>
      </div>
    </div>
  </div>
  )
}
