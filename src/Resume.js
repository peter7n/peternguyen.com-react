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
				<p>Increased functionality of our content management systems and automated many menial tasks by developing custom plugins in PHP</p>
				<p>Improved user experience by designing and building new front-end features using HTML, CSS and JavaScript</p>
				<p>Optimized page templates to work as modular components, reducing the amount of code and making it much more maintainable</p>
				<p>Led development of API endpoints, making our web content instantly more shareable and valuable</p>

				<p className="text-spaced black"><b>Design Director</b> | 2010–2016<br />
					San Diego Union-Tribune</p>
				<p>Raised the bar on design quality and accountability, significantly increasing international design awards garnered</p>
				<p>Rebuilt team culture from the ground up, resulting in greater creative collaboration and skills development</p>
				<p>Led with a modern management style, utilizing the cloud to improve efficiency and social media to enhance design reputation</p>

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

				<h2>Tech Stacks</h2>
				<p>
					LAMP (Linux, Apache, MySQL, PHP)
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
				<h3>Content Management Systems</h3>
				<p>
					WordPress<br />
					Trellis<br />
					Cascade<br />
					ExpressionEngine<br />
					Grav
				</p>

				<h2>Skills</h2>
				<p>UI/UX design</p>
				<p>Development with APIs</p>
				<p>Development for content management systems</p>
				<p>Strong understanding of typography, hierarchy and styles</p>
				<p>Excellent writing and communication skills</p>
			</Page>
		);
	}
}

export default Resume;
