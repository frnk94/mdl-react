
'use strict';

var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	displayName : '_HeaderTitle',

	propTypes: {
		children : React.PropTypes.node.isRequired,
		style : React.PropTypes.object,
		href : React.PropTypes.string,
		disabled : React.PropTypes.bool,
	},

	render : function() {
		if(this.props.disabled) {
			return null;
		}
		if(
			_.isString(this.props.children) &&
			this.props.href
		) {
			var style = _.extend({
				textDecoration: 'none',
				color : 'inherit',
			}, this.props.style);
			return (
				React.createElement("span", {className: "mdl-layout-title"}, 
					React.createElement("a", {href: this.props.href, style: style}, 
						this.props.children
					)
				)
			);
		} else {
			return (
				React.createElement("span", {className: "mdl-layout-title", style: this.props.style}, 
					this.props.children
				)
			);
		}
	},

});
