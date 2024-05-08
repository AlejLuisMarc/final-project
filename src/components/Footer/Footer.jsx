// Main
import React from "react";
// CSS
import './Footer.css';

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="section">
                    <p className="title">Contact</p>
                    <p className="email">Management: julius@thereplaygroup.team</p>
                </div>
                <div className="section">
                    <p className="title">Bookings</p>
                    <p className="email">North America & Asia: bookings@davidlewis.nl</p>
                    <p className="email">Rest Of The World: javier@analog-a.com</p>
                </div>
            </div>
        </>
    );
};