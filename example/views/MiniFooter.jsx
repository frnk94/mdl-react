
"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components');

module.exports = React.createClass({

	render: function() {

		var styles = {
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
			<Components.Page>
				<Components.DocTitle title="Mini Footer" />
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
			</Components.Page>
		);
	},

});
