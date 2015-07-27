
"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components/');

module.exports = React.createClass({

	render: function() {
		var propsDetail = [
			{
				key : 'children',
				type : 'element',
				state : 'required',
				content : 'The picture or text that trigger the tooltip.',
			},
			{
				key : 'text',
				type : 'String',
				state : 'optional',
				content : 'The text in tooltip.',
			},
			{
				key : 'large',
				type : 'boolean',
				state : 'optional',
				content : 'Applies large font effect.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'CSS style setting.',
			},
		];

		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var tooltipStyle = {
			margin : '24px auto',
		};

		var demoStyle = {
			padding : '36px',
		};

		return (
			<Components.Page>
				<MDL.Card style={cardStyle} shadow={6}>
					<div style = {demoStyle}>
						<MDL.Tooltip
							text = 'Follow'
							large = {true}
							style = {tooltipStyle}
						>
							<i className="material-icons">add</i>
						</MDL.Tooltip> <br />
						<MDL.Tooltip
							text = 'this is a bird.'
							large = {false}
							style = {tooltipStyle}
						>
							<span>Please move your mouse on it.</span>
						</MDL.Tooltip>
					</div>
					<MDL.PrismCode
						src='example/codes/Tooltip.jsx'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Components.Props detail={propsDetail} title="Props" />
			</Components.Page>
		);
	},

});
