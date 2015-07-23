
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
			},
			prismCode : {
				fontSize : '14px',
			},
		};
		return (
			<Components.Page>
				<Components.DocTitle title="PrismCode" />
				<MDL.Card style={styles.card} shadow={6}>
					<MDL.PrismCode
						src='example/codes/PrismCode.jsx'
						lang='jsx'
						style={styles.prismCode}
					/>
				</MDL.Card>
				<Components.MainContent>
					{"Component for highlighting code."}<br/>
					{"Note that, You should load "}
					<a href='http://prismjs.com/' target='_blank'>Prism.js</a>
					{" firstly."}
				</Components.MainContent>
				{this._renderProps()}
			</Components.Page>
		);
	},

	_renderProps : function() {
		var details = [
			{
				key : 'src',
				type : 'string',
				state : 'required',
				content : 'the url of source code that you want to display',
			},
			{
				key : 'lang',
				type : 'string',
				state : 'required',
				content : <p>
					{'The language of the source code. Language listed in '}
					<a href='http://prismjs.com/#languages-list' target='_blank'>
						{"http://prismjs.com/#languages-list"}
					</a>
				</p>,
			},
		];
		return <Components.Props detail={details} title="Props" />;
	},

});
