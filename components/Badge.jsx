/** @jsx React.DOM */

var React = require('react');
var cx = require('classnames');

/**
	Badge
		http://www.getmdl.io/components/index.html#badges-section
	Props
		badge,			node isRequired,		the legal char for <Badge> element
		icon,			bool,					use mdl icon in Badge 
		noBackground,	bool,					use Background in Badge
	Icon
		https://www.google.com/design/icons/
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		badge : React.PropTypes.node.isRequired,
		icon : React.PropTypes.bool,
		noBackground : React.PropTypes.bool,
	},

	getDefaultProps: function() {
		return {
			badge : 404,
			icon : false,
			noBackground : false,
		};
	},

	render: function() {
		console.log('inside render')
		var date = Date.now();

		var classes = {
			container : {
				'mdl-badge' : true,
			},
		};

		var divStyle = {
			display: 'inline-block',
		};

		if(this.props.noBackground) {
			classes.container['mdl-badge--no-background'] = true;
		}

		if(this.props.icon) {
			classes.container['icon material-icons'] = true;
		}

		return (
				<div 
					key={date}
					className={cx(classes.container)}
					data-badge={this.props.badge}
					style={divStyle}
				>
				{this.props.children}
				</div>
		);
	},

});
