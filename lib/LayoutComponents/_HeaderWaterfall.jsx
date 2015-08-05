

var React = require('react');
var PropTypes = React.PropTypes;
var _ = require('lodash');

var _HeaderWaterfall = React.createClass({displayName: "_HeaderWaterfall",

	propTypes: {
		disabled : React.PropTypes.bool.isRequired,
		showHeaderSearch : React.PropTypes.bool,
		children : PropTypes.arrayOf(PropTypes.element),
	},

	render: function() {
		if(!this.props.disabled) {
			var items = _.map(this.props.children, function(child, index) {
				var newClassName = (child.props.className || '') + ' mdl-navigation__link';
				return React.cloneElement(child, {
					key : '' + index,
					className : newClassName,
				});
			}, this);
			if(
				this.props.showHeaderSearch &&
				items.length > 0
			) {
				items[items.length - 1] = React.cloneElement(
					items[items.length - 1],
					{
						style : { paddingRight : 0 },
					}
				);
			}
			return (
				React.createElement("div", {className: "mdl-layout__header-row"}, 
					React.createElement("div", {className: "mdl-layout-spacer"}), 
					React.createElement("nav", {className: "mdl-navigation"}, 
						items
					)
				)
			);
		} else {
			return null;
		}
	}

});

module.exports = _HeaderWaterfall;
