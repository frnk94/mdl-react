/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		vertical,		string				top, bottom, middle
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		vertical: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			vertical: 'middle',
		};
	},

	render: function() {

		if(this.props.vertical == 'bottom' && this.props.isMega == true){
			console.warn("vertical: Make sure mdl-logo is in mega-footer bottom-section");
		}

		return (
			<div className={
				"mdl-" + 
				(this.props.isMega ? 'mega' : 'mini') + 
				"-footer" + "--" +this.props.vertical + 
				"-section"}
			>
				{this.props.children}
			</div>
		);
	}

});
