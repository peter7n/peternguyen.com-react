import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className="content">
				<p><span>Born:</span><br />Bien Hoa, Vietnam</p>
				<p><span>Resides:</span><br />San Diego, California</p>
				<p><span>Education:</span><br />
					UCLA, B.A. English Literature<br />
					Oregon State University, B.S. Computer Science</p>
				<p><span>Background:</span><br />
					Peter Nguyen is a web developer, digital designer and art director who has created and inspired others to create award-winning design work for many years. At home in both the creative and technical worlds, he believes in the philosophy that true innovation comes from working at the intersection of art and technology.</p>
				<p>Peter is currently web producer at UC San Diego and was previously design director at San Diego Union-Tribune.</p>
				<a href="images/peter.jpg"><img src="images/peter.jpg" class="narrow" alt="Peter Nguyen"/></a>
			</div>
		);
	}
}

export default About;
