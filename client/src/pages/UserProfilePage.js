import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const UserProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await api.get(`/users/${id}`);
        setUser(userRes.data);
        const announcementsRes = await api.get(`/announcements/user/${id}`);
        setAnnouncements(announcementsRes.data);
      } catch (err) {
        setError('Failed to load user profile.');
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <div className="card">
        <h2>{user.username}'s Profile</h2>
        <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        <p><strong>Contact:</strong> {user.phone || user.email}</p>
      </div>

      <h3 style={{marginTop: '2rem'}}>Announcements from {user.username}</h3>
      <div className="announcements-grid">
        {announcements.map(ad => (
          <div key={ad.id} className="card">
            <h4><Link to={`/announcements/${ad.id}`}>{ad.title}</Link></h4>
            <p>Price: ${ad.price}</p>
            <p>Posted on: {new Date(ad.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
        {announcements.length === 0 && <p>This user has no active announcements.</p>}
      </div>
    </div>
  );
};

export default UserProfilePage;
