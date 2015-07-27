
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Button
		http://www.getmdl.io/components/index.html#buttons-section
	Props
		children:
		type: 'FloatingActionButton', 'RaisedButton', 'FlatButton', 'IconButton'
		style
		isRipple: 是否帶特效, 預設 true
		isPrimary: 是否使用 primary color
		isAccent: 是否使用強調色
		isMini: 是否 mini for FAB
*/
module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			isMini: false,
			isRipple: true,
			isPrimary: false,
			isAccent: false,
		};
	},

	propTypes: {
		children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string]),
		style: React.PropTypes.object,
		type: React.PropTypes.oneOf(
			['FloatingActionButton', 'RaisedButton', 'FlatButton', 'IconButton']
		).isRequired,
		isMini: React.PropTypes.bool,
		isRipple: React.PropTypes.bool,
		isPrimary: React.PropTypes.bool,
		isAccent: React.PropTypes.bool,
		isDisabled: React.PropTypes.bool,
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {
		var classes = {
			'mdl-button': true,
			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.isRipple,
			'mdl-button--colored': this.props.isPrimary,
			'mdl-button--accent': this.props.isAccent,
		};
		if (this.props.type === 'FloatingActionButton') {
			classes['mdl-button--fab'] = true;
			classes['mdl-button--colored'] = false;
			classes['mdl-button--primary'] = this.props.isPrimary;
			classes['mdl-button--mini-fab'] = this.props.isMini;
		} else if (this.props.type === 'RaisedButton') {
			classes['mdl-button--raised'] = true;
		} else if (this.props.type === 'IconButton') {
			classes['mdl-button--icon'] = true;
		}
		return cx(classes);
	},

	_getChild: function() {
		var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;
		if (_.isString(child)) {
			return <button>{child.trim()}</button>;
		} else if (child) {
			return child;
		} else {
			return <button />;
		}
	},

	render: function() {
		var element = this._getChild();
		var classname = element.props.className || '';
		var newProps = {
			className : classname + ' ' + this._getClasses(),
			disabled : this.props.isDisabled,
			style : _.extend(element.props.style || {}, this.props.style),
		};
		return React.cloneElement(element, newProps);
	},

});
