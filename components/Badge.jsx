/** @jsx React.DOM */

var React = require('react');
var cx = require('classnames');

/**
	Badge
		http://www.getmdl.io/components/index.html#badges-section
	Props
		textBadge,		string isRequired,			the text of an <Badge> element
		dataBadge,		string isRequired,			the legal number for <Badge> element
		icon,			bool,						use mdl icon in Badge 
		noBackground,	bool,						use Background in Badge
	Methods
		getValue									get the dataBadge from the current badge
		setValue									sett the dataBadge to the current badge
*/

var React = require('react');

var Badge = React.createClass({

	propTypes: {
		textBadge : React.PropTypes.string.isRequired,
		dataBadge : React.PropTypes.string.isRequired,
		icon : React.PropTypes.bool,
		noBackground : React.PropTypes.bool,
	},

	getDefaultProps: function() {
		return {
			textBadge : 'Error',
			dataBadge : '404',
			icon : false,
			noBackground : false,
		};
	},

	getInitialState: function() {
		return {
			dataBadge : this.props.dataBadge,
		};
	},

	getValue : function() {
		return this.state.dataBadge;
	},

	setValue : function(inputValue) {
		console.log('inside setValue');
		this.setState({
			dataBadge : inputValue, 
		});
	},

	render: function() {
		console.log('inside render')
		var date = Date.now();

		var classes = {
			container : {
				'mdl-badge' : true,
			},
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
					data-badge={this.state.dataBadge}
				>
				{this.props.textBadge}
				</div>
		);
	}

});

module.exports = Badge;
