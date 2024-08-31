import React, { useState } from 'react';
import './Vitamins.css';


const vitaminsData = [
  { id: 1, name: 'Vitamin A', description: 'Vitamin A is important for normal vision, the immune system, and reproduction.', img: '/images/VA.jpeg' },
  { id: 2, name: 'Vitamin B', description: 'Vitamin B complex plays a vital role in maintaining good health and well-being.', img: '/images/VB.jpeg' },
  { id: 3, name: 'Vitamin C', description: 'Vitamin C is necessary for the growth, development, and repair of all body tissues.', img: '/images/VC.jpeg' },
  { id: 4, name: 'Vitamin D', description: 'Vitamin D is important for maintaining bone health and immune function.', img: '/images/VD.jpeg' },
  { id: 5, name: 'Vitamin E', description: 'Vitamin E acts as an antioxidant, helping to protect cells from damage.', img: '/images/VE.jpeg' },
  { id: 6, name: 'Vitamin K', description: 'Vitamin K is crucial for blood clotting and bone health.', img: '/images/VK.jpeg' }
];

function Vitamins() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVitamins = vitaminsData.filter(vitamin =>
    vitamin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Vitamins</h1>
      <input
        type="text"
        placeholder="Search for vitamins..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control my-3"
      />
      <div className="row vitamins-cards">
        {filteredVitamins.map(vitamin => (
          <div className="col-md-4" key={vitamin.id}>
            <div className="card">
              <img src={vitamin.img} className="card-img-top" alt={vitamin.name} />
              <div className="card-body">
                <h5 className="card-title">{vitamin.name}</h5>
                <p className="card-text">{vitamin.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitamins;
