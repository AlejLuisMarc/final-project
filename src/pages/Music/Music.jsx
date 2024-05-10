// Main
import React from "react";
// CSS
import './Music.css';
// Components
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Socials } from "../../components/Socials/Socials";
// Releases
import { Releases } from "./Releases";

export function Music() {
    return (
        <>
            <Navbar />
            {/* Releases */}
            <div className="title">Releases</div>
            <div className="releases">
                {Releases.map((release) => (
                    <div key={release.id} className="release">
                        <p className="name">{release.name}</p>
                        <div className="image">
                            <img src={release.image} alt="Image" />
                        </div>
                        <a href={release.listen} target="_blank"><p>Listen</p></a>
                        <a href={release.buy} target="_blank"><p>Buy</p></a>
                    </div>
                ))}
            </div>
            {/* Live Sets */}
            <div className="title">Live Sets</div>
            <div className="live-sets">
                <div className="live-set">
                    <p>The Caverns 2024</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5p-fgVno14M?si=oxfgg8ipEVDkjkfN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="live-set">
                    <p>Thuishaven ADE 2023</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X2fk95lZizQ?si=Oi8-_Kt1__JEWdxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="live-set">
                    <p>Academy 2023</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dMVQYcRBNjM?si=x9x_9rCTqLjvchbP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Socials />
            <Footer />
        </>
    );
};