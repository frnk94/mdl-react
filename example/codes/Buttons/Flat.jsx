
/* Primary-colored flat button */
<MDL.Button type="FlatButton" isPrimary={true}>
	Primary
</MDL.Button>

/* Accent-colored flat button */
<MDL.Button type="FlatButton" isAccent={true}>
	<a href="/" target="_blank">Link</a>
</MDL.Button>

/* Primary-colored flat button without ripple */
<MDL.Button type="FlatButton" isPrimary={true} isRipple={false}>
	<button>No Ripple</button>
</MDL.Button>


/* Flat button */
<MDL.Button type="FlatButton">
	Default
</MDL.Button>

/* Flat button without ripple */
<MDL.Button type="FlatButton" isRipple={false}>
	<a href="/" target="_blank" >Link</a>
</MDL.Button>

/* Disabled Flat button */
<MDL.Button type="FlatButton" ref="flat" isDisabled={this.state.flatIsDisabled}>
		<button>Disabled</button>
</MDL.Button>
