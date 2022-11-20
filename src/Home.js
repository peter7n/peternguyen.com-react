import React, { Component } from "react";
import Page from './UI/Page.js';
// import Transition from "react-transition-group/Transition";
// import styles from './Home.module.css';

class Home extends Component {
	render() {
		return (
			<Page className="intro centered">
				<p>A collection of work by front end developer Peter Nguyen</p>				
			</Page>
		);
	}
}

// class Home extends Component {
// 	state = {
// 		showBlock: false
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="intro centered">
// 					<Transition in={this.state.showBlock} timeout={1000}>
// 						{state => (
// 							<div className="text"  
// 									style={{ 
// 										transition: 'opacity 1s ease-out',
// 										opacity: state === 'entered' ? 1 : 0 }}>
// 								<p>A collection of work by web developer and design director Peter Nguyen</p>
// 							</div>
// 						)}
// 					</Transition>
// 					<button onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// class Home extends Component {
// 	state = {
// 		showBlock: false
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="intro centered">
// 					<div className="text">
// 						<p>A collection of work by web developer and design director Peter Nguyen</p>
// 						<button onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
// 						<br />
// 							<Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
// 								{state => (
// 									<div style={{ 
// 										backgroundColor: 'red', 
// 										width: 100, 
// 										height: 100, 
// 										margin: 'auto',
// 										transition: 'opacity 1s ease-out',
// 										opacity: state === 'exited' ? 0 : 1 }}>
// 									</div>
// 									)
// 								}
// 							</Transition>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const Home = () => {
// 	return (
// 		<div>
// 				<CSSTransition in={inProp} nodeRef={nodeRef} classNames={{ ...styles }} timeout={300}>
// 				<div className="intro centered" ref={nodeRef}>
// 					<div className="text">
// 						<p>A collection of work by web developer and design director Peter Nguyen</p>
// 					</div>
// 				</div>
// 				</CSSTransition>

// 		</div>
// 	);
// };

export default Home;
