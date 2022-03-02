import React from 'react'

function ApprovalSubmit(props) {
   function handleClick(){
     console.log("Button Clicked")
     props.a("true");
   }

  return (
    <div>
      <h1>Approval Submit</h1>
      <button onClick={handleClick}>ChangeTable</button>
    </div>
  )
}

export default ApprovalSubmit