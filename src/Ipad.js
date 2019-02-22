import React, { Component } from "react";

class Ipad extends Component {
	componentDidMount() {
		var imgWrapList = document.getElementsByClassName("img-wrap");

		var imgWrapClick = function () {
			var imgDescNode = this.childNodes[1];
			var styles = window.getComputedStyle(imgDescNode);
			var visibilityVal = styles.getPropertyValue("visibility");

			// Toggle image description visible/hidden
			if (visibilityVal === "hidden") {
				imgDescNode.style.visibility = "visible";
				imgDescNode.style.opacity = "1";
			}
			else {
				imgDescNode.style.visibility = "hidden";
				imgDescNode.style.opacity = "0";
			}
		}

		for (var i = 0; i < imgWrapList.length; i++) {
			imgWrapList[i].addEventListener("click", imgWrapClick, false);
		}
	}

	render() {
		return (
			<div>
			<div className="intro">
				<div className="text">
					<p>Design and creative direction for digital magazines created for iPad</p>
					<p>Click on each image for individual credits</p>
				</div>
			</div>

			<div className="work">
				<div className="img-wrap">
					<img src="images/ipad-sun-cover.jpg" alt="iPad Sunday cover" className="narrow" />
					<div className="img-description">
						<p>
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-comic-cover1.jpg" alt="iPad Comic-Con Ash Wood cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustrator: Ashley Wood<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-story.jpg" alt="iPad Sunday cover story" className="narrow" />
					<div className="img-description">
						<p>Photographer: Sean M. Haffey<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-week.jpg" alt="iPad Sunday week in review" className="narrow" />
					<div className="img-description">
						<p>Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-photos.jpg" alt="iPad Sunday photos" className="narrow" />
					<div className="img-description">
						<p>Photographer: Howard Lipin<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-padres-lineup.jpg" alt="iPad Padres lineup" className="narrow" />
					<div className="img-description">
						<p>Photographer: John McCutchen<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap wide">
					<img src="images/ipad-padres-rewind.jpg" alt="iPad Padres Rewind" className="wide" />
					<div className="img-description">
						<p>Photographer: John McCutchen<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

   		</div>
			</div>
		);
	}
}

export default Ipad;
