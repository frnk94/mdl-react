
/* Primary-colored Icon button */
<MDL.Button type="IconButton" isPrimary={true}>
	<button>
		<i className="material-icons">mood</i>
	</button>
</MDL.Button>

/* Accent-colored Icon button */
<MDL.Button type="IconButton" isAccent={true}>
	<button>
		<i className="material-icons">mood</i>
	</button>
</MDL.Button>

/* Primary-colored Icon button without Ripple */
<MDL.Button type="IconButton" isPrimary={true} isRipple={false}>
	<button onClick={ function() {this.refs.icon.toggleButton();}.bind(this) }>
		<i className="material-icons">mood</i>
	</button>
</MDL.Button>


/* Icon button */
<MDL.Button type="IconButton">
	<button>
		<i className="material-icons">plus_one</i>
	</button>
</MDL.Button>

/* Icon button without Ripple */
<MDL.Button type="IconButton" isRipple={false}>
	<button>
		<i className="material-icons">plus_one</i>
	</button>
</MDL.Button>

/* Disabled Icon button */
<MDL.Button type="IconButton" ref="icon" defaultDisabled={true}>
	<button>
		<i className="material-icons">plus_one</i>
	</button>
</MDL.Button>
