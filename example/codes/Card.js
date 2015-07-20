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