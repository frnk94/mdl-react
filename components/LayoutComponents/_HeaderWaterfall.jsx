

var React = require('react');
var PropTypes = React.PropTypes;
var _ = require('lodash');

var _HeaderWaterfall = React.createClass({

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
				<div className="mdl-layout__header-row">
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						{items}
					</nav>
				</div>
			);
		} else {
			return null;
		}
	}

});

module.exports = _HeaderWaterfall;
