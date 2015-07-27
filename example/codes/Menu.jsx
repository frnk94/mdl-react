/* Left aligned menu below button */
<MDL.Menu openDirection='bottom-left'>
	<MDL.Button type="IconButton">
		<button><i className="material-icons">mood</i></button>
	</MDL.Button>
	<div style={{color: 'red'}}> Another Action </div>
	<div disabled>Disabled Action</div>
</MDL.Menu>

/* Right aligned menu below button withou ripple*/
<MDL.Menu openDirection='bottom-left'>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">airplay</i>}/>
	<div onClick={onClick}> Some Action </div>
	<div style={{color: 'red'}}> Another Action </div>
	<div disabled>Disabled Action</div>
</MDL.Menu>

/* Left aligned menu on top of button */
<MDL.Menu openDirection='top-left'>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">message</i>}/>
	<div onClick={onClick}> Some Action </div>
	<div style={{color: 'red'}}> Another Action </div>
	<div disabled>Disabled Action</div>
</MDL.Menu>

/* Right aligned menu on top of button */
<MDL.Menu openDirection='top-right'>
	<MDL.Button type="IconButton"
		text={<i className="material-icons">format_list_bulleted</i>}/>
	<div onClick={onClick}> Some Action </div>
	<div style={{color: 'red'}}> Another Action </div>
	<div disabled>Disabled Action</div>
</MDL.Menu>

function onClick() {
	alert("Click");
}
