
"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components/');
var DocTitle = require('../document/DocTitle.jsx');
var Props = require('../document/Props.jsx');

var Icon = React.createClass({

	render: function() {
		var styles = {
			root : {
				width : '100%',
				maxWidth : '1200px',
			},
			card : {
				padding : '20px',
				width : '100%',
			},
			icon : {
				margin : '20px',
			},
		};
		return (
			<div style={styles.root}>
				<DocTitle title="Icon" />
				<MDL.Card style={styles.card} shadow={6}>
					<p>
						<MDL.Icon style={styles.icon}>build</MDL.Icon>
						<MDL.Icon style={styles.icon}>add</MDL.Icon>
						<MDL.Icon style={styles.icon}>code</MDL.Icon>
					</p>
					<Components.PrismCode
						src='example/codes/Icon.jsx'
						lang='jsx'
						style={styles.prismCode}
					/>
				</MDL.Card>
				{this._renderProps()}
			</div>
		);
	},

	_renderProps : function() {
		var propsDetail = [
			{
				key : 'children',
				type : 'string',
				state : 'required',
				content : (
					<div>
						The icon name<br/>
						<br/>
						Reference:
							<a href='https://www.google.com/design/icons/'>
								{'https://www.google.com/design/icons/'}
							</a>
					</div>
				),
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "Override the inline-styles of icon",
			},
		];
		return <Props detail={propsDetail} title="Props" />;
	},

});

module.exports = Icon;
