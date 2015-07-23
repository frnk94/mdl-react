
/* Primary-colored FAB button */
<MDL.Button type="FloatingActionButton" isPrimary={true}>
	<button>
		<i className="material-icons">notifications_none</i>
	</button>
</MDL.Button>

/* Accent-colored FAB button */
<MDL.Button type="FloatingActionButton" isAccent={true}>
	<button>
		<i className="material-icons">public</i>
	</button>
</MDL.Button>

/* Primary-colored FAB button without Ripple */
<MDL.Button type="FloatingActionButton" isPrimary={true} isRipple={false}>
	<button onClick={function() {this.refs.FAB.toggleButton();}.bind(this)}>
		<i className="material-icons">star</i>
	</button>
</MDL.Button>


/* FAB button */
<MDL.Button type="FloatingActionButton">
	<button>
		<i className="material-icons">notifications_none</i>
	</button>
</MDL.Button>
/* FAB button without Ripple */
<MDL.Button type="FloatingActionButton" isRipple={false}>
	<button>
		<i className="material-icons">public</i>
	</button>
</MDL.Button>

/* Disabled FAB button */
<MDL.Button type="FloatingActionButton" defaultDisabled={true} ref="FAB">
	<button>
		<i className="material-icons">star</i>
	</button>
</MDL.Button>


/* Primary-colored mini FAB button */
<MDL.Button type="FloatingActionButton" isPrimary={true} isMini={true}>
	<button>
		<i className="material-icons">notifications_none</i>
	</button>
</MDL.Button>

/* Accent-colored mini FAB button */
<MDL.Button type="FloatingActionButton" isAccent={true} isMini={true}>
	<button>
		<i className="material-icons">public</i>
	</button>
</MDL.Button>

/* Primary-colored mini FAB button without Ripple */
<MDL.Button type="FloatingActionButton" isPrimary isMini isRipple={false}>
	<button onClick={function() {this.refs.FAB.toggleButton();}.bind(this)}>
		<i className="material-icons">star</i>
	</button>
</MDL.Button>
