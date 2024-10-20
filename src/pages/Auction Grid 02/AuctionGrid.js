import React from 'react';
import './AuctionGrid.css';

const AuctionGrid = () => {
  const auctions = [
    {
      id: 1,
      image: './images/Acar1.jpg',
      title: '2024 Kawasaki KVF750',
      listingId: '1590443',
      itemNumber: '07661-019',
      closingTime: '07d 11h 28m 59s',
      bids: '05',
      price: 5760
    },
    {
      id: 2,
      image: './images/Acar2.jpg',
      title: 'Lamborghini KVF193',
      listingId: '4509127',
      itemNumber: '71209-224',
      closingTime: '02d 09h 54m 13s',
      bids: '04',
      price: 7250
    },
    {
        id: 3,
        image: './images/Acar3.jpg',
        title: '2024 Kawasaki KVF750',
        listingId: '1590443',
        itemNumber: '07661-019',
        closingTime: '07d 11h 28m 59s',
        bids: '05',
        price: 5760
      },
      {
        id: 4,
        image: './images/Acar4.jpg',
        title: '2024 Kawasaki KVF750',
        listingId: '1590443',
        itemNumber: '07661-019',
        closingTime: '07d 11h 28m 59s',
        bids: '05',
        price: 5760
      },
      {
        id: 5,
        image: './images/Acar5.jpg',
        title: '2024 Kawasaki KVF750',
        listingId: '1590443',
        itemNumber: '07661-019',
        closingTime: '07d 11h 28m 59s',
        bids: '05',
        price: 5760
      },
      {
        id: 6,
        image: './images/Acar6.jpg',
        title: '2024 Kawasaki KVF750',
        listingId: '1590443',
        itemNumber: '07661-019',
        closingTime: '07d 11h 28m 59s',
        bids: '05',
        price: 5760
      },
      
  ];

  return (
    <div className="auction-container">
      <div className="auction-header">
        <input type="text" placeholder="Search products..." className="search-input" />
        <div className="results-info">
        
          <select className="sort-select" defaultValue="default">
            <option value="default">Default sorting</option>
          </select>
         
        </div>
      </div>

      <div className="auction-grid">
        {auctions.map(auction => (
          <div key={auction.id} className="auction-item">
            <div className="auction-image">
              <img src={auction.image} alt={auction.title} />
            </div>
            <div className="auction-details">
              <h3>{auction.title}</h3>
              <div className="listing-info">
                <span>Listing ID: {auction.listingId}</span>
                <span>Item#: {auction.itemNumber}</span>
              </div>
              <div className="auction-status">
                <div className="time-left">
                  <i className="far fa-clock"></i>
                  <span>Closes in {auction.closingTime}</span>
                </div>
                <div className="bid-count">
                  <i className="fas fa-gavel"></i>
                  <span>Bids: {auction.bids}</span>
                </div>
              </div>
              <div className="price-section">
                <span className="price">${auction.price.toLocaleString()}</span>
                <button className="bid-button">Place a bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="prev-page">❮</button>
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="next-page">❯</button>
      </div>
    </div>
  );
};

export default AuctionGrid;