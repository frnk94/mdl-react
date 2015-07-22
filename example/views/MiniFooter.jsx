
"use strict";

var React = require('react');
var MDL = require('../../components');
var DocTitle = require('../document/DocTitle.jsx');

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
			prismCode : {
				fontSize : '14px',
			},
		};

		var leftSection = {
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

		var rightSection = {
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
					<MDL.MiniFooter
						leftSection={leftSection}
						rightSection={rightSection}
					/>
					<MDL.PrismCode
						src='example/codes/MiniFooter.jsx'
						lang='jsx'
						style={styles.prismCode}
					/>
				</MDL.Card>
			</div>
		);
	},

});
