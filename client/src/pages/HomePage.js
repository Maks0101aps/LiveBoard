import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const heroStyles = {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'var(--surface-color)',
    borderRadius: '8px',
    boxShadow: 'var(--box-shadow)',
    margin: '2rem 0'
  };

  const actionsStyles = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  };

  return (
    <>
      <div style={heroStyles}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Welcome to LiveBoard!</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          The best place to find and post announcements.
        </p>
        <div style={actionsStyles}>
          <Link to="/announcements" className="button">
            Browse Announcements
          </Link>
          <Link to="/announcements/new" className="button">
            Post an Ad
          </Link>
        </div>
      </div>

      <div className="featured-announcements">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Announcements</h2>
        <div className="announcements-grid">
          {/* Example Card 1 */}
          <div className="announcement-card">
            <h3>Modern Laptop for Sale</h3>
            <p><strong>Price:</strong> $850</p>
            <p><strong>Location:</strong> New York</p>
            <Link to="#" className="button">View Details</Link>
          </div>
          {/* Example Card 2 */}
          <div className="announcement-card">
            <h3>Apartment for Rent</h3>
            <p><strong>Price:</strong> $2,200/month</p>
            <p><strong>Location:</strong> San Francisco</p>
            <Link to="#" className="button">View Details</Link>
          </div>
          {/* Example Card 3 */}
          <div className="announcement-card">
            <h3>Graphic Design Services</h3>
            <p><strong>Price:</strong> $50/hour</p>
            <p><strong>Location:</strong> Remote</p>
            <Link to="#" className="button">View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
