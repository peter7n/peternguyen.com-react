import React, { Component } from "react";

class Tile extends Component {
	render() {
		return (
			<div
				// className="img-wrap wide"
				onClick={() => this.props.myClick()}
				className={"img-wrap wide " + this.props.activeState}
			>
				<img src={this.props.value1} alt="" className="wide" />
				<div className="img-description">
					<p>
						{this.props.value2}
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
				activePiece: 24
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
		console.log("click " + index);
		const descState = this.state.descriptionState.slice();
		descState[index] = 1;
		// this.refs.index.style.visibility = "hidden";
		this.setState({
			descriptionState: descState,
			activePiece: index,
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
								value2={piece.imgDesc}
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
