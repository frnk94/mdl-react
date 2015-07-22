/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		title, string, logo's title
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			title: "",
		};
	},

	render: function() {

		return (
			<div className="mdl-logo">
				{this.props.title}
			</div>
		);
	}

});