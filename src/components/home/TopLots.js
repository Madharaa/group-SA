import React, { useState } from 'react'; // Import React and useState only once
import './TopLots.css'; // Styling for top lots section
import CarListing from './CarListing'; // Correct path to CarListing
import Pagination from './Pagination'; // Correct path to Pagination

function TopLots() {
  const cars = [
    {
      image: './images/lambogreen.png', // Replace with your actual image path
      name: '2024 Kawasaki KVF750',
      listingId: '1590443',
      itemId: '07661-019',
      closesIn: '07d 11h 28m 59s',
      bids: '05',
      price: '5,760',
    },
    {
      image: './images/kawasaki.png', // Replace with your actual image path
      name: 'Lamborghini KVF193',
      listingId: '4509127',
      itemId: '71209-224',
      closesIn: '02d 09h 54m 13s',
      bids: '04',
      price: '7,250',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Example current page
  const totalPages = 3; // Example total pages

  return (
    <div className="app-container">
      <header>
        <h1 className="auction-title">Top lots of the Auction</h1>
        <p className="auction-subtitle">
          Explore the pinnacle of our auction with the finest lots. From rare treasures to exquisite finds, discover the auction's crowning achievements.
        </p>
        <button className="explore-more-btn">Explore More</button>
      </header>
      <div className="car-listings">
        {cars.map((car, index) => (
          <CarListing key={index} car={car} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TopLots;
