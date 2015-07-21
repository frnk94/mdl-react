/* Checkbox Toggle */
<MDL.Toggle
	type="checkbox"
	text="checkbox"
/>

/* Checkbox Toggle default on */
<MDL.Toggle
	type="checkbox"
	text="Checked"
	isChecked={true}
/>

/* Checkbox Toggle without ripple */
<MDL.Toggle
	type="checkbox"
	text="No Ripple"
	isRipple={false}
/>

/* Disabled Checkbox Toggle */
<MDL.Toggle
	type="checkbox"
	text="Disabled"
	isDisabled={true}
/>

/* Checkbox Toggle fire onChange event */
<MDL.Toggle
	type="checkbox"
	text="Event"
	onChange={this.onChange}
/>

function onChange(e) {
	alert('The toggle is set to ' + e.target.checked);
};
