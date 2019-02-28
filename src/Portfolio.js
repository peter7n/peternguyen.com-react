import React, { Component } from "react";

class Tile extends Component {
	render() {
		return (
			<div className="img-wrap wide" onClick={this.props.onClick}>
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
		console.log(numPieces);
		super(props);
			this.state = {
				descriptionState: Array(numPieces).fill(null)
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

	handleClick(i) {
		console.log("click " + i);
	}

	render() {
		var piecesArray = this.props.pieces;
		return (
			<div>
			{piecesArray.map((piece, index) => {
				return (<Tile
								value1={piece.imgSrc}
								value2={piece.imgDesc}
								key={index}
								onClick={() => this.handleClick(index)}
							/>)
			})}
			</div>
		);
	}
}

export default Portfolio;
