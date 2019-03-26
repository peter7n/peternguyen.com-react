import React, { Component } from "react";

class Tile extends Component {
	render() {
		return (
			<div
				onClick={() => this.props.myClick()}
				className={"img-wrap " + this.props.value2 + " " + this.props.activeState}
			>
				<img src={this.props.value1} alt={this.props.imgAlt} />
				<div className="img-description">
					<p>
						{this.props.value3}
						{this.props.value3.length > 0 && <br />}
						{this.props.value4}<br />
						{this.props.value5}
					</p>
				</div>
			</div>
		);
	}
}

class Portfolio extends Component {
	constructor(props) {
		var numPieces = props.pieces.length;
		super(props);
			this.state = {
				descriptionState: Array(numPieces).fill(0),
				activePiece: null,
			};
	}

	renderTile(desc, desc2) {
		return (
			<Tile
				value1={desc}
				value2={desc2}
			/>
		);
	}

	handleClick(index) {
		var toggleActive = null;
		const descState = this.state.descriptionState.slice();
		descState[index] = 1;
		// check if already active; toggle off if so
		if (index === this.state.activePiece) {
			toggleActive = null;
		} else {
			toggleActive = index;
		}
		this.setState({
			descriptionState: descState,
			activePiece: toggleActive,
		});
		for (var j = 0; j < descState.length; j++) {
			if (descState[j] === 1) {
				console.log("on at: " + j);
			}
		}
	}

	render() {
		var piecesArray = this.props.pieces;
		return (
			<div>
			{piecesArray.map((piece, index) => {
				var tfActive = "";
				console.log("active: " + this.state.activePiece);
				if (index === this.state.activePiece) {
					tfActive = "active";
				}
				return (<Tile
								value1={piece.imgSrc}
								value2={piece.imgClass}
								value3={piece.imgDesc1}
								value4={piece.imgDesc2}
								value5={piece.imgDesc3}
								imgAlt={piece.imgAlt}
								key={index}
								activeState = {tfActive}
								myClick={() => this.handleClick(index)}
							/>)
			})}
			</div>
		);
	}
}

export default Portfolio;
