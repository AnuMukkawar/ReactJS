import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Header}  from './components/Header';
import { Home } from './components/Home';
import { About } from './About';
import { BrowserRouter as Router, Switch, Route,Routes,Link } from "react-router-dom"


function App() {

  return (
    <>
    <Header />
    <Router>
      <Route path='/' element={Home}/>
    </Router>
   
    </>
  );
}

export default App;

