import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="landing-page">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-uppercase" to="/">ShopPremium</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link active" href="#hero">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#featured">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><Link className="nav-link btn btn-outline-light ms-2 px-4" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link btn btn-primary ms-2 px-4 text-white" to="/register">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="hero" className="d-flex align-items-center text-white" style={{
                background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)',
                minHeight: '80vh',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container position-relative z-index-1 text-center text-lg-start">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-3 fw-bold mb-4">Elevate Your Shopping Experience</h1>
                            <p className="lead mb-4">Discover exclusive collections and premium products curated just for you. Quality meets elegance in every item.</p>
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                                <a href="#featured" className="btn btn-light btn-lg px-5 rounded-pill fw-semibold">Shop Now</a>
                                <Link to="/register" className="btn btn-outline-light btn-lg px-5 rounded-pill fw-semibold">Join Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            {/* Abstract decorative sphere or placeholder for a hero product */}
                            <div className="d-flex justify-content-center">
                                <div style={{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold mb-3">Premium Quality</h3>
                                    <p className="text-muted">We source only the finest materials and products from top-rated vendors worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold mb-3">Fast Delivery</h3>
                                    <p className="text-muted">Get your orders delivered to your doorstep in record time with our optimized logistics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold mb-3">24/7 Support</h3>
                                    <p className="text-muted">Our dedicated support team is always available to assist you with any inquiries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="featured" className="py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold">Featured Collections</h2>
                        <p className="text-muted">Hand-picked items for this season</p>
                    </div>

                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm product-card overflow-hidden">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                                        <span className="text-muted">Product Image {item}</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Premium Item {item}</h5>
                                        <p className="card-text text-muted small">Short description of the premium item goes here.</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="h5 mb-0">$99.00</span>
                                            <button className="btn btn-sm btn-outline-primary rounded-pill px-3">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 text-white bg-dark">
                <div className="container text-center py-4">
                    <h2 className="mb-4">Ready to Start Shopping?</h2>
                    <Link to="/register" className="btn btn-primary btn-lg rounded-pill px-5">Create an Account</Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-4 text-white-50">
                <div className="container text-center">
                    <small>&copy; 2024 ShopPremium. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};

export default Home;
