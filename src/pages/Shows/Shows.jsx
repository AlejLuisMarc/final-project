// Main
import React from "react";
// CSS
import './Shows.css';
// Components
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Socials } from "../../components/Socials/Socials";
// Shows
import { ShowsList } from "./ShowsList";

export function Shows() {
    return (
        <>
            <Navbar />
            <div className="title">Shows</div>
            <div className="shows">
                {ShowsList.map((show) => (
                    <div key={show.id} className="show">
                        <div className="date">
                            <p className="month">{show.month}</p>
                            <p className="day">{show.day}</p>
                            <p className="year">{show.year}</p>
                        </div>
                        <div className="location">
                            <p className="festival">{show.festival}</p>
                            <p className="country">{show.country}</p>
                            <a href={show.tickets} target="_blank">Tickets</a>
                        </div>
                    </div>
                ))}
            </div>
            <Socials />
            <Footer />
        </>
    );
};