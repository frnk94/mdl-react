// Example 1
<MDL.Card style={firstStyle} width='512'>
	<MDL.CardTitle height='176'>
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
	<MDL.CardMenu>
		<MDL.Button type="IconButton"
			text={<i className="material-icons">share</i>}
			isRipple={true}
			isMini={true}
			isPrimary={true}
			isAccent={false}
			isDisabled={false} />
		<br />
	</MDL.CardMenu>
</MDL.Card>

// Example 2
<MDL.Card width='320' height='320' shadow={8}>
	<MDL.CardTitle height="199">
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

// Example 3
<MDL.Card width='256' height='256'>
	<MDL.CardTitle height='256'></MDL.CardTitle>
	<MDL.CardAction>
		<span className="demo-card-image__filename">Image.jpg</span>
	</MDL.CardAction>
</MDL.Card>

// Example 4
<MDL.Card width='256' height='256'>
	<MDL.CardTitle height="203">
		<h4>
			Featured event:<br />
			May 24, 2016<br />
			7-11pm
		</h4>
	</MDL.CardTitle>
	<MDL.CardAction border={true}>
		<MDL.Button type="FlatButton"
			text="Add to Calendar"
			isRipple={true}
			isPrimary={true}
			isMini={true}
			isAccent={false}
			isDisabled={false} />
	</MDL.CardAction>
</MDL.Card>

// Example 5
<MDL.Card>
	<MDL.CardTitle height="20">
		<h6>media</h6>
	</MDL.CardTitle>
	<MDL.CardMedia height="256" width="256">
		<img src="http://i.imgur.com/ZD4iVTs.jpg" width="256" height="256" border="0" alt="" />
	</MDL.CardMedia>
</MDL.Card>