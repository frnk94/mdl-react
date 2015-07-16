
"use strict";

var React = require('react');
var MDL = require('../../components/');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	render : function() {

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
				key : 'badge',
				type : 'string',
				state : 'required && default: 0',
				content : 'a minimum value for an <input> element',
			},
		];

		var eventsDetail = [
			{
				key : 'getValue',
				type : 'function',
				state : '',
				content : 'get the value from the current sliders',
			},
		];

		return (
			<div style={style}>
				<h2 style={titleStyle}>Badge</h2>
				<MDL.Card style={cardStyle} shadow={6}>
					<div style={exampleStyle}>example</div>
						<div style={demoStyle}>
						<MDL.Badge
							badge = {1}
							materialDesignIcon = {true}
						>
							<div>account_box</div>
						</MDL.Badge>

						<MDL.Badge
							badge = {10}
							materialDesignIcon = {true}
							noBackground = {true}
						>
							<div>
								group
							</div>
						</MDL.Badge>

						<MDL.Badge
							badge = '♥'
							materialDesignIcon = {true}
						>
							<div>
								mail
							</div>
						</MDL.Badge>

						<MDL.Badge
							badge = '♥'
						>
							<div>
								Wood
							</div>
						</MDL.Badge>
					</div>
					<MDL.PrismCode
						src='../codes/BadgeInfo.js'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
				<Props detail={eventsDetail} title="Methods" />
			</div>
		);
	},

});
