import React, { Component } from "react";
import Portfolio from "./Portfolio";

class Commencement extends Component {

	render() {
		const pieces = [
			{
				"imgSrc":"/images/com-2017-desktop-1-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Home Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2017-desktop-1-2a.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Home Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2017-desktop-2-1-3.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Video Livestream Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-2-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-2-2.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-3-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-4-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-5-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-6-1.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
			{
				"imgSrc":"/images/com-2019-desktop-6-2.jpg",
				"imgDesc1": "",
				"imgDesc2": "Desktop View",
				"imgDesc3": "Interior Page",
				"imgClass": "wide",
				"imgAlt": "Commencement website screenshot"
			},
		];
		return (
			<div>
				<div className="intro">
					<div className="text">
						<p>Design and development for UC San Diego’s commencement website</p>
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
