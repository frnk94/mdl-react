
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
			type : 'button',		// or 'list'
			items : [
				<a href='#cloud'>
					<i className='material-icons'>cloud</i>
				</a>,
			],
		};

		return (
			<div>
				<span>Footer2</span>
				<MDL.Footer
					isMini={true}
					leftItems={leftItems}
					rightItems={rightItems}
				>
				</MDL.Footer>
			</div>
		);
	},

});
