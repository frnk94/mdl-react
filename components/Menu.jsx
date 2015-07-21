
var React 	= require('react');
var cx 			= require('classnames');
var _ 			= require('lodash');

/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		children: isRequired, clickable element
 *		menuList: isRequired, Array of Object, Object can contains 4 properties:
 *			text, isRequired, must be String or React Component
 *			events, Object, properties should be React events
 *			style, Object, 選項個別CSS樣式
 *			isDisabled, bool, 是否關閉選項
 *		openDirection: Placement of the menu relative to the IconButton.
 *		isRipple: 是否使用Ripple動畫，default true
 *		style: Object, Menu List 整體 CSS 樣式
 */
var id = 1;

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			style: {},
			openDirection: 'bottom-left',
			isRipple: true,
		};
	},

	propTypes: {
		children: React.PropTypes.element.isRequired,
		openDirection: React.PropTypes.string,
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
		menuList: React.PropTypes.arrayOf(React.PropTypes.shape({
			text: React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			events: React.PropTypes.object,
			style: React.PropTypes.object,
			isDisabled: React.PropTypes.bool,
		})).isRequired,
	},

	id: 'mdl-menu-',

	componentWillMount: function() {
		if(this.props.children instanceof Array){
			console.warn("MDL.Menu: Menu should only have one child inside");
		}
		if (!_.includes(['bottom-left', 'bottom-right', 'top-left', 'top-right'], this.props.openDirection)) {
			console.warn('MDL.Button: Invaild openDirection prop: ', this.props.openDirection);
		}

		this.id += id++;
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

		// if (this.props.fromBottomToTop && this.props.fromRightToLeft ){
		// 	classes['mdl-menu--top-right'] = true;
		// } else if (this.props.fromRightToLeft) {
		// 	classes['mdl-menu--bottom-right'] = true;
		// } else if (this.props.fromBottomToTop) {
		// 	classes['mdl-menu--top-left'] = true;
		// }

		if (this.props.openDirection === 'top-right') {
			classes['mdl-menu--top-right'] = true;
		} else if (this.props.openDirection === 'bottom-right') {
			classes['mdl-menu--bottom-right'] = true;
		} else if (this.props.openDirection === 'top-left') {
			classes['mdl-menu--top-left'] = true;
		}

		return cx(classes);
	},

	_getChild: function() {
		if (this.props.children instanceof Array){
			return React.cloneElement(this.props.children[0], {id: this.id});
		} else if (this.props.children) {
			return React.cloneElement(this.props.children, {id: this.id});
		} else {
			return <div/>;
		}
	},

	render: function() {

		var style = this.props.style;
		style.position = 'relative';

		var list = this.props.menuList.map(function(item, index) {
			return (
				<li key={index} disabled={item.isDisabled} className="mdl-menu__item" style={item.style} {...item.events} >
					{item.text}
				</li>
			);
		});

		return (
			<div style={style}>
				{this._getChild()}
				<ul className={this._getClasses()} htmlFor={this.id}>
					{list}
				</ul>
			</div>
		);
	},

});
