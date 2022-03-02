import React from 'react'
import ProposalTable from './ProposalTable'
import './ProposalMain.css'
import { Button } from '@mui/material'


function ProposalMain(props) {

  function clickHandler() {
    console.log("Click Handler Called" + props.a)
    props.a.changeTable("false");
    props.a.changeProposal("true")
  }




  return (
    <div style={{backgroundColor:"#0091FF", height:"90%"}}>
      <ProposalTable />
      <div className="input">
        <input style={{padding:"7px", borderRadius:"0px", outline:"none"}} type="text" />
        <Button style={{borderRadius:"0", backgroundColor:"blue"}} variant="contained">Search</Button>
      </div>
      <div style={{display:"flex", width:"500px", margin:"50px",marginLeft:"150px"}}>
        <Button onClick={()=>clickHandler()} style={{marginRight:"10px", width:"100px", height:"47px", borderRadius:"5px", backgroundColor:"blue"}} variant="contained">New Proposal</Button>
        <Button style={{borderRadius:"0", width:"100px", height:"47px" , borderRadius:"5px", backgroundColor:"blue"}} variant="contained">Proposals Folder</Button>
      </div>
    </div>
  )
}

export default ProposalMain
