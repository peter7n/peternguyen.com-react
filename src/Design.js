import React, { Component, Fragment } from "react";
import Portfolio from "./Portfolio";
import designPieces from "./designPieces.js";
import Page from './UI/Page.js';

class Design extends Component {
	render() {
		return (
			<Fragment>
				<Page className="intro centered">
					<p>Design and creative direction for covers of The San Diego Union-Tribune and The Orange County Register</p>
					<p>Click on each image for individual credits</p>
					<img className="arrow" src="/images/bounce-arrow.gif" alt="" />
				</Page>

				<div className="work">
					<Portfolio
						pieces={designPieces}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Design;
