import React from 'react'
import Stepper from '../Stepper'
import { Button } from '@mui/material'
import './ContactMade.css'

function Contact(){
  return (
    <div>
      <div className="col1">
        <div className="companyLabel">Company Name</div>
        <div className="companyName">Blue Energy LLC</div>
      </div>
    </div>
  )
}

function ContactMade() {
  return (
    <div style={{ backgroundColor: '#0091FF', height: '88%' }}>
      <h3>Blue Energy Skid Proposal</h3>
      <Stepper />
      <div className="input">
        <input style={{ padding: '7px', borderRadius: '0px', outline: 'none' }} type="text"/>
        <Button style={{ borderRadius: '0', backgroundColor: 'blue' }} variant="contained">Import from CRM</Button>
        <Contact/>
      </div>
    </div>
  )
}

export default ContactMade
