# Installation
```shell
$ npm install masonry-layout-react --save
```

# How to use
This component takes an array of cards (it may be a react component or an html div) as children and arranges them in masonry layout.
Props:
- columnCount: to specify number of columns. Default is set to 3. Type is 'number'.
- verticalSpacing: in pixels to specify the vertical distance between 2 cards. Default is set to 40 pixels. Type is 'number'.
- horizontalSpacing: in pixels to specify the horizontal distance between 2 cards. Default is set to 20 pixels. Type is 'number'.
- containerClass: to add a custom class to the main container enclosing all cards.
- cardWrapperClass: to add a custom class to each card.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'masonry-layout-react';

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
					{/* your card here */}
				</section>
			)
		}
	</Masonry>,
	document.getElementById('main')
);

```


#Example 1
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'masonry-layout-react';

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
```
#Example 2
```javascript
import React, {Component, PropTypes} from 'react';
import Masonry from '../../src/js/index';
import './app.scss';

class Card extends Component {
	static propTypes = {
		data: PropTypes.object
	}

	render() {
		return (
			<div>
				<h2>{this.props.data.heading}</h2>
				<p>{this.props.data.text}</p>
			</div>
		);
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{
					heading: 'Spirit blessed. Blessed. You seasons',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day.'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.'
				},
				{
					heading: 'Had land dominion you female them abundantly',
					text: 'Sea light god you\'re you\'ll bring our creature ng subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created.'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.'
				}
			]
		}
	}

	render() {
		return (
			<Masonry
				columnCount={5}
				verticalSpacing={40}
				horizontalSpacing={30}
				containerClass="containerClass"
				cardWrapperClass="cardWrapperClass"
			>
				{
					this.state.items.map((item, key) =>
						<section key={key}>
							<Card data={item} />
						</section>
					)
				}
			</Masonry>
		);
	}
}
```
Check out full examples in the examples folder