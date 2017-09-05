import React, {Component, PropTypes} from 'react';
import '../scss/index.scss';
import utils from './utils';
import cx from 'classnames';

class Masonry extends Component {
	static propTypes = {
		columnCount: PropTypes.number,
		verticalSpacing: PropTypes.number,
		horizontalSpacing: PropTypes.number,
		containerClass: PropTypes.string,
		cardWrapperClass: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.columnCount = +this.props.columnCount || 3;
		this.verticalSpacing = +this.props.verticalSpacing || 20;
		this.horizontalSpacing = +this.props.horizontalSpacing || 15;
		this.heightsArr = utils.initializeHeightsArr(this.columnCount);
	}

	componentDidMount() {
		this.applyStyletoCards();
	}

	componentWillUpdate() {
		this.heightsArr = utils.initializeHeightsArr(this.columnCount);
	}

	componentDidUpdate() {
		this.applyStyletoCards();
	}

	getStyle = (columnCount, minObj, index) => {
		const cardWidth = (this.wrapperWidth / columnCount - ((columnCount - 1) / columnCount) * this.horizontalSpacing);
		return {
			width: `${cardWidth}px`,
			top: `${+minObj.minVal + (index >= columnCount ? +this.verticalSpacing : 0)}px`,
			left: `${minObj.minIndex * cardWidth + minObj.minIndex * this.horizontalSpacing}px`
		};
	}

	applyStyletoCards = () => {
		// set opacity to 0
		this.subroot.classList.remove('subrootActive');
		// set styles to cards
		this.wrapperWidth = this.subroot.offsetWidth;

		React.Children.map(this.props.children, (child, i) => {

			// - Check heightsArr and find minimum index
			const minObj = utils.findIndex(this.heightsArr , true);
			// - Calculate height of card 1
			const cardHeight = this[`card_${i}`].offsetHeight;
			// - Update heightsArr
			this.heightsArr[minObj.minIndex] += (cardHeight + (i >= this.props.columnCount ? +this.verticalSpacing : 0));
			// - Calculate style based on height and min index
			const cardStyle = this.getStyle(this.props.columnCount, minObj, i);
			// Set the above style
			this[`card_${i}`].style.width = cardStyle.width;
			this[`card_${i}`].style.top = cardStyle.top;
			this[`card_${i}`].style.left = cardStyle.left;
		});

		// set wrapper height to max of heightsArr
		const maxObj = utils.findIndex(this.heightsArr);
		this.subroot.style.height = `${maxObj.maxVal}px`;
		// set opacity to 1
		this.subroot.classList.add('subrootActive');
	}

	render() {
		return (
			<section className={cx('root', typeof this.props.containerClass !== 'undefined' && this.props.containerClass)}>
				<section className="subroot" ref={(r) => {this.subroot = r;}}>
					{
						React.Children.map(this.props.children, (child, i) =>
							<section className={cx('cardWrapper', typeof this.props.cardWrapperClass !== 'undefined' && this.props.cardWrapperClass)} style={{width: `calc(${100 / this.columnCount}% - ${((this.columnCount - 1) / this.columnCount) * this.horizontalSpacing}px)`}} ref={(r) => {this[`card_${i}`] = r;}} >
								{child}
							</section>
						)
					}
				</section>
			</section>
		);
	}
}

export default Masonry;
