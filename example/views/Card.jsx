"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			url: 'example1.js',
		};
	},

	_onTabChange: function(tabIndex, e) {
		if (tabIndex === 0) {
			this.setState({url: 'example1.js'});
		} else if (tabIndex === 1) {
			this.setState({url: 'example2.js'});
		} else if (tabIndex === 2) {
			this.setState({url: 'example3.js'});
		} else if (tabIndex === 3) {
			this.setState({url: 'example4.js'});
		} else if (tabIndex === 4) {
			this.setState({url: 'example5.js'});
		}
	},

	render: function() {

		var gridDetail = [
			{
				key : 'shadow',
				type : 'number',
				state : 'optional',
				content : 'Shadow size, just allow 2, 3, 4, 6, 8, 16.',
			},
			{
				key : 'height',
				type : 'number',
				state : 'optional',
				content : 'Card\'s height. Priority is bigger than height in style.',
			},
			{
				key : 'width',
				type : 'number',
				state : 'optional',
				content : 'Card\'s width. Priority is bigger than width in style.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
		];

		var gridTitleDetail = [
			{
				key : 'height',
				type : 'number',
				state : 'optional',
				content : 'Card\'s height. Priority is bigger than height in style.',
			},
			{
				key : 'width',
				type : 'number',
				state : 'optional',
				content : 'Card\'s width. Priority is bigger than width in style.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
		];

		var gridSupportingDetail = [
			{
				key : 'height',
				type : 'number',
				state : 'optional',
				content : 'Card\'s height. Priority is bigger than height in style.',
			},
			{
				key : 'width',
				type : 'number',
				state : 'optional',
				content : 'Card\'s width. Priority is bigger than width in style.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
		];

		var gridActionDetail = [
			{
				key : 'height',
				type : 'number',
				state : 'optional',
				content : 'Card\'s height. Priority is bigger than height in style.',
			},
			{
				key : 'width',
				type : 'number',
				state : 'optional',
				content : 'Card\'s width. Priority is bigger than width in style.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
			{
				key : 'border',
				type : 'boolean',
				state : 'optional',
				content : 'Use default border or not',
			},
		];

		var gridMenuDetail = [
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
		];

		var gridMediaDetail = [
			{
				key : 'height',
				type : 'number',
				state : 'optional',
				content : 'Card\'s height. Priority is bigger than height in style.',
			},
			{
				key : 'width',
				type : 'number',
				state : 'optional',
				content : 'Card\'s width. Priority is bigger than width in style.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'Css setting',
			},
		];

		var firstStyle = {
			width : '100px',
			margin : '24px auto',
		};

		var firstTitleStyle = {
			color: '#ffffff',
			background: 'url("http://i.imgur.com/EJFxjMX.jpg") center / cover',
		};

		var firstMenuStyle = {
			color: '#ffffff',
		};

		var secondStyle = {
			margin : '24px auto',
		};

		var secondTitleStyle = {
			color: '#fff',
			background : 'url("http://i.imgur.com/L5YFTxg.png") bottom right 15% no-repeat #46B6AC',
		};

		var thirdStyle = {
			margin : '24px auto',
			background: 'url("http://i.imgur.com/ZD4iVTs.jpg") center / cover',
		};

		var thirdActionStyle = {
			color : '#ffffff',
			height: '52px',
			padding: '16px',
			background: 'rgba(0, 0, 0, 0.2)',
		};

		var fourthStyle = {
			margin : '24px auto',
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
			margin : '24px auto',
			width: '256px',
			height: '276px',
			background: '#46B6AC',
			color: '#ffffff',
		};

		var iconStyle = {
			color : '#ffffff',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var demoStyle = {
			padding: '24px',
		};

		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var whiteStyle = {
			color :'#ffffff',
		};

		return (
			<Components.Page>
				<Components.DocTitle title="Card" />
				<MDL.Card style={cardStyle} shadow={6}>
					<MDL.Tabs onChange={this._onTabChange} ref="tab" tabLabels={['Example 1','Example 2','Example 3','Example 4','Example 5',]} isRipple={true}>
						<div style={demoStyle}>
							<MDL.Card style={firstStyle} width='512' shadow={2}>
								<MDL.CardTitle height='176' style={firstTitleStyle}>
									Welcome
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										GET STARTED
									</MDL.Button>
								</MDL.CardAction>
								<MDL.CardMenu style={firstMenuStyle}>
									<MDL.Button type="IconButton" isPrimary={true}>
										<button><i style={iconStyle} className="material-icons">share</i></button>
									</MDL.Button>
								</MDL.CardMenu>
							</MDL.Card>
						</div>
						<div style={demoStyle}>
							<MDL.Card width='320' height='320' shadow={8} style={secondStyle}>
								<MDL.CardTitle height="199" style={secondTitleStyle}>
									Update
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										View Updates
									</MDL.Button>
								</MDL.CardAction>
							</MDL.Card>
						</div>
						<div style={demoStyle}>
							<MDL.Card width='256' height='256' style={thirdStyle} shadow={2}>
								<MDL.CardTitle height='256'></MDL.CardTitle>
								<MDL.CardAction style={thirdActionStyle}>
									<span className="demo-card-image__filename">Image.jpg</span>
								</MDL.CardAction>
							</MDL.Card>
						</div>
						<div style={demoStyle}>
							<MDL.Card width='256' height='256' style={fourthStyle} shadow={2}>
								<MDL.CardTitle height="203">
									<h4 style={fourthColor}>
										Featured event:<br />
										May 24, 2016<br />
										7-11pm
									</h4>
								</MDL.CardTitle>
								<MDL.CardAction border={true} style={fourthActionStyle}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										<button style={fourthColor}>GET STARTED</button>
									</MDL.Button>
								</MDL.CardAction>
							</MDL.Card>
						</div>
						<div style={demoStyle}>
							<MDL.Card style={fifthStyle}>
								<MDL.CardTitle height="20" style={whiteStyle}>
									<h6>media</h6>
								</MDL.CardTitle>
								<MDL.CardMedia height="256" width="256">
									<img src="http://i.imgur.com/ZD4iVTs.jpg" width="256" height="256" border="0" alt="" />
								</MDL.CardMedia>
							</MDL.Card>
						</div>
					</MDL.Tabs>
					<MDL.PrismCode
						src={'http://fandora.github.io/mdl-react/example/codes/Cards/' + this.state.url}
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Components.MainContent>
					<p>The card component is a user interface element representing a virtual piece of paper that contains related data — such as a photo, some text, and a link — that are all about a single subject.</p>
					<p>Cards are a convenient means of coherently displaying related content that is composed of different types of objects. They are also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length. Cards have a constant width and a variable height, depending on their content.</p>
					<p>Cards are a fairly new feature in user interfaces, and allow users an access point to more complex and detailed information. Their design and use is an important factor in the overall user experience. </p>
					<p>Cards have five type sub component -- CardTitle, CardSupportingText, CardAction, CardMenu, CardMedia.</p>
				</Components.MainContent>
				<Components.Props detail={gridDetail} title="Props (Card)" />
				<Components.Props detail={gridDetail} title="Props (CardTitle)" />
				<Components.Props detail={gridSupportingDetail} title="Props (CardSupportingText)" />
				<Components.Props detail={gridActionDetail} title="Props (CardAction)" />
				<Components.Props detail={gridMenuDetail} title="Props (CardMenu)" />
				<Components.Props detail={gridMediaDetail} title="Props (CardMedia)" />
			</Components.Page>
		);
	},

});
