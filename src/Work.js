import React, { Component } from "react";
import { Link } from "react-router-dom";

class Work extends Component {
	render() {
		return (
			<div className="intro centered">
				<div className="text">
					<p><Link to="/work/commencement">Commencement Site</Link></p>
					<p><Link to="/work/giveto">Giving Site</Link></p>
					<p><Link to="/work/ipad">iPad Mags</Link></p>
					<p><Link to="/work/design">Design Direction</Link></p>
				</div>
			</div>
		);
	}
}

export default Work;
