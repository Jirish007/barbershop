import React from 'react';

const services = [
  { icon: 'scissors', label: 'Hair Cut' },
  { icon: 'shower', label: 'Shaving' },
  { icon: 'cut', label: 'Beard Trim' },
  { icon: 'palette', label: 'Hair Coloring' },
  { icon: 'soap', label: 'Hair Removal' },
  { icon: 'child', label: 'Kids Haircut' },
];

const Services = () => {
  return (
    <section className="section bg-light" id="services">
      <div className="container text-center">
        <h2>Barbershop Services</h2>
        <div className="row mt-4">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 bg-dark text-white rounded">
                <i className={`fas fa-${service.icon} fa-2x mb-3`}></i>
                <h5>{service.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
