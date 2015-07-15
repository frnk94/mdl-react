
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	getValue: function() {
		console.log('outside get : ', this.refs.outside.getValue());
	},

	setValue: function() {
		console.log('outside setValue');
		this.refs.outside.setValue('555');
	},

	render: function() {
		return (
			<div>
				<br />
				<br />
				<MDL.Badge
					dataBadge = '1'
					textBadge = 'account_box'
					icon = {true}
					ref='outside'
				/><br />
				<MDL.Badge
					dataBadge = '♥'
					textBadge = 'account_box'
					icon = {true}
					noBackground={true}
				/><br />
				<MDL.Badge
					dataBadge = '4'
					textBadge = 'Index'
				/><br />
				<MDL.Badge
					dataBadge = '♥'
					textBadge = 'Mood'
				/><br />
				<MDL.Badge>
					<div
						dataBadge = '34'
						textBadge = 'account_box'
					></div>
				</MDL.Badge>
				<button onClick={this.getValue}>get Value</button>
				<button onClick={this.setValue}>Set value</button>
			</div>
		);
	},

});
