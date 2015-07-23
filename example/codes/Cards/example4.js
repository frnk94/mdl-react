// css style
var style = {
	margin : '24px auto',
	background: '#3E4EB8',
	color: '#ffffff',
};

var actionStyle = {
	borderColor: 'rgba(255, 255, 255, 0.2)',
};

var colorStyle = {
	color: '#ffffff',
};

// react code
<MDL.Card width='256' height='256' style={style} shadow={2}>
	<MDL.CardTitle height="203">
		<h4 style={colorStyle}>
			Featured event:<br />
			May 24, 2016<br />
			7-11pm
		</h4>
	</MDL.CardTitle>
	<MDL.CardAction border={true} style={actionStyle}>
		<MDL.Button style={colorStyle}
			type="FlatButton"
			text="Add to Calendar"
			isRipple={true}
			isPrimary={true}
			isMini={true}
			isAccent={false}
			isDisabled={false} />
	</MDL.CardAction>
</MDL.Card>