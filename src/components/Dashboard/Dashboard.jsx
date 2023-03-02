import React from 'react'
import Navbar from "../NavBar/Navbar";
import SideBar from "../SideBar";
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FiDownload } from "react-icons/fi";
import { RiFileCopy2Fill } from "react-icons/ri";
import { BiDownvote } from 'react-icons/bi';






export default function Dashboard() {
  return (
    <div style={{maxWidth:'1450px'}}>
    
      <Navbar className='d-flex'/>
      <div className='d-flex'>

      <SideBar/>
      <div className='w-100'> 
        <Row style={{padding:"5px", justifyContent:'space-evenly'}}>
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
               <h2 >Tickets <br/> Sold</h2>
               <h3 style={{color:'black',position:'relative',top:'30px',left: "90px"}}> ₹2000</h3>
              <p style={{color:'grey',position:'relative',top:'40px',left: "90px"}}>compared to last month</p>

              </Row>
            </div>
        </Card> 
    <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
               <h2>Most <br/> Visited</h2>
               <h3 style={{color:'black',position:'relative',top:'30px',left: "90px"}}> KIDS</h3>

               <p style={{color:'grey',position:'relative',top:'40px',left: "90px"}}>compared to last month</p>

              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
              <h2>Total <br/> Visitors</h2> 
              <h3 style={{color:'black',position:'relative',top:'30px',left: "90px"}}> 277</h3>

              <p style={{color:'grey',position:'relative',top:'40px',left: "90px"}}>compared to last month</p>
              </Row>
            </div>
        </Card> 
       
    </Row>
    </div>
    </div>
    </div>


  )
}
