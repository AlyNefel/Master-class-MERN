import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { becomeSeller } from '../../api/user.api';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';

const BecomeSeller = () => {
    const navigate = useNavigate();
    const { login: authLogin, user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        shopName: '',
        shopDescription: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await becomeSeller(formData);

            // Update AuthContext with new role
            authLogin({
                userId: response.userId,
                role: response.role,
                username: response.username
            });

            // Redirect to seller dashboard
            navigate('/seller');
        } catch (err) {
            console.error('Error becoming seller:', err);
            setError(err.message || 'Failed to upgrade to seller');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <div className='auth-header'>
                    <h2>Become a Seller</h2>
                    <p>Start selling your products today</p>
                </div>

                {error && <div className='error-message'>{error}</div>}

                <form className='auth-form' onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='shopName'>Shop Name</label>
                        <input
                            type='text'
                            id='shopName'
                            name='shopName'
                            className='auth-input'
                            placeholder='My Awesome Shop'
                            value={formData.shopName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='shopDescription'>Shop Description</label>
                        <textarea
                            id='shopDescription'
                            name='shopDescription'
                            className='auth-input'
                            placeholder='Tell us about your shop...'
                            value={formData.shopDescription}
                            onChange={handleChange}
                            rows='4'
                            required
                        />
                    </div>

                    <div className='d-flex gap-2'>
                        <button
                            type='submit'
                            className='auth-button'
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Become a Seller'}
                        </button>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={() => navigate('/profile')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BecomeSeller;
