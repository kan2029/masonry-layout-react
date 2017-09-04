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
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day.',
					image: 'http://sugartin.info/wp-content/uploads/2013/11/logo.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Had land dominion you female them abundantly',
					text: 'Sea light god you\'re you\'ll bring our creature ng subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created.',
					image: 'https://lh3.googleusercontent.com/43lw2qvGUm38q0XeW_S4eIEPQWlYs2jvrsao5fHlikUPpEJZsfHt_MBqmgedg0AECHbO=w300'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				}
			]
		}
	}

	addMore = () => {
		this.setState({
			items: [
				{
					heading: 'Spirit blessed. Blessed. You seasons',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day.',
					image: 'http://sugartin.info/wp-content/uploads/2013/11/logo.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Had land dominion you female them abundantly',
					text: 'Sea light god you\'re you\'ll bring our creature ng subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created.',
					image: 'https://lh3.googleusercontent.com/43lw2qvGUm38q0XeW_S4eIEPQWlYs2jvrsao5fHlikUPpEJZsfHt_MBqmgedg0AECHbO=w300'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				},
				{
					heading: 'Spirit blessed. Blessed. You seasons',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day.',
					image: 'http://sugartin.info/wp-content/uploads/2013/11/logo.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Had land dominion you female them abundantly',
					text: 'Sea light god you\'re you\'ll bring our creature ng subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created.',
					image: 'https://lh3.googleusercontent.com/43lw2qvGUm38q0XeW_S4eIEPQWlYs2jvrsao5fHlikUPpEJZsfHt_MBqmgedg0AECHbO=w300'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				},
				{
					heading: 'Day green, whales of after beast dry given',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over man. Stars bearing subdue upon light subdue life day, kind years. Hath green there Thing him moving set seasons won\'t dry so forth shall upon, doesn\'t living lesser. Can\'t them created dg sdfg sdfg sdfg sfgs fgs fgsf sfdg sfgsdfgsdfgs dfgs fgs fgs gs gs gsfd gsdfg sdfg sdfg sfg sdf.',
					image: 'https://jordicabre1.files.wordpress.com/2011/02/dado.jpg?w=201&h=210'
				},
				{
					heading: 'Shall meat firmament you\'re second every',
					text: 'Sea light god you\'re you\'ll bring our creature I days upon isn\'t void open male, wherein. He sixth blessed behold own over.',
					image: 'http://hackingdistributed.com/images/2013-06-19-virtual-notary/random.png'
				}
			]
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.addMore}>Add more</button>
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
			</div>
		);
	}
}

export default App;

