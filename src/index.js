import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from './js/masonry';

const items = [
	{
		height: 200
	},
	{
		height: 300
	},
	{
		height: 400
	},
	{
		height: 200
	},
	{
		height: 351
	},
	{
		height: 450
	},
	{
		height: 500
	},
	{
		height: 700
	},
	{
		height: 300
	},
	{
		height: 150
	},
	{
		height: 450
	}
];

ReactDOM.render(
	<Masonry  columnCount={4}
						verticalSpacing={40}
						horizontalSpacing={20}
	>
		{
			items.map((item, key) =>
				<section key={key}>
					{/* your card here */}
					<div style={{height: `${Math.random() * 300}px`}} />
				</section>
			)
		}
	</Masonry>,
	document.getElementById('main')
);




// TODO: 
// for mobile ?
// container class
// pagination support
