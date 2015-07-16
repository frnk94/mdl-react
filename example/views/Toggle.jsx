
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	_onChange: function(e) {
		console.log(e.target.value);
	},

	_turnon: function() {
		console.log(this.refs.checkbox.isChecked());
	},

	_turnOff: function() {
		console.log(this.refs.checkbox.toggle(false));
	},

	render: function() {
		return (
			<div>
				<MDL.Toggle ref="checkbox" type="checkbox" text="checkbox"/>

				<MDL.Button type="RaisedButton"
					text="Turn on"
					isRipple={true}
					isPrimary={true}
					onClick={this._turnon}/>
				<MDL.Button type="RaisedButton"
					text="Turn off"
					isRipple={true}
					isAccent={true}
					onClick={this._turnOff}/>
				<br />

				<MDL.Toggle type="icon-toggle" text="format_bold"/>
				<MDL.Toggle type="switch" text="Switch"/>

				<div>
					<MDL.Toggle type="radio" text="Option1" name="option" value="1" isChecked={true} onChange={this._onChange}/><br/>
					<MDL.Toggle type="radio" text="Option2" name="option" value="2" onChange={this._onChange}/><br/>
					<MDL.Toggle type="radio" text="Option3" name="option" value="3" onChange={this._onChange}/><br/>
				</div>
			</div>
		);
	},

});
