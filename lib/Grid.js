var React = require('react');

/**
	Grid
		http://www.getmdl.io/components/index.html#layout-section/grid
		A grid has 12 columns in the desktop screen size, 8 in the tablet size, and 4 in the phone size.
	Props
		style 		css 設定
*/

var Grid = React.createClass({displayName: "Grid",

	propTypes: {
		style : React.PropTypes.object,
	},

	render: function() {
		return (
			React.createElement("div", {className: "mdl-grid", style: this.props.style}, this.props.children)
		);
	}

});

module.exports = Grid;