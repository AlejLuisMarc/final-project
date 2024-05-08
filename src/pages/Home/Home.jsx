// Main
import React from "react";
import { Link } from "react-router-dom";
// CSS
import './Home.css';
// Componentes
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
// Images
import Logo from '../../img/Logo.png';
import Panel_Music from '../../img/Panel_Music.jpg';
import Panel_Shows from '../../img/Panel_Shows.jpg';
import { Newsletter } from "../../components/Newsletter/Newsletter";

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
			</div>
			<Newsletter />
			<Footer />
		</>
	);
}