
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

		var badgeStyle = {
			  margin: '10px 30px 10px 30px',
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
				type : 'node',
				state : 'required',
				content : 'the legal char for <Badge> element',
			},
			{
				key : 'materialDesignIcon',
				type : 'boolen',
				state : 'optional',
				content : 'use mdl icon in Badge',
			},
			{
				key : 'noBackground',
				type : 'bool',
				state : 'optional',
				content : 'use Background in Badge',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'for CSS',
			},
		];

		return (
			<div style={style}>
				<h2 style={titleStyle}>Badge</h2>
				<MDL.Card style={cardStyle} shadow={6}>
					<div style={exampleStyle}>example</div>
						<div style={demoStyle}>
						<MDL.Badge
							style={badgeStyle}
						>
							<div>yourText</div>
						</MDL.Badge>
						<MDL.Badge
							badge = {10}
							noBackground = {true}
							style={badgeStyle}
						>
							<div>
								mail
							</div>
						</MDL.Badge>
						<MDL.Badge
							badge = {10}
							noBackground = {true}
							materialDesignIcon = {true}
							style={badgeStyle}
						>
							<div>
								mail
							</div>
						</MDL.Badge>
						<MDL.Badge
							badge = '♥'
							materialDesignIcon = {true}
							style={badgeStyle}
						>
							<div>
								face
							</div>
						</MDL.Badge>
					</div>
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/BadgeInfo.js'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
			</div>
		);
	},

});
