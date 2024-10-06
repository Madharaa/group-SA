import React from "react";
import './BlogGrid.css';

const BlogGrid = () => {
  const blogs = [
    {
      title: "Strategies for Winning Big in Online Auctions",
      date: "December 12, 2024",
      image: "/images/img1.jpg",
      link: "#"
    },
    {
      title: "Navigating Live Bidding Tips for Success",
      date: "December 12, 2024",
      image: "/images/img2.jpg",
      link: "#"
    },
    {
      title: "Hidden Gems Finding Value in Auction Lots",
      date: "December 12, 2024",
      image: "/images/img3.jpg",
      link: "#"
    },
    {
      title: "Digital Auctions: The Future of Bidding",
      date: "December 12, 2024",
      image: "/images/img4.jpg",
      link: "#"
    },
    {
      title: "Collector's Corner: Bidding for Rare Finds",
      date: "December 12, 2024",
      image: "/images/img5.jpg",
      link: "#"
    },
    {
      title: "Explore the Bike Auction Universe with Us",
      date: "December 12, 2024",
      image: "/images/img6.jpg",
      link: "#"
    }
  ];

  return (
    <div className="blog-grid">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p className="blog-date">Our Blog, {blog.date}</p>
            <a href={blog.link} className="read-more">Read more ➔</a>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button>&lt;</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default BlogGrid;
