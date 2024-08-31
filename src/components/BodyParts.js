import React from 'react';
import './BodyParts.css'; // Add custom CSS if needed

function BodyParts() {
  return (
    <div>
      <header>
<h2>Body-Parts</h2>
      </header>

      <main className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts1.jpeg" className="card-img-top" alt="Human Brain" />
              <div className="card-body">
                <h5 className="card-title">Human Brain</h5>
                <p className="card-text">Learn about the brain, its functions, and ways to maintain its health.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts2.jpeg" className="card-img-top" alt="Human Heart" />
              <div className="card-body">
                <h5 className="card-title">Human Heart</h5>
                <p className="card-text">Understand the heart's role and ways to keep it strong.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts.jpeg" className="card-img-top" alt="Human Eye" />
              <div className="card-body">
                <h5 className="card-title">Human Eye</h5>
                <p className="card-text">Explore the anatomy and functioning of the human eye and tips for eye care.</p>
              </div>
            </div>
          </div>
        </div>

        <br /><br /><br /><br />

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts3.jpeg" className="card-img-top" alt="Human Intestine" />
              <div className="card-body">
                <h5 className="card-title">Human Intestine</h5>
                <p className="card-text">Learn about the digestive system and how the intestines process food.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts4.jpeg" className="card-img-top" alt="Human Lung" />
              <div className="card-body">
                <h5 className="card-title">Human Lung</h5>
                <p className="card-text">Discover the importance of lung health and tips to improve respiratory function.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/body-parts5.jpeg" className="card-img-top" alt="Human Kidney" />
              <div className="card-body">
                <h5 className="card-title">Human Kidney</h5>
                <p className="card-text">Understand the role of kidneys in filtering blood and maintaining overall health.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>Email: agility24@gmail.com | Address: xyz 4444 north south east west</p>
        <p>Contact no: 9899567043</p>
        <div className="social-icons">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default BodyParts;
