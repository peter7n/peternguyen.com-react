import React, { Component } from "react";
import Page from './UI/Page.js';
// import Transition from "react-transition-group/Transition";
// import styles from './Home.module.css';

class Home extends Component {
	render() {
		return (
			<Page className="intro centered">
				<p>A collection of work by front end developer and designer Peter Nguyen</p>				
			</Page>
		);
	}
}

export default Home;
