import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import './styles/BodyParts.css';
import './styles/Vitamins.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BodyParts from './components/BodyParts';
import Vitamins from './components/Vitamins';
import Exercise from './components/Exercise';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">AGILITY</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/body-parts">Body Parts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/vitamins">Vitamins</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/exercise">Exercise</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body-parts" element={<BodyParts />} />
        <Route path="/vitamins" element={<Vitamins />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
