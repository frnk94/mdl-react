
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');
var DocTitle = require('../document/DocTitle.jsx');
var DocSubtitle = require('../document/DocSubtitle.jsx');

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
		this.refs.test.setValue('80');
	},

	render: function() {

		var style = {
			width : '100%',
			maxWidth : '1200px',
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
				type : 'number',
				state : 'required ',
				content : 'The miximum value of the slider can scale from 0 to 100',
			},
			{
				key : 'max',
				type : 'number',
				state : 'required ',
				content : 'The maximum value of the slider can scale from 0 to 100',
			},
			{
				key : 'tabIndex',
				type : 'number',
				state : 'default: 0',
				content : 'The tab order of the slider',
			},
			{
				key : 'step',
				type : 'number',
				state : 'default: 0',
				content : 'The legal number intervals for the value of the slider',
			},
			{
				key : 'defaultValue',
				type : 'number',
				state : 'default: 50',
				content : 'The default value of the slider',
			},
			{
				key : 'disabled',
				type : 'boolen',
				state : 'default: false',
				content : 'If it is true, the slider will not interact',
			},
		];

		var eventsDetail = [
			{
				key : 'getValue',
				type : 'function',
				state : '',
				content : 'Get the value from the current sliders',
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
				<DocTitle title="Slider" />
				<MDL.Card style={cardStyle} shadow={3}>
					<div style={demoStyle}>
						<DocSubtitle title="example" />
						<MDL.Slider
							min = {0}
							max = {100}
						/><br />
						<MDL.Slider
							min = {0}
							max = {100}
							defaultValue = {10}
							step = {5}
						/><br />
						<MDL.Slider
							min = {0}
							max = {100}
							defaultValue = {80}
							disabled = {true}
						/><br />
						<DocSubtitle title="Methods (E.g setValue = 80)" />
						<MDL.Slider
							ref='test'
							min = {0}
							max = {100}
							defaultValue = {40}
							step = {10}
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
						src='http://fandora.github.io/mdl-react/example/codes/SliderInfo.js'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
				<Props detail={eventsDetail} title="Methods" />
			</div>
		);
	},

});
