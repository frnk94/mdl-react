/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		isMega, 			boolen				isMega ? 'mega' : 'mini'
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	render: function() {

		return (
			<button className={"mdl-" + 
				(this.props.isMega ? 'mega' : 'mini') + "-footer" + "__social-btn"}>
			</button>
		);
	}

});