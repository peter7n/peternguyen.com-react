import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import About from "./About";

class Main extends Component {
	render() {
		return (
			<HashRouter>
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
						<Route path="/work" component={Work} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
	      		</div>
	      	</div>
			</HashRouter>
		);
	}
}

export default Main;
