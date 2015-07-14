
/**
	LayoutFixHeader
		http://www.getmdl.io/components/index.html#loading-section
*/
var React = require('react');

var Spinner = React.createClass({

	render: function() {
		return (
			<div className="mdl-spinner mdl-js-spinner is-active"></div>
		);
	}

});

module.exports = Spinner;