// Main
import React, { useState } from "react";
// CSS
import './Newsletter.css';

export function Newsletter() {
    const [subscribed, setSubscribed] = useState(false);
    const toggleSubscription = () => {
        setSubscribed(!subscribed);
    };
    return (
        <>
            <div>
                {subscribed ? (
                    <div className="newsletter-container">
                        <h3>You are now subscribed</h3>
                    </div>
                ) : (
                    <div className="newsletter-container">
                        <h3>Subscribe to the newsletter</h3>
                        <p>Be the first one to know the latest news of Mau P</p>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <button type="submit" onClick={toggleSubscription}>Subscribe</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};