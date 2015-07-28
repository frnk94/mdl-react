
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
				<span className="mdl-layout-title">
					<a href={this.props.href} style={style} >
						{this.props.children}
					</a>
				</span>
			);
		} else {
			return (
				<span className="mdl-layout-title" style={this.props.style} >
					{this.props.children}
				</span>
			);
		}
	},

});
