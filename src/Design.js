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
					<p>Design and creative direction for covers of The San Diego Union-Tribune and The Orange County Register</p>
					<p>Click on each image for individual credits</p>
				</div>
			</div>

			<div className="work">
				<div className="img-wrap">
					<img src="images/arts-don-giovanni.jpg" alt="Don Giovanni cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustrator: Cristina Byvik<br />
							Designer: Gloria Orbegozo<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-fury.jpg" alt="Weekend Fury cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: Adam Vieyra<br />
							Designer: Adam Vieyra<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-preview.jpg" alt="Arts preview cover" className="narrow" />
					<div className="img-description">
						<p>
							Illustrator: Cristina Byvik<br />
							Designer: Gloria Orbegozo<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-equalizer.jpg" alt="Weekend Equalizer cover" className="narrow" />
					<div className="img-description">
						<p>Designer: Jose Antonio Morales<br />
							Design Director: Peter Nguyen</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-mockingjay.jpg" alt="Weekend Mockingjay cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: Adam Vieyra<br />
							Designer: Adam Vieyra<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-pagliacci.jpg" alt="Arts Pagliacci cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: Cristina Byvik<br />
							Designer: Gloria Orbegozo<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-moses.jpg" alt="Weekend Moses cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: Adam Vieyra<br />
							Designer: Adam Vieyra<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-boyhood.jpg" alt="Weekend Boyhood cover" className="narrow" />
					<div className="img-description">
						<p>Designer: Jose Antonio Morales<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/wkend-skyfall.jpg" alt="Weekend Skyfall cover" className="narrow" />
					<div className="img-description">
						<p>Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/nd-mardigras.jpg" alt="Mardi Gras cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: <a href="http://www.ohmgee.com/" target="_blank" rel="noopener noreferrer">Martin Gee</a><br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/nd-jet.jpg" alt="Jet Propulsion cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: <a href="http://www.jamesflames.com/" target="_blank" rel="noopener noreferrer">James Flames</a><br />
							Designer: Chris Barber<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap">
					<img src="images/arts-opera-pit.jpg" alt="Opera Faust cover" className="narrow" />
					<div className="img-description">
						<p>Illustrator: Cristina Byvik<br />
							Designer: Peter Nguyen<br />
							Design Director: Peter Nguyen
						</p>
					</div>
				</div>

				<div className="img-wrap wide">
					<img src="images/squeeze-vip.jpg" alt="Squeeze VIP spread" className="wide" />
					<div className="img-description">
						<p>
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

export default Design;
