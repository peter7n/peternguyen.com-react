import React, { Component } from "react";
import {
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
	      		<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/work" component={Work} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/work/design" component={Design} />
						<Route path="/work/commencement" component={Commencement} />
						<Route path="/work/giveto" component={Giveto} />
						<Route path="/work/ipad" component={Ipad} />
	      		</div>
	      	</div>

		);
	}
}

export default Main;
