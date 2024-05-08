// Main
import React, { useState } from "react";
// CSS
import './Newsletter.css';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
        console.log(email, '| New Newsletter Subscriber');
    };
    return (
        <div className="newsletter-container">
            <h3>Subscribe to the newsletter</h3>
            <p>Be the first one to know the latest news of Mau P</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email} onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};