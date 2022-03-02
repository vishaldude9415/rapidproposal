import './App.css';
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Proposal from './components/Proposal';
import Crm from './components/Crm';
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
       <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/proposals" element={<Proposal />}/>
        <Route exact path="/crm" element={<Crm />}/>
          
      </Routes>

    </Router>
  );
}

export default App;
