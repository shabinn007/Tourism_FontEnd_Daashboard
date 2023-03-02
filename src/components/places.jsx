import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Navbar from './NavBar/Navbar'
import SideBar from './SideBar'


export default function places() {
  return (
    <div style={{maxWidth:'1500px'}}>
           <Navbar className='d-flex'/>
      <div className='d-flex'>

      <SideBar/>
      <div > 
        <Row style={{padding:"5px", justifyContent:'space-evenly'}}>
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        <Card className='cardd' style={{minHeight:"200px",width:'346px',position:"relative"}}>
          <div>
            <Row>
                    {/* ..........paste image here............ */}
              </Row>
            </div>
        </Card> 
        </Row>

            </div>
            </div>
            </div>


  )
}
