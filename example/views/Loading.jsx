
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.Loading
					Spinner={true}
					singleColor={false}
				/> <br />
				<MDL.Loading
					ProgressBar={true}
					indeterminate={true}
					Spinner={false}
				/>  <br />
				<MDL.Loading
					ProgressBar={true}
					indeterminate={false}
					Spinner={false}
					percentage={44}
					buffer={87}
				/>
				<MDL.Loading />
			</div>
		);
	},

});
