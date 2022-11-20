import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page from './UI/Page.js';

class Work extends Component {
	render() {
		return (
			<Page className="intro centered">
				<p><Link to="/work/commencement">Commencement Website</Link></p>
				<p><Link to="/work/giveto">Giving Website</Link></p>
				<p><Link to="/work/ipad">iPad Mags</Link></p>
				<p><Link to="/work/design">Design Direction</Link></p>
			</Page>
		);
	}
}

export default Work;
