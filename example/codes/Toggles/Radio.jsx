/* Radio Toggle */
<MDL.Toggle
	type="radio"
	text="Option1"
	name="option"
	value="1"
/>

/* Radio Toggle default on */
<MDL.Toggle
	type="radio"
	text="Option2"
	name="option"
	value="2"
	isChecked={true}
/>

/* Radio Toggle without ripple */
<MDL.Toggle
	type="radio"
	text="Option3"
	name="option"
	value="3"
	isRipple={false}
/>

/* Disabled Radio Toggle */
<MDL.Toggle
	type="radio"
	text="Option4"
	name="option"
	value="4"
	isDisabled={true}
/>

/* Radio Toggle fire onChange event */
<MDL.Toggle
	type="radio"
	text="Option5"
	name="option"
	value="5"
	onChange={this.radioChanged}
/>

function radioChanged(e) {
	alert(e.target.name + ' is set to ' + e.target.value);
};
