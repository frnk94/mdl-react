/* Icon Toggle */
<MDL.Toggle
	type="icon-toggle"
	text="bluetooth_audio"
/>

/* Icon Toggle default on */
<MDL.Toggle
	type="icon-toggle"
	text="star"
	isChecked={true}
/>

/* Icon Toggle without ripple*/
<MDL.Toggle
	type="icon-toggle"
	text="radio_button_checked"
	isRipple={false}
/>

/* Disabled Icon Toggle */
<MDL.Toggle
	type="icon-toggle"
	text="notifications"
	isDisabled={true}
/>

/* Icon Toggle fire onChange event */
<MDL.Toggle
	type="icon-toggle"
	text="cake"
	style={this.styles.toggle}
	onChange={this.onChange}
/>

function onChange(e) {
	alert('The toggle is set to ' + e.target.checked);
};
