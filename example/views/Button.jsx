
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	click: function() {
		//console.log('click!');
		console.log(this.refs.FAB.toggleButton());

	},

	render: function() {

		return (
			<div>
				<MDL.Button ref="FAB" type="FloatingActionButton"
					text="T"
					isRipple={true}
					isPrimary={true}
					isMini={true}
					isDisabled={false}/>
				<br />

				<MDL.Button type="RaisedButton"
					text="T"
					isRipple={true}
					isPrimary={true}
					isMini={true}
					isDisabled={false}
					onClick={this.click} />
				<br />

				<MDL.Button type="FlatButton"
					text="Button"
					isRipple={true}
					isPrimary={true}
					isMini={true}
					isAccent={false}
					isDisabled={false} />
				<br />

				<MDL.Button type="IconButton"
					text={<i className="material-icons">mood</i>}
					isRipple={true}
					isMini={true}
					isPrimary={true}
					isAccent={false}
					isDisabled={false}/>
				<br />

			</div>
		);
	},

});
