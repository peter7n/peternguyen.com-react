import React, { Component } from "react";
import Page from './UI/Page.js';

class Resume extends Component {
	render() {
		return (
			<Page className="content">
				<p><a href="/resume/peter-nguyen-resume.pdf">Download</a> [PDF]</p>
				<h2>Experience</h2>
				<p className="text-spaced black"><b>Senior Web Developer</b> | 2019–Present<br />
					<b>Web Designer/Producer</b> | 2016–2019<br />
					UC San Diego</p>
				<p>Developed custom plugins for content management systems that increased functionality and drastically reduced wasted time and effort</p>
				<p>Overhauled CMS backend templates to function more dynamically, resulting in far less code and more modular, maintainable code</p>
				<p>Led rollout of API endpoints, making content on our applications instantly more usable and valuable</p>
				<p>Designed and rethought numerous UIs to make transactions more intuitive and streamlined for the user</p>

				<p className="text-spaced black"><b>Design Director</b> | 2010–2016<br />
					San Diego Union-Tribune</p>
				<p>Raised the bar on design quality and accountability, significantly increasing international design awards garnered</p>
				<p>Rebuilt team culture from the ground up, resulting in greater creative collaboration and skills development</p>
				<p>Led with a modern management style, utilizing the cloud and remote work to improve efficiency; social media to enhance design reputation</p>

				<h2>Education</h2>
				<p className="text-spaced black"><b>Bachelor Of Science, Computer Science</b><br />
					Oregon State University | 2015–2018<br />
					3.88 GPA</p>
				<p>
					Object-Oriented Programming<br />
					Data Structures<br />
					Software Engineering<br />
					Web Development<br />
					Cloud and Mobile App Development<br />
					Databases<br />
					Operating Systems<br />
					Algorithms<br />
					Computer Networks<br />
					Computer Architecture and Assembly Language<br />
					Discrete Structures<br />
					Usability Engineering<br />
					Software QA<br />
				</p>

				<p className="text-spaced black"><b>Bachelor of Arts, English</b><br />
					UCLA | 1989–1994</p>
				<p>
					Regents Scholar<br />
					National Merit Scholar<br />
					Design Director/Editor, Pac Ties
				</p>

				<h2>Technologies</h2>
				<p>
					JavaScript<br />
					HTML<br />
					CSS, LESS, Sass<br />
					UNIX, Linux<br />
					GitHub<br />
					PHP<br />
					MySQL<br />
					Bamboo<br />
					C, C++<br />
					Python
				</p>
				<h3>Tools</h3>
				<p>
					Sketch<br />
					InVision<br />
					Photoshop<br />
					Premiere<br />
					Illustrator
				</p>
				<h3>CMS</h3>
				<p>
					WordPress<br />
					Trellis<br />
					Cascade<br />
					ExpressionEngine<br />
					Grav
				</p>

				<h2>Skills</h2>
				<p>UI/UX design</p>
				<p>Development using APIs</p>
				<p>Development for content management systems</p>
				<p>Object-oriented programming</p>
				<p>Strong understanding of typography, hierarchy and styles</p>
				<p>Excellent writing and communication skills</p>
				{/* <p>
					UI/UX design<br />
					Development using APIs<br />
					Development for content management systems<br />
					Object-oriented programming<br />
					Strong understanding of typography, hierarchy and styles<br />
					Excellent writing and communication skills
				</p> */}
			</Page>
		);
	}
}

export default Resume;
