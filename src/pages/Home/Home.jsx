// Main
import React from "react";
import { Link } from "react-router-dom";
// CSS
import './Home.css';
// Componentes
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Socials } from "../../components/Socials/Socials";
// Images
import Logo from '../../img/Logo.png';
import Panel_Music from '../../img/Panel_Music.jpg';
import Panel_Shows from '../../img/Panel_Shows.jpg';
import Panel_Merch from '../../img/Panel_Merch.jpg';

export function Home() {
	return (
		<>
			<Navbar />
			{/* Banner */}
			<div className="banner">
				<img src={Logo} alt="Logo" />
			</div>
			{/* Featured */}
			<div className="featured">
				{/* Music */}
				<Link to="/music" className="panel">
					<div className="image">
						<img src={Panel_Music} alt="Music" />
					</div>
					<p className="title">Music</p>
				</Link>
				{/* Shows */}
				<Link to="/shows" className="panel">
					<div className="image">
						<img src={Panel_Shows} alt="Shows" />
					</div>
					<p className="title">Shows</p>
				</Link>
				{/* Merch */}
				<Link to="/merch" className="panel">
					<div className="image">
						<img src={Panel_Merch} alt="Shows" />
					</div>
					<p className="title">Merch</p>
				</Link>
			</div>
			<Newsletter />
			<Socials />
			<Footer />
		</>
	);
}