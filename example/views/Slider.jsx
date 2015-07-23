
"use strict";

var React = require('react');
var MDL = require('../../components');

var Components = require('../components');


module.exports = React.createClass({

	getInitialState: function() {
		return {
			checkedValue: 'none',
			valueArea: 'none',
		};
	},

	getValue: function() {
		var result = this.refs.test.getValue();
		result = (<div><span>Get value : </span>{result}</div>);
		this.setState({
			checkedValue : result,
			valueArea : 'block',
		});
	},

	setValue: function() {
		this.refs.test.setValue('80');
	},

	render: function() {

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

		var valueStyle = {
			backgroundColor : '#00BCD4',
			padding : '20px',
			color : '#ddd',
			marginBottom : '-7px',
			display : this.state.valueArea,
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
			<Components.Page>
				<Components.DocTitle title="Slider" />
				<MDL.Card style={cardStyle} shadow={3}>
					<div style={demoStyle}>
						<Components.DocSubtitle title="example" />
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
						<Components.DocSubtitle title="Methods (E.g setValue = 80)" />
						<MDL.Slider
							ref='test'
							min = {0}
							max = {100}
							defaultValue = {40}
							step = {10}
							onChange={this.onChange}
						/><br />
						<div style={buttonAreaStyle}>
							<MDL.Button type="RaisedButton" isAccent={true}>
								<button onClick={this.getValue} style={buttonStyle}>Get Value</button>
							</MDL.Button>
							<MDL.Button type="RaisedButton" isPrimary={true}>
								<button onClick={this.setValue} style={buttonStyle}>set Value</button>
							</MDL.Button>
						</div>
					</div>
					<div style={valueStyle}>
						{this.state.checkedValue}
					</div>
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/SliderInfo.js'
						style={prismCode}
					/>
				</MDL.Card>
				<Components.Props detail={propsDetail} title="Props" />
				<Components.Props detail={eventsDetail} title="Methods" />
			</Components.Page>
		);
	},

});
