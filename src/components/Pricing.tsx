import React from 'react';

type PriceItem = [title: string, price: number];

const prices: PriceItem[] = [
  ['Regular Haircut', 50],
  ['Royal Shave', 300],
  ['Specialty Men’s Haircut', 100],
  ['Massaging Shampoo', 30],
  ['Haircut + Royal Shave', 100],
  ['Haircut + Beard Trim', 65],
  ['Men’s Color', 40],
  ['Long Haircut', 90],
];

const Pricing: React.FC = () => {
  return (
    <section className="section bg-white" id="pricing">
      <div className="container text-center">
        <h2>Our Pricing</h2>
        <div className="row mt-4">
          {prices.map(([title, price], index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="d-flex justify-content-between border-bottom pb-2">
                <span>{title}</span>
                <strong>R{price}+</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
