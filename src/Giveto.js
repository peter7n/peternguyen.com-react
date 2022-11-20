import React, { Component, Fragment } from "react";
import Portfolio from "./Portfolio";
import givetoPieces from "./givetoPieces.js";
import Page from './UI/Page.js';

class Giveto extends Component {
	render() {
		return (
			<Fragment>
				<Page className="intro centered">
					<p>Design and development for UC San Diego’s transactional giving website</p>
					<img className="arrow" src="/images/bounce-arrow.gif" alt="" />
				</Page>

				<div className="work">
					<Portfolio
						pieces={givetoPieces}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Giveto;
