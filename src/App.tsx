import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Team from './components/Team.tsx';
import Services from './components/Services.tsx';
import Pricing from './components/Pricing.tsx';

const Offer = lazy(() => import('./components/Offer.tsx'));
const Footer = lazy(() => import('./components/Footer.tsx'));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Services />
      <Pricing />

      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <Offer />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
