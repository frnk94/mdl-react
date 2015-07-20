/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		horizontal,		string				left, right
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		horizontal: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			horizontal: 'left',
		};
	},

	render: function() {

		if(this.props.horizontal == 'left' && this.props.isMega == false){
			console.warn("Horizontal: Make sure mdl-logo is in mini-footer left-section");
		}

		return (
			<div className={
				"mdl-" + 
				(this.props.isMega ? 'mega' : 'mini') + 
				"-footer" + "--" +this.props.horizontal + 
				"-section"}
			>
				{this.props.children}
			</div>
		);
	}

});

