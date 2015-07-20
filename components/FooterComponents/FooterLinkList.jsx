/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		dropList: isRequired, Array of Object, Object can contains 2 propetires:
			text, isRequired, must be String or React Component
*/

var React = require('react');
var FooterMixin = require('./FooterMixin.js');

module.exports = React.createClass({

	mixins: [FooterMixin],

	propTypes: {
		dropList: React.PropTypes.arrayOf(React.PropTypes.shape({
			text: React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
		})).isRequired,
	},

	getDefaultProps: function() {
		return {
			dropList:[],
		};
	},

	render: function() {

		var list = null;

		list = this.props.dropList.map(function(item, index) {
			return (
				<li>
					<a href={item.href}>
						{item.text}
					</a>
				</li>
			);
		});

		return (
				<ul className={
						"mdl-" + 
						(this.props.isMega ? 'mega' : 'mini') + 
						"-footer--link-list"
					}
				>
					{list}
				</ul>
		);
	}

});