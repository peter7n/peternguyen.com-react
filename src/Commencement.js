import React, { Component } from "react";

class Commencement extends Component {
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
						<p>Design and development for UC San Diego’s commencement site</p>
						<p>JavaScript | PHP | HTML | CSS</p>
					</div>
				</div>

				<div className="work">
					<div className="img-wrap wide">
						<img src="images/com-2017-desktop-1-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Home Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2017-desktop-1-2a.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Home Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2017-desktop-2-1-3.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Video Livestream Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-2-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-2-2.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-3-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-4-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-5-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-6-1.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>

					<div className="img-wrap wide">
						<img src="images/com-2019-desktop-6-2.jpg" alt="" className="wide" />
						<div className="img-description">
							<p>
								Desktop View<br />
								Interior Page
							</p>
						</div>
					</div>
	   		</div>
			</div>
		);
	}
}

export default Commencement;
