import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

function Navbar() {
  return (
    <div className="nav">
      <div className="btns">
        <Link to="/dashboard">
          <Button  variant="outlined">Dashboard</Button>
        </Link>
        <Link to="/proposals">
          <Button variant="outlined">Proposals</Button>
        </Link>
        <Link to="/crm">
          <Button variant="outlined">CRM</Button>
        </Link>
      </div>
    </div>
  )
}
export default Navbar
