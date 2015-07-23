// css style
var titleStyle = {
	color: '#ffffff',
	background: 'url("http://i.imgur.com/EJFxjMX.jpg") center / cover',
};

var iconStyle = {
	color: '#ffffff',
};

// react code
<MDL.Card width='512' shadow={2}>
	<MDL.CardTitle height='176' style={titleStyle}>
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
	<MDL.CardMenu style={menuStyle}>
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