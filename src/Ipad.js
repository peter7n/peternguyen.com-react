import React, { Component } from "react";
import Portfolio from "./Portfolio";

class Ipad extends Component {
	render() {
		const pieces = [
			{
				"imgSrc":"images/ipad-sun-cover.jpg",
				"imgDesc1": "",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Sunday cover"
			},
			{
				"imgSrc":"images/ipad-comic-cover1.jpg",
				"imgDesc1": "Illustrator: Ashley Wood",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Comic-Con Ash Wood cover"
			},
			{
				"imgSrc":"images/ipad-sun-story.jpg",
				"imgDesc1": "Photographer: Sean M. Haffey",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Sunday cover story"
			},
			{
				"imgSrc":"images/ipad-sun-week.jpg",
				"imgDesc1": "",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Sunday week in review"
			},
			{
				"imgSrc":"images/ipad-sun-photos.jpg",
				"imgDesc1": "Photographer: Howard Lipin",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Sunday photos"
			},
			{
				"imgSrc":"images/ipad-padres-lineup.jpg",
				"imgDesc1": "Photographer: John McCutchen",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "narrow",
				"imgAlt": "iPad Padres lineup"
			},
			{
				"imgSrc":"images/ipad-padres-rewind.jpg",
				"imgDesc1": "Photographer: John McCutchen",
				"imgDesc2": "Designer: Peter Nguyen",
				"imgDesc3": "Design Director: Peter Nguyen",
				"imgClass": "wide",
				"imgAlt": "iPad Padres Rewind"
			},
		];
		return (
			<div>
				<div className="intro">
					<div className="text">
					<p>Design and creative direction for digital magazines created for iPad</p>
					<p>Click on each image for individual credits</p>
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

export default Ipad;
