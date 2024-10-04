// import React from 'react';
// import Header from './pages/home/Header';
// import HeroSection from './pages/home/HeroSection';
// import StatsSection from './pages/home/StatsSection';
// import BiddingSteps from './pages/home/BiddingSteps';
// import TopLots from './pages/home/TopLots';
// import AuctionItems from './pages/home/AuctionItems';
// import Testimonials from './pages/home/Testimonials';
// import TrustedBusinesses from './pages/home/TrustedBusinesses';
// import Footer from './pages/home/Footer';

// import './App.css'; // For styling

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HeroSection />
//       <StatsSection />
//       <BiddingSteps />
//       <TopLots />
//       <AuctionItems />
//       <Testimonials />
//       <TrustedBusinesses/>
//       <Footer />
//     </div>
    

//   );
// }

// export default App;


// import css
import './App.css';

// import libraries
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes/router.confog';

// Variable declarations

// Component definition 
function App() {
  // State variables

  // Hooks

  // Event handlers

  // Helper functions
  
  // Return statement
  return (
    <>
    <BrowserRouter>
      <RouterConfig/>
    </BrowserRouter>
    </>
  );
}

export default App;



