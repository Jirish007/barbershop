import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Pricing from './components/Pricing';


const Offer = lazy(() => import('./components/Offer'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Services />
      <Pricing />

      {}
      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <Offer />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
