import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(null)
  let navigate = useNavigate()

  function clickHandler() {
    console.log('Clicked Button')
    console.log(`${email}`)
    console.log(`${password}`)

    {
      email == 'user@gmail.com' && password == 'user@1234'
        ? navigate('/dashboard')
        : setAlert('true')
    }
  }

  return (
    <div
      className="log"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: '100vh',
        color: 'white'
      }}
    >
      {alert && (
        <Alert
          style={{
            marginBottom: '80px',
            padding: '4px',
            fontSize: '13px',
            position: 'absolute',
            top: '10px',
          }}
          variant="filled"
          severity="error"
        >
          Incorrect Email or Password!
        </Alert>
      )}
      <div style={{backgroundColor:"white", display:"flex", flexDirection:"column", width:"30%", height:"75%", justifyContent:"center", alignItems:"center", position:"relative", borderRadius:"15px"}}>
          <div style={{position:"absolute", top:"15px"}}>
              <h1 className='txt' style={{color:"#1976D2"}}>Login</h1>
          </div>
        <div style={{marginBottom:"20px"}}>
          <TextField
            id="standard-basic"
            label="Enter Email"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value)
              setAlert(null)
            }}
          />
        </div>
        <div style={{marginBottom:"20px"}}>
            <TextField
          id="standard-basic"
          label="Enter Passowrd"
          variant="standard"
          onChange={(e) => {
            setPassword(e.target.value)
            setAlert(null)
          }}
        />
        </div>
        <div style={{ marginTop: '30px' }}>
          {/* {clickHandler()} */}
          {/* <Button onClick={()=>clickHandler()} variant="contained">Login</Button> */}
          <Button className="btn" onClick={() => clickHandler()} variant="contained">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
