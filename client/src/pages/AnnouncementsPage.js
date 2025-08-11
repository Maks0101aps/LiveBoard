import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/announcements')
      .then(res => {
        setAnnouncements(res.data);
      })
      .catch(err => {
        setError('Failed to fetch announcements.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>All Announcements</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="announcements-grid">
        {announcements.map(ad => (
          <div key={ad.id} className="announcement-card">
            <div className="card-header">
              <h3><Link to={`/announcements/${ad.id}`}>{ad.title}</Link></h3>
              <div className="price-tag">${ad.price}</div>
            </div>
            <div className="card-body">
              <p><strong>Location:</strong> {ad.location}</p>
              <p><strong>Category:</strong> {ad.category}</p>
            </div>
            <div className="card-footer">
              <p>Posted by: <Link to={`/users/${ad.author.id}`}>{ad.author.username}</Link></p>
              <p><small>{new Date(ad.createdAt).toLocaleDateString()}</small></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
