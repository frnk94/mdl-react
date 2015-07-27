
var React = require('react');
var cx = require('classnames');
/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		children: isRequired, it must have one clickable element and at least menu item.
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
		children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
		openDirection: React.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
	},

	id: 'mdl-menu-',

	componentWillMount: function() {
		if(this.props.children instanceof Array && this.props.children.length < 2){
			console.warn("MDL.Menu: Menu should contain at least one clickable element and one list element");
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

		if (this.props.openDirection === 'top-right') {
			classes['mdl-menu--top-right'] = true;
		} else if (this.props.openDirection === 'bottom-right') {
			classes['mdl-menu--bottom-right'] = true;
		} else if (this.props.openDirection === 'top-left') {
			classes['mdl-menu--top-left'] = true;
		}

		return cx(classes);
	},

	_getButton: function() {
		if (this.props.children instanceof Array){
			return React.cloneElement(this.props.children[0], {id: this.id});
		} else {
			return <div/>;
		}
	},

	render: function() {

		var style = this.props.style;
		style.position = 'relative';

		var list;
		if (this.props.children instanceof Array) {
			list = this.props.children.map(function(child, index) {
				if(!index) return;
				return (
					<li key={index} disabled={child.props.disabled} className="mdl-menu__item">
						{child}
					</li>
				);
			});
		} else {
			list = <div />
		}


		return (
			<div style={style}>
				{this._getButton()}
				<ul className={this._getClasses()} htmlFor={this.id}>
					{list}
				</ul>
			</div>
		);
	},

});
