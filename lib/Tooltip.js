
"use strict";

var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Tooltips
		http://www.getmdl.io/components/index.html#tooltips-section
	Props
		large,		是否要選擇 mdl-tool--large
		text,		tooltips要顯示的文字
		style,
		children,

*/

var token = 1;

module.exports = React.createClass({displayName: "exports",

	propTypes: {
		children: React.PropTypes.element.isRequired,
		large: React.PropTypes.bool,
		text: React.PropTypes.string,
		style: React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			text: 'Tooltip text',
		};
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	render: function() {

		var classes = {
			'mdl-tooltip' : true,
		};
		if(this.props.large) {
			classes['mdl-tooltip--large'] = true;
		}

		var style = {
			display : 'inline-block',
		};
		var style = _.extend(style, this.props.style);

		var id = 'mdl-tooltip-' + (token++);
		var children = React.cloneElement(this.props.children, {
			id : id,
		});

		return (
			React.createElement("div", {style: style}, 
				children, 
				React.createElement("div", {className: cx(classes), htmlFor: id}, 
					this.props.text
				)
			)
		);

	}

});
