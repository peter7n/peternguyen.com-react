import React, { Component } from "react";
import Page from './UI/Page.js';

class Resume extends Component {
	render() {
		return (
			<Page className="content">
				<p><a href="/resume/peter-nguyen-resume.pdf">Download</a> [PDF]</p>

				<section>
					<h2>Experience</h2>
					<dl>
						<dt className="text-spaced black">
							<b>Senior Web Developer</b> | 2019–Present<br />
							<b>& Web Designer</b> | 2016–2019<br />
							@ UC San Diego
						</dt>

						<dd>Increased functionality of our content management systems and automated many menial tasks by developing custom plugins in PHP</dd>
						<dd>Improved user experience by designing and building new front-end features using HTML, CSS and JavaScript</dd>
						<dd>Optimized page templates to work as modular components, reducing the amount of code and making it much more maintainable</dd>
						<dd>Led development of API endpoints, making our web content instantly more shareable and valuable</dd>
					</dl>

					<dl>
						<dt className="text-spaced black">
							<b>Design Director</b> | 2010–2016<br />
							@ San Diego Union-Tribune
						</dt>

						<dd>Raised the bar on design quality and accountability, significantly increasing international design awards garnered</dd>
						<dd>Rebuilt team culture from the ground up, resulting in greater creative collaboration and skills development</dd>
						<dd>Led with a modern management style, utilizing the cloud to improve efficiency and social media to enhance design reputation</dd>
					</dl>
				</section>

				<section>
					<h2>Tech Stacks</h2>
					<p>
						LAMP (Linux, Apache, MySQL, PHP)
					</p>
				</section>

				<section>
					<h2>Technologies</h2>
					<ul className='pills'>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>React</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>Linux</li>
						<li>GitHub</li>
						<li>PHP</li>
						<li>MySQL</li>
						<li>C++</li>
						<li>Python</li>
					</ul>
				</section>

				<section>
					<h2>Education</h2>
					<dl>
						<dt className="text-spaced black"><b>BS, Computer Science</b><br />
							@ Oregon State University | 2015–2018<br />
						</dt>

						<dd>
							3.88 GPA
						</dd>
						<ul className="pills">
							<li>Object-Oriented Programming</li>
							<li>Data Structures</li>
							<li>Software Engineering</li>
							<li>Web Development</li>
							<li>Cloud Development</li>
							<li>Mobile App Development</li>
							<li>Databases</li>
							<li>Operating Systems</li>
							<li>Algorithms</li>
							<li>Computer Networks</li>
							<li>Computer Architecture</li>
							<li>Assembly Language</li>
							<li>Discrete Structures</li>
							<li>Usability Engineering</li>
							<li>Software QA</li>
						</ul>
					</dl>

					<dl>
						<dt className="text-spaced black">
							<b>BA, English</b><br />
							@ UCLA | 1989–1994</dt>
							
						<dd>Regents Scholar</dd>
						<dd>National Merit Scholar</dd>
					</dl>
				</section>

				<section>
					<h2>Tools</h2>
					<ul className='pills'>
						<li>Sketch</li>
						<li>InVision</li>
						<li>Photoshop</li>
						<li>Premiere</li>
						<li>Illustrator</li>
					</ul>
				</section>

				<section>
					<h2>Content Management Systems</h2>
					<ul className="pills">
						<li>WordPress</li>
						<li>ExpressionEngine</li>
						<li>Cascade</li>
						<li>Grav</li>
					</ul>
				</section>

				<section>
					<h2>Skills</h2>
					<p>UI/UX design</p>
					<p>Development with APIs</p>
					<p>Development for content management systems</p>
					<p>Strong understanding of typography, hierarchy and styles</p>
					<p>Excellent writing and communication skills</p>
				</section>

			</Page>
		);
	}
}

export default Resume;
