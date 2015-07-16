
"use strict";

var React = require('react');
var MDL = require('../../components/');

module.exports = React.createClass({

	render : function() {
		return (
			<div>
				<br />
				<MDL.Badge
					badge = {1}
					materialDesignIcon = {true}
				>
					<div>account_box</div>
				</MDL.Badge><br />

				<MDL.Badge
					badge = {10}
					materialDesignIcon = {true}
					noBackground = {true}
				>
					<div>
						group
					</div>
				</MDL.Badge><br />

				<MDL.Badge
					badge = '♥'
					materialDesignIcon = {true}
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
