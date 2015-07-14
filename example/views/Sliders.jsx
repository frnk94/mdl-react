
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	onChange: function(event) {
		console.log('outside get value : ', event.target.value);
	},

	getValue: function() {
		console.log('outside get : ', this.refs.test.getValue());
	},

	setValue: function() {
		console.log('outside set');
		this.refs.test.setValue('80')
	},

	render: function() {
		console.log('outside render');
		return (
			<div>
				<MDL.Sliders
					min = '0'
					max = '100'
					defaultValue = '10'
					tabindex = '0'
				/><br />
				<MDL.Sliders
					min = '0'
					max = '100'
					defaultValue = '35'
					tabindex = '0'
					disabled = 'disabled'
				/><br />
				<MDL.Sliders
					ref='test'
					min = '0'
					max = '100'
					defaultValue = '40'
					step = '20'
					tabindex = '0'
					onChange={this.onChange}
				/><br />
				<button onClick={this.getValue}>get Value</button>
				<button onClick={this.setValue}>Set value</button>
			</div>
		);
	},

});