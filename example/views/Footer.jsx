
"use strict";

var React = require('react');
var MDL = require('../../components');
var DocTitle 		= require('../document/DocTitle.jsx');

module.exports = React.createClass({

	render: function() {

		var styles = {
			root : {
				width : '100%',
				maxWidth : '1200px',
			},
			card : {
				padding : '20px',
				width : '100%',
				// backgroundColor : '#eee',
			},
		};

		var leftItems = {
			type : 'list',		// or 'buttons'
			links : [
				<a href='#help'>Help</a>,
				<a href='#help'>Help</a>,
			],
			logo : (
				<span>
					Mini footer
				</span>
			),
		};

		var rightItems = {
			type : 'button',		// or 'list'
			links : [
				<a href='#cloud'>
					<i className='material-icons'>cloud</i>
				</a>,
			],
		};

		return (
			<div style={styles.root}>
				<DocTitle title="Mini Footer" />
				<MDL.Card style={styles.card} shadow={6}>
					<MDL.Footer
						isMini={true}
						leftSection={leftItems}
						rightSection={rightItems}
					/>
				</MDL.Card>
			</div>
		);
	},

});
