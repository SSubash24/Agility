import React, { useEffect } from 'react';
import './AboutUs.css';  // Add relevant CSS for the animation

// Team data as a static array
const teamData = [
  { name: "Cillian Murphy", title: "Founder & CEO", image: "/images/A1.jpeg" },
  { name: "Paul Walker", title: "Chief Technology Officer", image: "/images/A2.jpeg" },
  { name: "Ben Affleck", title: "Head of Content", image: "/images/A3.jpeg" }
];

// Functional component to render the AboutUs page
const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;

      cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;

        // Add 'slide-in' class when the card scrolls into view
        if (cardPosition < windowHeight - 100) {
          card.classList.add('slide-in');
        } else {
          card.classList.remove('slide-in');  // Remove class when the card goes out of view
        }
      });
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mt-5">
      <h2>Meet Our Team</h2>
      <div className="row mt-4">
        {teamData.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
};

export default AboutUs;
