
'use strict';

var React = require('react');
var cx = require('classnames');

/**
	Badge
		http://www.getmdl.io/components/index.html#badges-section
	Props
		badge,					node isRequired,		the legal char for <Badge> element
		materialDesignIcon,		bool,					use mdl icon in Badge
		noBackground,			bool,					use Background in Badge
		style,					object,					for css
	Icon
		https://www.google.com/design/icons/
*/

module.exports = React.createClass({displayName: "exports",

	propTypes: {
		badge : React.PropTypes.node.isRequired,
		materialDesignIcon : React.PropTypes.bool,
		noBackground : React.PropTypes.bool,
		style : React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			badge : '?',
			materialDesignIcon : false,
			noBackground : false,
			style : {
				display: 'inline-block',
			},
		};
	},

	_getClasses: function() {
		var classes = {
			'mdl-badge': true,
		};
		if(this.props.noBackground) {
			classes['mdl-badge--no-background'] = true;
		}
		if(this.props.materialDesignIcon) {
			classes['icon material-icons'] = true;
		}
		return cx(classes);
	},

	render: function() {
		var style = this.props.style;
		if(style){
			style.display= 'inline-block';
		}
		return (
			React.createElement("div", {
				className: this._getClasses(), 
				"data-badge": this.props.badge, 
				style: style
			}, 
				this.props.children
			)
		);
	},

});
