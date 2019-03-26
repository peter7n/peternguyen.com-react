import React, { Component } from "react";

class Tile extends Component {
	render() {
		return (
			<div
				onClick={() => this.props.myClick()}
				className={"img-wrap " + this.props.imgClass + " " + this.props.activeState}
			>
				<img src={this.props.imgSrc} alt={this.props.imgAlt} />
				<div className="img-description">
					<p>
						{this.props.imgDesc1}
						{this.props.imgDesc1.length > 0 && <br />}
						{this.props.imgDesc2}<br />
						{this.props.imgDesc3}
					</p>
				</div>
			</div>
		);
	}
}

class Portfolio extends Component {
	constructor(props) {
		super(props);
			this.state = {
				activePiece: null,
			};
	}

	handleClick(index) {
		var toggleActive = null;
		// check if already active; toggle off if so
		if (index === this.state.activePiece) {
			toggleActive = null;
		} else {
			toggleActive = index;
		}
		this.setState({
			activePiece: toggleActive,
		});
	}

	render() {
		var piecesArray = this.props.pieces;
		return (
			<div>
			{piecesArray.map((piece, index) => {
				// Set classname to active if state is active
				var activeClassState = "";
				if (index === this.state.activePiece) {
					activeClassState = "active";
				}
				return (<Tile
								imgSrc={piece.imgSrc}
								imgClass={piece.imgClass}
								imgDesc1={piece.imgDesc1}
								imgDesc2={piece.imgDesc2}
								imgDesc3={piece.imgDesc3}
								imgAlt={piece.imgAlt}
								key={index}
								activeState = {activeClassState}
								myClick={() => this.handleClick(index)}
							/>)
			})}
			</div>
		);
	}
}

export default Portfolio;
