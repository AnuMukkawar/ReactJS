import './App.css';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import {Header}  from './components/header/Header.js';
import {Home} from './components/home/Home.js';
import {About} from './components/about/About.js';
// import { BrowserRouter as Router, Switch, Route,Routes,Link } from "react-router-dom"


function App() {

  return (
    <>
    <Header />
    <main className='main'>
      <Home/>
      <About/>
    </main>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<About/>}/>
    </Routes>
    */}
    </>
  );
}

export default App;

