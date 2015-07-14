
/**
	LayoutFixHeader
		http://www.getmdl.io/components/index.html#loading-section
	Props
*/
var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({

	render: function() {
		var classes = {
				container : {
					'mdl-spinner' : true,
					'mdl-js-spinner' : true,
					'is-active' : true,
				},
			};

		if(this.props.singleColor) {
			classes.container['mdl-spinner--single-color'] = true;
		}

		return (
			<div className={cx(classes.container)} > </div>
		);
	},

});
