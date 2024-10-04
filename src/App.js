import React from 'react';
import Header from './components/home/Header';
import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import BiddingSteps from './components/home/BiddingSteps';
import TopLots from './components/home/TopLots';
import AuctionItems from './components/home/AuctionItems';
import Testimonials from './components/home/Testimonials';
import Footer from './components/home/Footer';
import './App.css'; // For styling

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <BiddingSteps />
      <TopLots />
      <AuctionItems />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
