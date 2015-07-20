/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		horizontal,		string				left, right
		logoTitle,		string				required in class="mini-footer left-section"
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		horizontal: React.PropTypes.string,
		logoTitle: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			horizontal: 'left',
			logoTitle: 'logotitle',
		};
	},

	render: function() {

		var logo = null;

		if(this.props.horizontal == 'left' && this.props.isMega == false){
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
				"-footer" + "--" +this.props.horizontal + 
				"-section"}
			>
				{logo}
				{this.props.children}
			</div>
		);
	}

});

