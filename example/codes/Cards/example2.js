// css style
var titleStyle = {
	color: '#fff',
	background : 'url("http://i.imgur.com/L5YFTxg.png") bottom right 15% no-repeat #46B6AC',
};

// react code
<MDL.Card width='320' height='320' shadow={8}>
	<MDL.CardTitle height="199" style={titleStyle}>
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