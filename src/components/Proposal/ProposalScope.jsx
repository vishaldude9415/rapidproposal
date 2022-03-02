import React, { useState } from 'react'
import Stepper from '../Stepper'
import { Button, FormControl, FormLabel, FormHelperText, FormGroup, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import DocTemplate from '../Template/DocTemplate'
import './ProposalScope.css'

function ProposalScope() {

  const [projectName, setprojectName] = useState("Natural gas")
  const [projectMonth, setprojectMonth] = useState("5 Months")


  return (
    <div style={{ backgroundColor: '#0091FF', height: '88%', display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"50px" }}>
      <div className="question1">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Question 1: What is the project based on?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Natural gas"
            name="radio-buttons-group"
          >
            <FormControlLabel onChange={(e)=>setprojectName(e.target.value)}
              value="Natural gas"
              control={<Radio />}
              label="Natural gas"
            />
            <FormControlLabel onChange={(e)=>setprojectName(e.target.value)} value="Wind turbine" control={<Radio />} label="Wind turbine" />
            <FormControlLabel onChange={(e)=>setprojectName(e.target.value)} value="Solar panels" control={<Radio />} label="Solar panels" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="question2">
        <FormControl style={{marginRight:"30px", color:"black"}}>
          <FormLabel id="demo-radio-buttons-group-label">Question 2: How long is this project?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="5 Months"
            name="radio-buttons-group"
          >
            <FormControlLabel
            onChange={(e)=>setprojectMonth(e.target.value)}
              value="5 Months"
              control={<Radio />}
              label="5 Months"
            />
            <FormControlLabel onChange={(e)=>setprojectMonth(e.target.value)} value="3 Months" control={<Radio />} label="3 Months" />
            <FormControlLabel onChange={(e)=>setprojectMonth(e.target.value)} value="7 Months" control={<Radio />} label="7 Months" />
          </RadioGroup>
        </FormControl>
      </div>
    

      <DocTemplate name={projectName} month={projectMonth} />
    </div>
  )
}

export default ProposalScope
