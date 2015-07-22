
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
	},


	getInitialState: function() {
		return {
			miniOrMega : this.props.isMini? 'mini': 'mega',
		};
	},

	_checkHorizontal: function(inputItem) {
		if(inputItem === this.props.leftItems)
			return 'left';
		if(inputItem === this.props.rightItems)
			return 'right';
	},

	_generateLogo: function(inputItem) {
		if(inputItem.logo) {
			// console.log('_generateLogo');
			return React.cloneElement(inputItem.logo, {
				className: 'mdl-logo',
			});
		}
	},

	_generateList: function(inputItem, miniOrmega) {
		if(inputItem.type == 'list') {
			// console.log('_generateList');
			var list = inputItem.items.map(function(item, index) {
				return <li key={index}>{item}</li>;
			});
			return (
				<ul
					className={
						"mdl-" +
						miniOrmega +
						"-footer--link-list"
					}
				>
					{list}
				</ul>
			);
		}
	},

	_generateBtn: function(inputItem, miniOrmega) {
		if(inputItem.type == 'button') {
			console.log('_generateBtn');
			var newClassName = 'mdl-'+miniOrmega+'-footer--social-btn';
			return inputItem.items.map(function(item, index) {
				return React.cloneElement(item, {
					className: newClassName,
				});
			});
		}
	},

	_generateHorizontal: function(propsItem, leftOrRight) {
		if(propsItem == this.props.leftItems) {
			console.log('Generate leftItem');
			var miniOrmega = this.props.isMini? 'mini': 'mega';
			var leftOrRight = this._checkHorizontal(this.props.leftItems);
			var left = (
				<div className={"mdl-"+miniOrmega+"-footer--"+leftOrRight+"-section"}>
					{this._generateLogo(propsItem)}
					{this._generateList(propsItem, miniOrmega)}
					{this._generateBtn(propsItem, miniOrmega)}
				</div>
			);
			return {left}
		}
		if(propsItem == this.props.rightItems) {
			console.log('Generate rightItem');
			var miniOrmega = this.props.isMini? 'mini': 'mega';
			var leftOrRight = this._checkHorizontal(this.props.rightItems);
			var right = (
				<div className={"mdl-"+miniOrmega+"-footer--"+leftOrRight+"-section"}>
					{this._generateLogo(propsItem)}
					{this._generateList(propsItem, miniOrmega)}
					{this._generateBtn(propsItem, miniOrmega)}
				</div>
			);
			return {right}
		}
	},


	render: function() {
		var miniOrmega = this.props.isMini? 'mini': 'mega';
		return (
			<footer className={"mdl-" + miniOrmega + "-footer"}>
				{this._generateHorizontal(this.props.leftItems, 'left')}
				{this._generateHorizontal(this.props.rightItems, 'right')}
			</footer>
		);
	}

});
