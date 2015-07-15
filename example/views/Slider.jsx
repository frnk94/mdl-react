
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	onChange: function(event) {
		console.log('outside get value : ', event.target.value);
	},

	getValue: function() {
		console.log('outside get : ', this.refs.test.getValue());
	},

	setValue: function() {
		console.log('outside setValue');
		this.refs.test.setValue('80')
	},

	render: function() {
		return (
			<div>
				<MDL.Slider
					min = '0'
					max = '100'
					defaultValue = '10'
					tabIndex = '0'
				/><br />
				<MDL.Slider
					min = '0'
					max = '100'
					defaultValue = '35'
					tabIndex = '1'
					disabled = 'disabled'
				/><br />
				<MDL.Slider
					ref='test'
					min = '0'
					max = '100'
					defaultValue = '40'
					step = '20'
					tabIndex = '2'
					onChange={this.onChange}
				/><br />
				<button onClick={this.getValue}>get Value</button>
				<button onClick={this.setValue}>Set value</button>
			</div>
		);
	},

});