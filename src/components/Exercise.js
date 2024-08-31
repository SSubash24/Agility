import React from 'react';

const exercises = [
    {
        title: "Yoga",
        image: "/images/yoga.jpeg",
        description: "Yoga helps improve flexibility, strength, and breathing."
    },
    {
        title: "Running",
        image: "/images/running.jpeg",
        description: "Running is a great way to improve cardiovascular fitness."
    },
    {
        title: "Weight Lifting",
        image: "/images/weightlifting.jpeg",
        description: "Build muscle strength and endurance through weight lifting."
    }
];

const Exercise = () => {
    return (
        <div>
            <main className="container mt-5">
                <h1 className="text-center">Fitness Exercises</h1>
                <div className="row">
                    {exercises.map((exercise, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={exercise.image} className="card-img-top" alt={exercise.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{exercise.title}</h5>
                                    <p className="card-text">{exercise.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
};

export default Exercise;
