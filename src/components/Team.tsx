import React from 'react';
import fred from '../assets/fred.webp';
import adrian from '../assets/adrian.webp';
import elmer from '../assets/elmer.webp';
import james from '../assets/james.webp';
import walter from '../assets/walter.webp';
import alex from '../assets/alex.webp';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: 'Fred Morrison', role: 'Owner', image: fred },
  { name: 'Adrian Scold', role: 'Barber / Stylist', image: adrian },
  { name: 'Elmer Briggs', role: 'Barber / Stylist', image: elmer },
  { name: 'James Oliver', role: 'Barber / Stylist', image: james },
  { name: 'Walter Lilly', role: 'Barber / Stylist', image: walter },
  { name: 'Alex Green', role: 'Barber / Stylist', image: alex },
];

const Team: React.FC = () => {
  return (
    <section className="section bg-white" id="team">
      <div className="container text-center">
        <h2>Our Team</h2>
        <div className="row">
          {team.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{ height: '300px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="card-body">
                  <h5>{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <div>
                    <i className="fab fa-facebook-f me-2"></i>
                    <i className="fab fa-instagram me-2"></i>
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
