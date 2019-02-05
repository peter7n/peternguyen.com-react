import React, { Component } from "react";

class Design extends Component {
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
					<p>Design Direction.<br />
						A selection of covers for The San Diego Union-Tribune and The Orange County Register.
					</p>
				</div>
			</div>

			<div className="work">
				<div className="img-wrap">
					<img src="images/ipad-sun-cover.jpg" alt="iPad Sunday cover" className="narrow" />
					<div className="img-description">
						<p>
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-don-giovanni.jpg" alt="Don Giovanni cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustration: Cristina Byvik<br />
							Design: Gloria Orbegozo<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-comic-cover1.jpg" alt="iPad Comic-Con Ash Wood cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustration: Ashley Wood<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-fury.jpg" alt="Weekend Fury cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Adam Vieyra<br />
							Design: Adam Vieyra<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-preview.jpg" alt="Arts preview cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustration: Cristina Byvik<br />
							Design: Gloria Orbegozo<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-story.jpg" alt="iPad Sunday cover story" className="narrow" />
					<div className="img-description">
						<p>Photography: Sean M. Haffey<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-week.jpg" alt="iPad Sunday week in review" className="narrow" />
					<div className="img-description">
						<p>Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-sun-photos.jpg" alt="iPad Sunday photos" className="narrow" />
					<div className="img-description">
						<p>Photography: Howard Lipin<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-equalizer.jpg" alt="Weekend Equalizer cover" className="narrow" />
					<div className="img-description">
						<p>Design: Jose Antonio Morales<br />
							Design Direction: Peter Nguyen</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-mockingjay.jpg" alt="Weekend Mockingjay cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Adam Vieyra<br />
							Design: Adam Vieyra<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-pagliacci.jpg" alt="Arts Pagliacci cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Cristina Byvik<br />
							Design: Gloria Orbegozo<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/ipad-padres-lineup.jpg" alt="iPad Padres lineup" className="narrow" />
					<div className="img-description">
						<p>Photography: John McCutchen<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap wide">
					<img src="images/ipad-padres-rewind.jpg" alt="iPad Padres Rewind" className="wide" />
					<div className="img-description">
						<p>Photography: John McCutchen<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-moses.jpg" alt="Weekend Moses cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Adam Vieyra<br />
							Design: Adam Vieyra<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-boyhood.jpg" alt="Weekend Boyhood cover" className="narrow" />
					<div className="img-description">
						<p>Design: Jose Antonio Morales<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-skyfall.jpg" alt="Weekend Skyfall cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Peter Nguyen<br />
							Design: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/nd-mardigras.jpg" alt="Mardi Gras cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: <a href="http://www.ohmgee.com/" target="_blank" rel="noopener noreferrer">Martin Gee</a><br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/nd-jet.jpg" alt="Jet Propulsion cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: <a href="http://www.jamesflames.com/" target="_blank" rel="noopener noreferrer">James Flames</a><br />
							Design: Chris Barber<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-opera-pit.jpg" alt="Opera Faust cover" className="narrow" />
					<div className="img-description">
						<p>Illustration: Cristina Byvik<br />
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap wide">
					<img src="images/squeeze-vip.jpg" alt="Squeeze VIP spread" className="wide" />
					<div className="img-description">
						<p>
							Design: Peter Nguyen<br />
							Design Direction: Peter Nguyen
						</p>
					</div>
				</div>
   		</div>
			</div>
		);
	}
}

export default Design;
