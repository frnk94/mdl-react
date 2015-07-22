
'use strict';

var React = require('react');

module.exports = React.createClass({
	propTypes: {
		leftItems : React.PropTypes.shape({
			type : React.PropTypes.oneOf(['list', 'button']).isRequired,
			items : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]),
		}),
		rightItems : React.PropTypes.shape({
			type : React.PropTypes.oneOf(['list', 'button']).isRequired,
			items : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]),
		}),
		isMini: React.PropTypes.bool,
		miniOrMega: React.PropTypes.string,
	},

	getInitialState: function() {
		return {
			miniOrMega : this.props.isMini? 'mini': 'mega',
		};
	},

	_generateList: function(inputItem) {
		if(inputItem.type == 'list') {
			// console.log('_generateList');
			var list = inputItem.items.map(function(item, index) {
				return <li 
							key={index}
						>
							{item}
						</li>;
			});
			return (
				<ul
					className={
						"mdl-" +
						this.state.miniOrMega +
						"-footer--link-list"
					}
				>
					{list}
				</ul>
			);
		}
	},

	_generateHorizontal: function(inputItem, side) {
		// console.log('Generate' + side + 'item');
		var logo = null;
		if(inputItem.logo) {
			logo = React.cloneElement(inputItem.logo, {
				className: 'mdl-logo',
			});
		}
		return (
			<div className={"mdl-"+this.state.miniOrMega+"-footer--"+side+"-section"}>
				{logo}
				{this._generateList(inputItem)}
			</div>
		);
	},

	render: function() {
		return (
			<footer className={"mdl-" + this.state.miniOrMega + "-footer"}>
				{this._generateHorizontal(this.props.leftItems, 'left')}
				{this._generateHorizontal(this.props.rightItems, 'right')}
			</footer>
		);
	}
});
