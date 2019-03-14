import React, { Component } from "react";
import Portfolio from "./Portfolio";

class Commencement extends Component {

	render() {
		const pieces = [
			{"imgSrc":"images/com-2019-desktop-2-1.jpg", "imgDesc": "Hello World"},
			{"imgSrc":"images/com-2019-desktop-2-2.jpg", "imgDesc": "Hello again"}
		];
		return (
			<div>
				<div className="intro">
					<div className="text">
						<p>Design and development for UC San Diego’s commencement site</p>
						<p>JavaScript | PHP | HTML | CSS</p>
					</div>
				</div>

				<div className="work">
					<Portfolio
						pieces={pieces}
					/>
				</div>
			</div>
		);
	}
}

export default Commencement;
