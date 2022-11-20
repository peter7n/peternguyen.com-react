import React, { Component, Fragment } from "react";
import Portfolio from "./Portfolio";
import Page from './UI/Page.js';
import commencementPieces from "./commencementPieces.js";

class Commencement extends Component {

	render() {
		return (
			<Fragment>
				<Page className="intro centered">
					<p>Design and development for UC San Diego’s commencement website</p>
					<img className="arrow" src="/images/bounce-arrow.gif" alt="" />
				</Page>

				<div className="work">
					<Portfolio
						pieces={commencementPieces}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Commencement;
