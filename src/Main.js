import React, { Component } from "react";
import {
	Routes,
	Route,
	NavLink
} from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import About from "./About";
import Design from "./Design";
import Giveto from "./Giveto";
import Ipad from "./Ipad";
import Commencement from "./Commencement";
import Resume from './Resume';

class Main extends Component {
	render() {
		return (
			<div>
				<header>
					<h1><NavLink to="/">Peter Nguyen</NavLink></h1>
					<nav>
						<ul>
							<li><NavLink to="/work">Work</NavLink></li>
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</nav>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work" element={<Work />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/work/design" element={<Design />} />
					<Route path="/work/commencement" element={<Commencement />} />
					<Route path="/work/giveto" element={<Giveto />} />
					<Route path="/work/ipad" element={<Ipad />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</div>
		);
	}
}

export default Main;
