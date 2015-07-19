
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.Footer isMega={false} miniHorizontal={'left'} >
					<h6>123</h6>
					<ul>
						<li>Eddard</li>
						<li>Catelyn</li>
						<li>Robb</li>
						<li>Sansa</li>
						<li>Brandon</li>
						<li>Arya</li>
						<li>Rickon</li>
					</ul>
				</MDL.Footer>
			</div>
		);
	},

});
