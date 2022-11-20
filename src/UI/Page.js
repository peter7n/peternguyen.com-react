import React, { Fragment } from 'react';

const Page = (props) => {
	return (
		<Fragment>
			<div className={props.className}>
				<div className="text animate">
					{props.children}
				</div>
			</div>
		</Fragment>
	)
}

export default Page;