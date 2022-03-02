import React from 'react'
import './Header.css'
import logo from '../tree.png'

function Header() {
  return (
    <div className="head">
      <div className='logo'>
          <img src={logo} alt="" />
      </div>
      <div className='heading'>
        <h1>Rapid Proposal</h1>
      </div>
    </div>
  )
}

export default Header
