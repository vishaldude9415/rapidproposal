import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import './Dashboard.css';
import Header from './Header';
import Navbar from './Navbar';
import PieChart from './PieChart';


function Dashboard() {
  return (
    <>
    <div className='mainDiv'>
        <div style={{height:"100vh"}} className='navbar'>
            <Navbar/>
        </div>
        <div className='container'>
            <Header/>
            <div style={{paddingTop:"10px"}} className="container_main">
                <div className="container_first">
                    <Card style={{padding:"0px", marginLeft:"10%", borderRadius:"10px"}} className='container_first_one'>
                        <CardContent style={{padding:"0px"}}>
                            <div style={{paddingBottom:"20px", textAlign:"center",justifyContent:"center", backgroundColor:"#bfbbbb", marginBottom:"30px"}} className="a">
                            <Typography style={{paddingTop:"15px"}}>Revenue</Typography>
                            </div>
                            <div style={{paddingBottom:"22px", paddingLeft:"5px"}} className="b">
                            <span>0-30 days</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><strong>$1,250,0000</strong></span>
                            </div>
                            <div style={{paddingBottom:"22px", paddingLeft:"5px" }}className="c">
                            <span>31-60 days</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><strong>$1,250,0000</strong></span>
                            </div>
                            <div style={{paddingBottom:"30px", paddingLeft:"5px"}} className="d">
                           <span>61-90 days</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><strong>$1,250,0000</strong></span>
                            </div>
                            <div className="e">
                            <span style={{paddingLeft:"5px"}}>Total</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><strong>$1,250,0000</strong></span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{borderRadius:"10px"}} className='container_first_two'>
                        <CardContent style={{borderRadius:"20px", position:"relative"}}>
                            <h3 style={{position:"absolute", top:"0px", right:"5px"}}>Revenue Forecast</h3>
                            <h3 style={{position:"absolute", top:"18px", right:"48px"}}>Year to Date</h3>
                            <PieChart/>
                        </CardContent>
                    </Card>
                </div>
                <div className="container_second_heading">
                <h3 style={{marginLeft:"10%"}}>Weekly Summary</h3>
                <div style={{marginBottom:"50px"}} className="container_second">
                      <Card className='container_card' style={{width:"20%", padding:"10px"}}>
                         <CardContent style={{padding:"0px"}}>
                            <div style={{paddingBottom:"15px", textAlign:"center"}} className="a">
                            <Typography style={{fontWeight:"800", color:"#0091FF"}}>Proposal Pending</Typography>
                            </div>
                            <div style={{paddingBottom:"10px"}} className="b">
                            <span>ACME201_CO<sub>2</sub> Capture</span>
                            </div>
                            <div style={{paddingBottom:"10px" }}className="c">
                            <span>ACME234_H<sub>2</sub>S System</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='container_card' style={{width:"20%", padding:"10px"}}>
                        <CardContent style={{padding:"0px"}}>
                            <div style={{paddingBottom:"15px", textAlign:"center"}} className="a">
                            <Typography style={{fontWeight:"800", color:"#0091FF"}}>Actions</Typography>
                            </div>
                            <div style={{paddingBottom:"10px"}} className="b">
                            <span>Review ACME234_SweetWater</span>
                            </div>
                            <div style={{paddingBottom:"10px" }}className="c">
                            <span>Follow Up with Client ACME456</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='container_card' style={{width:"20%", padding:"15px"}}>
                        <CardContent style={{padding:"0px"}}>
                            <div style={{paddingBottom:"15px", textAlign:"center"}} className="a">
                            <Typography style={{fontWeight:"800", color:"red"}}>At Risk</Typography>
                            </div>
                            <div style={{paddingBottom:"10px"}} className="b">
                            <span>WildCatters</span>
                            </div>
                            <div style={{paddingBottom:"10px" }}className="c">
                            <span>Krudd Partners</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  
  )}

export default Dashboard