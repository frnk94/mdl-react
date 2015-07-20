
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {

		};
	},

	render: function() {

		var leftItems = {
			type : 'list',		// or 'buttons'
			items : [
				<a href='#help'>Help</a>,
				<a href='#help'>Help</a>,
			],
			logo : (
				<span>
					Mini-footer <span style={{color:'red'}}>Heading</span>
				</span>
			),
		};

		var rightItems = {
			type : 'buttons',		// or 'buttons'
			items : [
				<a href='#cloud'>
					<i className='material-icons'>cloud</i>
				</a>,
			],
		};

		return (
			<div>
				<MDL.Footer2
					isMini={true}
					rightItems={rightItems}
					leftItems={leftItems}
				>
				</MDL.Footer2>
			</div>
		);
	},

});
