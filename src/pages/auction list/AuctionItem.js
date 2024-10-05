import React, { useState } from 'react';
import './AuctionItem.css'; // Import CSS for styling

// Correct the import paths for the images
import image2 from './images/image2.jpeg'; 
import image3 from './images/image3.jpeg'; 
import image4 from './images/image4.jpeg'; 
import image5 from './images/image5.jpeg'; 

const AuctionItem = () => {
    // Auction data for the 3 pages
    const auctionPages = [
        [
            {
                id: 1,
                name: 'Your Dream Car from Our Auctions!',
                details: '32,789 Miles, Black, AWD, 4-Cylinder',
                bid: '$7,750',
                timeRemaining: { days: 175, hours: 5, minutes: 59, seconds: 27 },
                imageUrl: image2
            },
            {
                id: 2,
                name: 'Citroen C5 - X Shine Hybrid Car',
                details: '25,000 Miles, Blue, Hybrid, 6-Cylinder',
                bid: '$2,790',
                timeRemaining: { days: 145, hours: 6, minutes: 49, seconds: 26 },
                imageUrl: image3
            },
            {
                id: 3,
                name: 'Hyundai Bayon 10 TGDi 48w XLINE Car',
                details: '16,000 Miles, White, FWD, 4-Cylinder',
                bid: '$4,750',
                timeRemaining: { days: 126, hours: 6, minutes: 35, seconds: 36 },
                imageUrl: image5
            },
            {
                id: 4,
                name: 'Citroen C3 Aircross PureTech 110 S&S Car',
                details: '12,500 Miles, Orange, AWD, 4-Cylinder',
                bid: '$7,250',
                timeRemaining: { days: 129, hours: 11, minutes: 34, seconds: 12 },
                imageUrl: image4
            },
        ],
        [
            {
                id: 1,
                name: 'Honda Civic Hybrid',
                details: '30,000 Miles, Red, Hybrid, 4-Cylinder',
                bid: '$3,900',
                timeRemaining: { days: 120, hours: 7, minutes: 45, seconds: 20 },
                imageUrl: image2
            },
            {
                id: 2,
                name: 'Ford Mustang GT',
                details: '12,000 Miles, Black, V8, RWD',
                bid: '$25,000',
                timeRemaining: { days: 90, hours: 10, minutes: 15, seconds: 50 },
                imageUrl: image3
            },{
                id: 3,
                name: 'Hyundai Bayon 10 TGDi 48w XLINE Car',
                details: '16,000 Miles, White, FWD, 4-Cylinder',
                bid: '$4,750',
                timeRemaining: { days: 126, hours: 6, minutes: 35, seconds: 36 },
                imageUrl: image5
            }
        ],
        [
            {
                id: 1,
                name: 'Tesla Model 3',
                details: '5,000 Miles, White, Electric, AWD',
                bid: '$45,000',
                timeRemaining: { days: 30, hours: 9, minutes: 50, seconds: 10 },
                imageUrl: image5
            },{
                id: 2,
                name: 'Ford Mustang GT',
                details: '12,000 Miles, Black, V8, RWD',
                bid: '$25,000',
                timeRemaining: { days: 90, hours: 10, minutes: 15, seconds: 50 },
                imageUrl: image3
            },{
                id: 3,
                name: 'Hyundai Bayon 10 TGDi 48w XLINE Car',
                details: '16,000 Miles, White, FWD, 4-Cylinder',
                bid: '$4,750',
                timeRemaining: { days: 126, hours: 6, minutes: 35, seconds: 36 },
                imageUrl: image5
            },  {
                id: 3,
                name: 'Citroen C3 Aircross PureTech 110 S&S Car',
                details: '12,500 Miles, Orange, AWD, 4-Cylinder',
                bid: '$7,250',
                timeRemaining: { days: 129, hours: 11, minutes: 34, seconds: 12 },
                imageUrl: image4
            },
        ]
    ];

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1); // Start at page 1

    // Function to handle page change based on button click
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Function to go to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to go to the next page
    const goToNextPage = () => {
        if (currentPage < auctionPages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="auction-container">
            {/* Render auction items based on the current page */}
            {auctionPages[currentPage - 1].map((item) => (
                <div key={item.id} className="auction-item">
                    <div className="icon-container">
                        <img src={item.imageUrl} alt={item.name} className="auction-image" />
                    </div>
                    <div className="item-details">
                        <h2>{item.name}</h2>
                        <p>{item.details}</p>
                        <div className="auction-info">
                            <span>Auction Ending:</span>
                            <div className="timer">
                                <div>{item.timeRemaining.days}</div>
                                <div>{item.timeRemaining.hours}</div>
                                <div>{item.timeRemaining.minutes}</div>
                                <div>{item.timeRemaining.seconds}</div>
                            </div>
                            <span>Days : Hours : Minutes : Seconds</span>
                        </div>
                        <div className="bid-section">
                            <p>Current Bid:</p>
                            <h3>{item.bid}</h3>
                            <button className="bid-button">Place a Bid</button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination buttons */}
            <div className="pagination-buttons">
                {/* Previous button */}
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    {'<'} {/* Go to previous page */}
                </button>

                {/* Page number buttons */}
                {[...Array(auctionPages.length)].map((_, page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page + 1)}
                        className={currentPage === page + 1 ? 'active' : ''}
                    >
                        {page + 1}
                    </button>
                ))}

                {/* Next button */}
                <button onClick={goToNextPage} disabled={currentPage === auctionPages.length}>
                    {'>'} {/* Go to next page */}
                </button>
            </div>
        </div>
    );
};

export default AuctionItem;
