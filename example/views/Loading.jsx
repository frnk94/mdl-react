
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			percentage : 0,
		};
	},

	render: function() {
		var propsDetail=[
			{
				key : 'type',
				type : 'string',
				state : 'required',
				content : 'Choose the loading type, progress bar or spinner.',
			},

			{
				key : 'indeterminate',
				type : 'boolean',
				state : 'optional',
				content : 'Apply animation effect on progress bar.',
			},

			{
				key : 'singleColor',
				type : 'boolean',
				state : 'optional',
				content : 'Uses a single color instead of changing colors',
			},

			{
				key : 'percentage',
				type : 'number',
				state : 'optional',
				content : 'Set the loading percentage of progress bar.',
			},

			{
				key : 'buffer',
				type : 'number',
				state : 'optional',
				content : 'Set the loading buffer of progerss bar.',
			},

			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'CSS style setting.',
			},
		];

		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var loadingStyle = {
			margin : '24px auto',
		};

		var style = {
			width : '100%',
			maxWidth : '1200px',
		};

		return (
			<div style={style}>
				<MDL.Card style={cardStyle} shadow={6}>
					<MDL.Loading
						ref='test'
						type="ProgressBar"
						indeterminate={false}
						percentage={this.state.percentage}
						buffer={87}
						style={loadingStyle}
					/> <br />
					<MDL.Loading
						style={loadingStyle}
					/>
					<MDL.PrismCode
						src='example/codes/Loading.jsx'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
			</div>
		);

	},

	componentDidMount: function() {
		var self = this;
		setInterval(function() {
			var percentage = self.state.percentage;
			if(percentage < 65) {
				percentage++;
				self.setState({
					percentage : percentage
				});
			}
		}, 1000);
	},

});
