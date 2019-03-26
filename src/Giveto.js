import React, { Component } from "react";
import Portfolio from "./Portfolio";

class Giveto extends Component {
	render() {
		const pieces = [
			{
				"imgSrc":"images/giveto-mobile-1-1.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 1 | Select a Gift",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-1-2.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 1 | Select a Gift",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-1-3.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 1 | Select a Gift",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-2-1.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 2 | Confirm Gift Details",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-2-3.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 2 | Confirm Gift Details",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-3-1.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 3 | Enter Your Information",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
			{
				"imgSrc":"images/giveto-mobile-3-3.png",
				"imgDesc1": "",
				"imgDesc2": "Mobile View",
				"imgDesc3": "Step 3 | Enter Your Information",
				"imgClass": "margin narrow",
				"imgAlt": "Give to UCSD screenshot"
			},
		];
		return (
			<div>
				<div className="intro">
					<div className="text">
					<p>Design and development for UC San Diego’s transactional giving website</p>
					<p>jQuery | JavaScript | HTML | CSS</p>
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

export default Giveto;
