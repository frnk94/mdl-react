"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {

		var firstStyle = {
			width : '100px',
			margin : '20px',
		};

		var firstTitleStyle = {
			color: '#ffffff',
			background: 'url("http://i.imgur.com/EJFxjMX.jpg") center / cover',
		};

		var firstMenuStyle = {
			color: '#ffffff',
		};

		var secondStyle = {
			margin : '20px',
		};

		var secondTitleStyle = {
			color: '#fff',
			background : 'url("http://i.imgur.com/L5YFTxg.png") bottom right 15% no-repeat #46B6AC',
		};

		var thirdStyle = {
			margin : '20px',
			background: 'url("http://i.imgur.com/ZD4iVTs.jpg") center / cover',
		};

		var thirdActionStyle = {
			color : '#ffffff',
			height: '52px',
			padding: '16px',
			background: 'rgba(0, 0, 0, 0.2)',
		};

		var fourthStyle = {
			margin : '20px',
			background: '#3E4EB8',
			color: '#ffffff',
		};

		var fourthActionStyle = {
			borderColor: 'rgba(255, 255, 255, 0.2)',
		};

		var fourthColor = {
			color: '#ffffff',
		};

		var fifthStyle = {
			margin : '20px',
			width: '256px',
			height: '276px',
			background: '#46B6AC',
			color: '#ffffff',
		};

		return (
			<div>
				<MDL.Card style={firstStyle} width='512'>
					<MDL.CardTitle height='176' style={firstTitleStyle}>
						Welcome
					</MDL.CardTitle>
					<MDL.CardSupportingText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
					</MDL.CardSupportingText>
					<MDL.CardAction border={true}>
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							Get Started
						</a>
					</MDL.CardAction>
					<MDL.CardMenu style={firstMenuStyle}>
						<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
							<i className="material-icons">share</i>
						</button>
					</MDL.CardMenu>
				</MDL.Card>

				<MDL.Card width='320' height='320' shadow={8} style={secondStyle}>
					<MDL.CardTitle height="199" style={secondTitleStyle}>
						Update
					</MDL.CardTitle>
					<MDL.CardSupportingText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
					</MDL.CardSupportingText>
					<MDL.CardAction border={true}>
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							View Updates
						</a>
					</MDL.CardAction>
				</MDL.Card>

				<MDL.Card width='256' height='256' style={thirdStyle}>
					<MDL.CardTitle height='256'></MDL.CardTitle>
					<MDL.CardAction style={thirdActionStyle}>
						<span className="demo-card-image__filename">Image.jpg</span>
					</MDL.CardAction>
				</MDL.Card>

				<MDL.Card width='256' height='256' style={fourthStyle}>
					<MDL.CardTitle height="203">
						<h4 style={fourthColor}>
							Featured event:<br />
							May 24, 2016<br />
							7-11pm
						</h4>
					</MDL.CardTitle>
					<MDL.CardAction border={true} style={fourthActionStyle}>
						<a style={fourthColor} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							Add to Calendar
						</a>
					</MDL.CardAction>
				</MDL.Card>

				<MDL.Card style={fifthStyle}>
					<MDL.CardTitle height="20">
						<h6>media</h6>
					</MDL.CardTitle>
					<MDL.CardMedia height="256" width="256">
						<img src="http://i.imgur.com/ZD4iVTs.jpg" width="256" height="256" border="0" alt="" />
					</MDL.CardMedia>
				</MDL.Card>
			</div>
		);
	},

});