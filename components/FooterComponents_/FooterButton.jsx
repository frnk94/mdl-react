/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		isMega, 			boolen				isMega ? 'mega' : 'mini'
		social,				string				Since like work out
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		social : React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			social: 'github',
		};
	},

	render: function() {

		return (
			<button 
				className={
					"mdl-" + 
					(this.props.isMega ? 'mega' : 'mini') + 
					"-footer" + 
					"--social-btn" +
					" " +
					"social-btn" +
					" " +
					"social-btn" +
					"__" +
					(this.props.social)
				}
			>
			</button>
		);
	}

});