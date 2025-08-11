import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const CreateAnnouncementPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: 'other',
    location: '',
    contactPhone: '',
    contactEmail: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const postData = { ...formData, price: parseFloat(formData.price) || null };
      const response = await api.post('/announcements', postData);
      navigate(`/announcements/${response.data.id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create announcement.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create New Announcement</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required rows="6"></textarea>
        <input type="number" name="price" placeholder="Price (optional)" onChange={handleChange} />
        <select name="category" value={formData.category} onChange={handleChange}>
            <option value="electronics">Electronics</option>
            <option value="vehicles">Vehicles</option>
            <option value="real_estate">Real Estate</option>
            <option value="jobs">Jobs</option>
            <option value="services">Services</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="other">Other</option>
        </select>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="tel" name="contactPhone" placeholder="Contact Phone (optional)" onChange={handleChange} />
        <input type="email" name="contactEmail" placeholder="Contact Email (optional)" onChange={handleChange} />
        <button type="submit">Post Announcement</button>
      </form>
    </div>
  );
};

export default CreateAnnouncementPage;
