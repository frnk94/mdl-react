
/* Colored Raised button */
<MDL.Button type="RaisedButton" isPrimary={true}>
	Primary
</MDL.Button>

/* Accent-colored Raised button */
<MDL.Button type="RaisedButton" isAccent={true}>
	<a href="/" target="_blank">Link</a>
</MDL.Button>

/* Colored Raised button without ripple */
<MDL.Button type="RaisedButton" isPrimary={true} isRipple={false}>
	<button>No Ripple</button>
</MDL.Button>


/* Raised button */
<MDL.Button type="RaisedButton">
	Default
</MDL.Button>

/* Raised button without ripple */
<MDL.Button type="RaisedButton" isRipple={false}>
	<a href="/" target="_blank">Link</a>
</MDL.Button>

/* Disabled Raised button */
<MDL.Button type="RaisedButton" ref="raised" isDisabled={this.state.raisedIsDisabled}>
		<button>Disabled</button>
</MDL.Button>
