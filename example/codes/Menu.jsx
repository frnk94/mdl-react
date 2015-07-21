
var menuList = [
	{
		text: 'Some Action',
		events: {
			onClick: function(e) {
				alert("Click");
			},
		},
	},
	{
		text: 'Another Action',
		style: {color: 'red'},
	},
	{
		text: 'Disabled Action',
		isDisabled: true,
	},
];

/* Left aligned menu below button */
<MDL.Menu
	openDirection='bottom-left'
	menuList={menuList}>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">mood</i>}/>
</MDL.Menu>

/* Right aligned menu below button */
<MDL.Menu
	openDirection='bottom-right'
	menuList={menuList}>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">airplay</i>}/>
</MDL.Menu>

/* Left aligned menu on top of button */
<MDL.Menu
	openDirection='top-left'
	menuList={menuList}>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">message</i>}/>
</MDL.Menu>

/* Right aligned menu on top of button */
<MDL.Menu
	openDirection='top-right'
	menuList={menuList}>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">format_list_bulleted</i>}/>
</MDL.Menu>
