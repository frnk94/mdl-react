
var React = require('react');
var PropTypes = React.PropTypes;
var _ = require('lodash');

var _HeaderTabs = React.createClass({

	propTypes: {
		children : PropTypes.arrayOf(PropTypes.element),
		activeIndex : PropTypes.number,
	},

	render: function() {
		// console.log(this.props.children);
		if(this.props.children.length > 0) {
			var tabs = _.map(this.props.children, function(child, index) {
				var newClassName = (child.props.className || '') + ' mdl-layout__tab';
				if(index == this.props.activeIndex) {
					newClassName += ' is-active';
				}
				return React.cloneElement(child, {
					key : '' + index,
					className : newClassName,
				});
			}, this);
			return (
				<div className="mdl-layout__tab-bar mdl-js-ripple-effect">
					{tabs}
				</div>
			);
		} else {
			return null;
		}
	}

});

module.exports = _HeaderTabs;
