"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components/');

var Icon = React.createClass({

	render: function() {
		var styles = {
			card : {
				padding : '20px',
				width : '100%',
			},
			icon : {
				margin : '20px',
			},
		};
		return (
			<Components.Page>
				<Components.DocTitle title="Icon" />
				<MDL.Card style={styles.card} shadow={6}>
					<Components.DocSubtitle title="example" />
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
			</Components.Page>
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
						Icon names are listed at
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
		return <Components.Props detail={propsDetail} title="Props" />;
	},

});

module.exports = Icon;
