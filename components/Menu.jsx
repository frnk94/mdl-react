
var React = require('react');
var cx = require('classnames');

/**
 *	MENUS --- Lists of clickable actions.
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		id
 *		Icon
 *		atRight
 *		atBottom
 *		isRipple
 *		menuList
 */

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			style: {},
			fromRight: false,
			fromAbove: false,
			isRipple: true,
		};
	},

	propTypes: {
		id: React.PropTypes.string.isRequired,
		Icon: React.PropTypes.element.isRequired,
		style: React.PropTypes.object,
		isRight: React.PropTypes.bool,
		isAbove: React.PropTypes.bool,
		isRipple: React.PropTypes.bool,
		menuList: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.node.isRequired,
      events: React.PropTypes.objectOf(React.PropTypes.func),
			style: React.PropTypes.objectOf(React.PropTypes.string),
    })).isRequired,
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {

		var classes = {
			"mdl-menu": true,
			"mdl-js-menu": true,
			"mdl-js-ripple-effect": this.props.isRipple,
		};

		if (this.props.toRight && this.props.atTop){
			classes['mdl-menu--top-right'] = true;
		} else if (this.props.atRight) {
			classes['mdl-menu--bottom-right'] = true;
		} else if (this.props.atTop) {
			classes['mdl-menu--top-left'] = true;
		}

		return cx(classes);
	},

	_getStyle: function() {
		var style = this.props.style;
		style.position = 'relative';
		return style;
	},

	render: function() {

		var list = this.props.menuList.map(function(item, index) {
			return (
				<li key={index} className="mdl-menu__item" style={item.style} {...item.events}>
					{item.text}
				</li>
			);
		});

		return (
			<div style={this._getStyle()}>
				<button id={this.props.id} className="mdl-button mdl-js-button mdl-button--icon">
	  			{this.props.Icon}
				</button>
				<ul className={this._getClasses()} htmlFor={this.props.id}>
					{list}
				</ul>
			</div>
		);
	},

});
