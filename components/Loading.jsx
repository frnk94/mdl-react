
/**
	LayoutFixHeader
		http://www.getmdl.io/components/index.html#loading-section
*/
var React = require('react');

var Loading = React.createClass({

	render: function() {
		return (
			<div className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-demo"></div>
		);
	}

});

module.exports = Loading;
