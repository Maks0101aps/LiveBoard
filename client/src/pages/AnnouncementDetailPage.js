import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const AnnouncementDetailPage = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/announcements/${id}`)
      .then(res => {
        setAnnouncement(res.data);
      })
      .catch(err => {
        setError('Failed to fetch announcement details.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading announcement...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!announcement) return <p>Announcement not found.</p>;

  return (
    <div className="card">
      <h2>{announcement.title}</h2>
      <p><strong>Price:</strong> ${announcement.price}</p>
      <p><strong>Category:</strong> {announcement.category}</p>
      <p><strong>Location:</strong> {announcement.location}</p>
      <hr />
      <p>{announcement.description}</p>
      <hr />
      <p><strong>Contact:</strong> {announcement.contactEmail || announcement.contactPhone}</p>
      <p>Posted by: <Link to={`/users/${announcement.author.id}`}>{announcement.author.username}</Link></p>
      <p><small>Posted on: {new Date(announcement.createdAt).toLocaleString()}</small></p>
    </div>
  );
};

export default AnnouncementDetailPage;
