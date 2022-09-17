import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Home } from './Home';
import { About } from './About';
import { Routes, Route, useNavigate, Link } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={About}>About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Home />
        <About />
      </main>


    </div>
  );
}

export default App;

