import React, { Component } from "react";
import Page from './UI/Page.js';

class About extends Component {
	render() {
		return (
			<Page className="content">
				<p><b className="text-spaced">Born:</b><br />
				Bien Hoa, Vietnam</p>
				<p><b className="text-spaced">Resides:</b><br />
				San Diego, California</p>
				<p><b className="text-spaced">Education:</b><br />
				Oregon State University, B.S. Computer Science<br />
					UCLA, B.A. English Literature</p>
				<p><b className="text-spaced">Background:</b><br />
				Peter Nguyen is a front end developer, design leader and writer who has created and inspired others to create award-winning design work for many years.</p>
				<p>He is currently senior web developer at UC San Diego and was previously design director at San Diego Union-Tribune.</p>
				<a href="images/peter.jpg"><img src="images/peter.jpg" className="narrow" alt="Peter Nguyen"/></a>
			</Page>
		);
	}
}

export default About;
