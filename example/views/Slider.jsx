
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	onChange: function(event) {
		console.log('outside get value : ', event.target.value);
	},

	getValue: function() {
		console.log('outside get : ', this.refs.test.getValue());
		alert(this.refs.test.getValue());
	},

	setValue: function() {
		console.log('outside setValue');
		this.refs.test.setValue('80')
	},

	render: function() {

		var style = {
			width : '100%',
			maxWidth : '1200px',
		};

		var titleStyle = {
			fontSize: '24px',
			lineHeight: '32px',
			paddingTop: '16px',
			marginBottom: '12px',
			letterSpacing: '0px',
			fontWeight: 400,
			color: 'rgba(0, 0, 0, 0.87)',
		};

		var exampleStyle = {
			color: '#e0e0e0',
			padding: '8px',
			marginBottom: '0px',
			fontSize: '14px',
			lineHeight: '20px',
			letterSpacing: '0px',
			textTransform: 'uppercase',
			fontWeight: 500,
		};

		var demoStyle = {
			borderRadius: '0 0 2px 0',
			padding: '24px',
			margin: '0px',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var buttonStyle = {
			width : '100px',
			margin : '0px 10px',
		};

		var buttonAreaStyle = {
			width : '240px',
			margin : '24px auto',
			marginTop : '0px',
		};

		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var propsDetail = [
			{
				key : 'min',
				type : 'string',
				state : 'required && default: 0',
				content : 'a minimum value for an <input> element',
			},
			{
				key : 'max',
				type : 'string',
				state : 'required && default: 100',
				content : 'a maximum value for an <input> element',
			},
			{
				key : 'tabIndex',
				type : 'string',
				state : 'optional',
				content : 'the tab order of an element',
			},
			{
				key : 'step',
				type : 'string',
				state : 'default: 0',
				content : 'the legal number intervals for an <input> element',
			},
			{
				key : 'defaultValue',
				type : 'boolen',
				state : 'default: 50',
				content : 'the value of an <input> element',
			},
		];

		var eventsDetail = [
			{
				key : 'getValue',
				type : 'function',
				state : '',
				content : 'get the value from the current sliders',
			},
			{
				key : 'setValue',
				type : 'function(inputValue)',
				state : '',
				content : 'Set the value in the current sliders',
			},
		];

		return (
			<div style={style}>
				<h2 style={titleStyle}>Slider</h2>
				<MDL.Card style={cardStyle} shadow={6}>
					<div style={exampleStyle}>example</div>
						<div style={demoStyle}>
							<MDL.Slider
								min = '0'
								max = '100'
							/><br />
							<MDL.Slider
								min = '0'
								max = '100'
								defaultValue = '10'
								step = '5'
							/><br />
							<MDL.Slider
								min = '0'
								max = '100'
								defaultValue = '80'
								disabled = 'disabled'
							/><br />
							<MDL.Slider
								ref='test'
								min = '0'
								max = '100'
								defaultValue = '40'
								step = '10'
								onChange={this.onChange}
							/><br />
							<div style={buttonAreaStyle}>
								<MDL.Button 
								type="RaisedButton"
								text="Get Value"
								style={buttonStyle}
								isAccent={true}
								onClick={this.getValue}
								/>
								<MDL.Button 
									type="RaisedButton"
									text="set Value"
									style={buttonStyle}
									isRipple={true}
									isPrimary={true}
									onClick={this.setValue} 
								/>
							</div>
						</div>
					<MDL.PrismCode
						src='../codes/SliderInfo.js'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
				<Props detail={eventsDetail} title="Methods" />
			</div>
		);
	},

});