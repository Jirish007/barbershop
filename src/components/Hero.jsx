import React from 'react';

const Hero = () => {
  return (
    <header className="bg-dark text-white text-center section">
      <div className="container">
        <h1 className="display-4">Welcome to Our Barbershop</h1>
        <p className="lead">Style, precision & grooming tailored to you.</p>
        <a href="#offer" className="btn btn-outline-light mt-3">Book an Appointment</a>
      </div>
    </header>
  );
};

export default Hero;
