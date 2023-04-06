import React, { Component, Fragment } from "react";
import Portfolio from "./Portfolio";
import ipadPieces from './ipadPieces.js';
import Page from './UI/Page.js';

class Ipad extends Component {
	render() {
		return (
			<Fragment>
				<Page className="intro centered">
					<p>Design and creative direction for iPad magazines</p>
					<p>Click on each image for credits</p>
					<img className="arrow" src="/images/bounce-arrow.gif" alt="" />
				</Page>

				<div className="work">
					<Portfolio
						pieces={ipadPieces}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Ipad;
