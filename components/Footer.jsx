// Footer.jsx

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		isMega, 			boolen				isMega ? 'mega' : 'mini'
*/

var React = require('react');
var FooterMixin = require('./FooterComponents/FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	render: function() {

		return (
			<footer className={"mdl-" + (this.props.isMega ? 'mega' : 'mini') + "-footer"} >
				{this.props.children}
			</footer>
		);
	},

});
