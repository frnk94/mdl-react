/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		vertical,		string				top, bottom, middle
		logoTitle,		string				required in class="mega-footer bottom-section"
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		vertical: React.PropTypes.string,
		logoTitle: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			vertical: 'middle',
			logoTitle: 'logoTitle',
		};
	},

	render: function() {

		var logo = null;

		if(this.props.vertical == 'bottom' && this.props.isMega == true){
			logo = (
				<div 
					className="mdl-logo"
				>
				{this.props.logoTitle}
				</div>
			);
		}

		return (
			<div className={
				"mdl-" + 
				(this.props.isMega ? 'mega' : 'mini') + 
				"-footer" + "--" +this.props.vertical + 
				"-section"}
			>
				{logo}
				{this.props.children}
			</div>
		);
	}

});
