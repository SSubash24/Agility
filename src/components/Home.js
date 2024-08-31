import React from 'react';
import './Home.css'; // Link to your CSS file

function Home() {
  return (
    <div className="homepage-container">
      {/* Main content */}
      <div className="content-container">
        <div className="image-section">
          <img src="/images/home3.png" alt="Muscle Icon" className="muscle-img"/>
          <div className="center-section">
            <div className="text-section">
              <h1 className="main-title">AGILITY</h1>
              <p className="sub-title">"Welcome to AGILITY - Your Health Companion."</p>
              <p className="quote">"To get rich, never risk your health."</p>
            </div>
            <div className="login-section">
              <button className="btn login-btn">LOGIN</button>
              <button className="btn register-btn">REGISTER</button>
            </div>
            <div className="social-section">
              <div className="social-login">
                <img src="/images/home5.png" alt="FB"/>
                <img src="/images/home4.png" alt="G"/>
              </div>
              <div className="social-signin">
                <img src="/images/home5.png" alt="FB"/>
                <img src="/images/home4.png" alt="G"/>
              </div>
            </div>
          </div>
          <img src="/images/home1.png" alt="Profile" className="profile-img"/>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <p>Email: <a href="mailto:agility24@gmail.com">agility24@gmail.com</a></p>
          <p>Contact no: 9899567043</p>
          <p>Address: xyz 4444 north south east west</p>
        </div>
        <div className="social-media-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
