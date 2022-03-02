import React from 'react'
import './Crm.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import Navbar from './Navbar';
import CrmTable from '../components/CRM/CrmTable'
import { Button } from '@mui/material';

function Crm() {
  return (
    <>
    <div className='mainDiv'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='container'>
            <Header/>
            <div style={{backgroundColor:"#0091FF", height:"90%"}}>
            <CrmTable/>
            <Button style={{margin:"50px", marginLeft:"150px", backgroundColor:"blue"}} variant="contained">CRM</Button>
            </div>
        </div>
    </div>
    </>
  
  )}
export default Crm