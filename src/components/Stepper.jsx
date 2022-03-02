import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Stepper.css'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','asahsah'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(2);


  return (
    <Box className='bx' sx={{ width: '50%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel style={{display:"block"}} {...labelProps}>{`${index+1}`}. Contact</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}