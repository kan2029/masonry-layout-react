import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from '../../src/js/index';

const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
ReactDOM.render(
	<Masonry
		columnCount={4}
		verticalSpacing={40}
		horizontalSpacing={20}
	>
		{
			items.map((item, key) =>
				<section key={key}>
					<div style={{height: `${Math.random() * 300}px`}} />
				</section>
			)
		}
	</Masonry>,
	document.getElementById('main')
);
