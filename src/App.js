import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/Counter/counterSlice';
import Home from './components/Home';
import BodyParts from './components/BodyParts';
import Vitamins from './components/Vitamins';
import Exercise from './components/Exercise';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import './styles/BodyParts.css';
import './styles/Vitamins.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // Redux state and dispatch for the counter
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">AGILITY</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body-parts" element={<BodyParts />} />
        <Route path="/vitamins" element={<Vitamins />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
