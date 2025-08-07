import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section bg-black text-white" id="footer">
      <div className="container text-center">
        <h5>THE BARBERSHOP</h5>
        <p>17 Green St,Bertrams,JHB 2001,SA</p>
        <p>support@barbershop.com | +27 60717 3434</p>
        <p>Mon-Thu: 09:00 - 19:00 | Sat-Sun: 09:00 - 19:00</p>
        <a href="https://wa.me/1234567890" className="btn btn-success mt-2">
          <i className="fab fa-whatsapp"></i> Message Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
