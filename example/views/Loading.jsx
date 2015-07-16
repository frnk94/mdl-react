
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.Loading
					type="Spinner"
					singleColor={false}
				/> <br />
				<MDL.Loading
					type="ProgressBar"
					indeterminate={true}
				/>  <br />
				<MDL.Loading
					type="ProgressBar"
					indeterminate={false}
					percentage={44}
					buffer={87}
				/>
				<MDL.Loading />
			</div>
		);
	},

});
