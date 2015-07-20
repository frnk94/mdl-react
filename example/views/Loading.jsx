
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	// getInitialState: function() {
	// 	return {
	// 		test : true
	// 	};
	// },

	// componentDidMount: function() {
	// 	var self = this;
	// 	setInterval(function() {
	// 		self.setState({
	// 			test : !self.state.test,
	// 		});
	// 	}, 1000 * 2);
	// },

	render: function() {
		var propsDetail=[
			{
				key : 'type',
				type : 'string',
				state : 'required',
				content : '選擇loading的樣式，ProgressBar或是Spanning',
			},

			{
				key : 'indeterminate',
				type : 'boolean',
				state : 'optional',
				content : '選擇ProgressBar是否要動畫呈現',
			},

			{
				key : 'singleColor',
				type : 'boolean',
				state : 'optional',
				content : '選擇Spinner是否要用單一顏色',
			},

			{
				key : 'percentage',
				type : 'number',
				state : 'optional',
				content : '設定ProgressBar的loading值',
			},

			{
				key : 'buffer',
				type : 'number',
				state : 'optional',
				content : '設定ProgressBar是否要動畫呈現',
			},

			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : '客製化css樣式',
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
						type="ProgressBar"
						indeterminate={false}
						percentage={44}
						buffer={87}
						style={loadingStyle}
					/> <br />
					<MDL.Loading 
						style={loadingStyle}
					/>

					<MDL.PrismCode
						// src='http://fandora.github.io/mdl-react/example/codes/Loading.js'
						src='../codes/Loading.js'
						lang='jsx'
						style={prismCode}
					/>

				</MDL.Card>
				
				<Props detail={propsDetail} title="Props" />
				</div>
		);
	},

});
