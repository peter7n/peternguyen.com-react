import React, { Component } from "react";
import { Link } from "react-router-dom";

class Work extends Component {
	render() {
		return (
			<div className="intro">
				<div className="text">
					{/* <p><Link to="/work/giveto">Giveto</Link></p> */}
					<p><Link to="/work/design">Design Direction</Link></p>
				</div>
			</div>
		);
	}
}

export default Work;
