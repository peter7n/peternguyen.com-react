import React, { Component } from "react";

class Giveto extends Component {
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
					<p>Design and development for UC San Diego’s transactional giving site</p>
					<p>jQuery | JavaScript | HTML | CSS</p>
				</div>
			</div>

			<div className="work">
				<div className="img-wrap margin">
					<img src="images/giveto-mobile-1-1.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 1 | Select a Gift
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-1-2.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 1 | Select a Gift
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-1-3.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 1 | Select a Gift
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-2-1.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 2 | Confirm Gift Details
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-2-3.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 2 | Confirm Gift Details
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-3-1.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 3 | Enter Your Information
						</p>
					</div>
				</div>

				<div className="img-wrap margin">
					<img src="images/giveto-mobile-3-3.png" alt="" className="narrow" />
					<div className="img-description">
						<p>
							Mobile View<br />
							Step 3 | Enter Your Information
						</p>
					</div>
				</div>


   		</div>
			</div>
		);
	}
}

export default Giveto;
