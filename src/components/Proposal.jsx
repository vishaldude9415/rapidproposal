import {React, useState} from 'react'
import './Proposal.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import Navbar from './Navbar';
import ContactMade from './Proposal/ContactMade';
import NeedsDefined from './Proposal/NeedsDefined';
import ProposalScope from './Proposal/ProposalScope';
import ApprovalSubmit from './Proposal/ApprovalSubmit';
import ProposalMain from './Proposal/ProposalMain'

function Proposal() {

  const [table, setTable] = useState("true");
  const [contactMade, setcontactMade] = useState("false");
  const [needsDefined, setneedsDefined] = useState("false");
  const [proposalScope, setproposalScope] = useState("false");
  const [approvalSubmit, setapprovalSubmit] = useState("false");

let pp = {
      changeTable:tableChange,
       changeContact:contactChange,
      changeNeeds:needsDefinedChange,
      changeProposal:proposalScopeChange,
      changeApproval:approvalSubmitChange
    }

    function contactChange(a){
      setcontactMade(a);
    }
    function tableChange(a){
      setTable(a);
    }
    function needsDefinedChange(a){
      setneedsDefined(a);
    }
    function proposalScopeChange(a){
      setproposalScope(a);
    }
    function approvalSubmitChange(a){
      setapprovalSubmit(a);
    }

  return (
    <>
    <div className='mainDiv'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='container'>
            <Header/>
            {console.log(table)}
          {/* {contactMade=="true"?<ContactMade/>: (needsDefined=="true"?<NeedsDefined/>:(proposalScope=="true"? <ProposalScope/>:<ApprovalSubmit/>)) } */}
          {table=="true"?<ProposalMain a={pp}/> :(contactMade=="true"?<ContactMade/>: (needsDefined=="true"?<NeedsDefined/>:(proposalScope=="true"? <ProposalScope/>:<ApprovalSubmit a={tableChange}/>)) )}
        </div>
    </div>
    </>
  
  )}

export default Proposal