import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page from './UI/Page.js';

class Contact extends Component {
	render() {
		return (
			<Page className="intro centered">
				<p><a href="mailto:peter7n@yahoo.com">Email</a></p>
				<p><Link to="/resume">Resumé</Link></p>
				<p><a href="https://www.linkedin.com/in/peter7n/">LinkedIn</a></p>
				<p><a href="https://twitter.com/master_ptn">Twitter</a></p>
				<p><a href="https://github.com/peter7n">GitHub</a></p>
			</Page>
		);
	}
}

export default Contact;
