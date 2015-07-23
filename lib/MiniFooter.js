
'use strict';

var React = require('react');

var MiniFooter = React.createClass({displayName: "MiniFooter",

	propTypes: {
		leftSection : React.PropTypes.shape({
			links : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.node,
		}),
		rightSection : React.PropTypes.shape({
			links : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.node,
		}),
		style : React.PropTypes.object,
	},

	getInitialState: function() {
		return {
			miniOrMega : this.props.isMini? 'mini': 'mega',
		};
	},

	_generateList: function(links) {
		var list = links.map(function(item, index) {
			return React.createElement("li", {key: index}, item);
		});
		return (
			React.createElement("ul", {className: "mdl-mini-footer--link-list"}, 
				list
			)
		);
	},

	_generateSection: function(section, side) {
		if(section) {
			var logo = null;
			if(section.logo) {
				logo = (
					React.createElement("div", {className: "mdl-logo"}, 
						section.logo
					)
				);
			}
			var cname = "mdl-mini-footer--" + side + "-section";
			return (
				React.createElement("div", {className: cname}, 
					logo, 
					this._generateList(section.links)
				)
			);
		}
	},

	render: function() {
		return (
			React.createElement("footer", {className: "mdl-mini-footer", style: this.props.style}, 
				this._generateSection(this.props.leftSection, 'left'), 
				this._generateSection(this.props.rightSection, 'right')
			)
		);
	}
});

module.exports = MiniFooter;
