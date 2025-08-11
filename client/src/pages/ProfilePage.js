import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      api.get(`/announcements/user/${user.id}`)
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
    }
  }, [user]);

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="card">
      <h2>My Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      {/* Add an edit profile button/form here later */}

      <h3 style={{marginTop: '2rem'}}>My Announcements</h3>
      {loading && <p>Loading announcements...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && announcements.length === 0 && <p>You have not posted any announcements yet.</p>}
      <div className="announcements-grid">
        {announcements.map(ad => (
          <div key={ad.id} className="card">
            <h4><Link to={`/announcements/${ad.id}`}>{ad.title}</Link></h4>
            <p>Price: ${ad.price}</p>
            <p>Posted on: {new Date(ad.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
