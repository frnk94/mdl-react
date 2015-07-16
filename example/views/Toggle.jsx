
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	_onChange: function(e) {
		console.log(e.target.value);
	},

	_get: function() {
		console.log(this.refs.checkbox.isChecked());
	},

	_toggle: function() {
		console.log(this.refs.checkbox.toggle());
	},

	render: function() {
		return (
			<div>
				<MDL.Toggle ref="checkbox" type="checkbox" text="checkbox"/>

				<MDL.Button type="RaisedButton"
					text="GET"
					isRipple={true}
					isPrimary={true}
					onClick={this._get}/>
				<MDL.Button type="RaisedButton"
					text="Toggle"
					isRipple={true}
					isAccent={true}
					onClick={this._toggle}/>
				<br />

				<MDL.Toggle type="icon-toggle" text="format_bold"/>
				<MDL.Toggle type="switch" text="Switch"/>

				<div>
					<MDL.Toggle type="radio" text="Option1" name="option" value="1" isChecked={true} onChange={this._onChange}/><br/>
					<MDL.Toggle type="radio" text="Option2" name="option" value="2" onChange={this._onChange}/><br/>
					<MDL.Toggle type="radio" text="Option3" name="option" value="3" onChange={this._onChange} isDisabled={true}/><br/>
				</div>
			</div>
		);
	},

});
