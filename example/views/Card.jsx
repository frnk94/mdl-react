"use strict";

var React = require('react');
var MDL = require('../../components');
var DocTitle = require('../document/DocTitle.jsx');
var DocSubtitle = require('../document/DocSubtitle.jsx');

module.exports = React.createClass({

	render: function() {

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
			margin : '20px',
			width: '256px',
			height: '276px',
			background: '#46B6AC',
			color: '#ffffff',
		};

		var iconStyle = {
			color :'#ffffff',
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

		return (
			<div>
				<DocTitle title="Card" />
				<MDL.Card style={cardStyle} shadow={6}>
					<MDL.Tabs ref="tab" tabLabels={['Example 1','Example 2','Example 3','Example 4',]} isRipple={true}>
						<div>
							<div style={demoStyle}>
								<MDL.Card style={firstStyle} width='512'>
									<MDL.CardTitle height='176' style={firstTitleStyle}>
										Welcome
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<MDL.Button type="FlatButton"
											text="GET STARTED"
											isRipple={true}
											isPrimary={true}
											isMini={true}
											isAccent={false}
											isDisabled={false} />
										<br />
									</MDL.CardAction>
									<MDL.CardMenu style={firstMenuStyle}>
										<MDL.Button type="IconButton"
											text={<i style={iconStyle} className="material-icons">share</i>}
											isRipple={true}
											isMini={true}
											isPrimary={true}
											isAccent={false}
											isDisabled={false} />
										<br />
									</MDL.CardMenu>
								</MDL.Card>
							</div>
							<MDL.PrismCode
								src='http://fandora.github.io/mdl-react/example/codes/Card/example1.js'
								lang='jsx'
								style={prismCode}
							/>
						</div>
						<div>
							<div style={demoStyle}>
								<MDL.Card width='320' height='320' shadow={8} style={secondStyle}>
									<MDL.CardTitle height="199" style={secondTitleStyle}>
										Update
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<MDL.Button type="FlatButton"
											text="View Updates"
											isRipple={true}
											isPrimary={true}
											isMini={true}
											isAccent={false}
											isDisabled={false} />
									</MDL.CardAction>
								</MDL.Card>
							</div>
							<MDL.PrismCode
								src='http://fandora.github.io/mdl-react/example/codes/Card/example2.js'
								lang='jsx'
								style={prismCode}
							/>
						</div>
						<div>
							<div style={demoStyle}>
								<MDL.Card width='256' height='256' style={thirdStyle}>
									<MDL.CardTitle height='256'></MDL.CardTitle>
									<MDL.CardAction style={thirdActionStyle}>
										<span className="demo-card-image__filename">Image.jpg</span>
									</MDL.CardAction>
								</MDL.Card>
							</div>
							<MDL.PrismCode
								src='http://fandora.github.io/mdl-react/example/codes/Card.js'
								lang='jsx'
								style={prismCode}
							/>
						</div>
						<div>
							<div style={demoStyle}>
								<MDL.Card width='256' height='256' style={fourthStyle}>
									<MDL.CardTitle height="203">
										<h4 style={fourthColor}>
											Featured event:<br />
											May 24, 2016<br />
											7-11pm
										</h4>
									</MDL.CardTitle>
									<MDL.CardAction border={true} style={fourthActionStyle}>
										<MDL.Button type="FlatButton"
											style={fourthColor}
											text="Add to Calendar"
											isRipple={true}
											isPrimary={true}
											isMini={true}
											isAccent={false}
											isDisabled={false} />
									</MDL.CardAction>
								</MDL.Card>
							</div>
							<MDL.PrismCode
								src='http://fandora.github.io/mdl-react/example/codes/Card.js'
								lang='jsx'
								style={prismCode}
							/>
						</div>
						
					</MDL.Tabs>
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
