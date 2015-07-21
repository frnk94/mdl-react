/* Swith Toggle */
<MDL.Toggle
	type="switch"
	text="switch"
/>

/* Swith Toggle default on */
<MDL.Toggle
	type="switch"
	text="switch on"
	isChecked={true}
/>

/* Swith Toggle without ripple */
<MDL.Toggle
	type="switch"
	text="No Ripple"
	isRipple={false}
/>

/* Disabled Swith Toggle */
<MDL.Toggle
	type="switch"
	text="Disabled"
	isDisabled={true}
/>

/* Swith Toggle fire onChange event */
<MDL.Toggle
	type="switch"
	text="Event"
	onChange={this.onChange}
/>

function onChange(e) {
	alert('The toggle is set to ' + e.target.checked);
};
