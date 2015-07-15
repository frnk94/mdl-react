
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<br />
				<MDL.Badge
					badge = {1}
					icon = {true}
				>
					<div>
						account_box
					</div>
				</MDL.Badge><br />

				<MDL.Badge
					badge = {10}
					icon = {true}
					noBackground = {true}
				>
					<div>
						group
					</div>
				</MDL.Badge><br />

				<MDL.Badge
					badge = '♥'
					icon = {true}
				>
					<div>
						mail
					</div>
				</MDL.Badge><br />

				<MDL.Badge
					badge = '♥'
				>
					<div>
						Wood
					</div>
				</MDL.Badge><br />

			</div>
		);
	},

});
