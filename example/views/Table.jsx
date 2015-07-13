
"use strict";

var fs = require('fs');
var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	getSelected: function() {
		console.log('value', this.refs.table.getSelected());
	},

	render: function() {

		var header = [
			{
				title : '標題一',
				style : {
					textAlign : 'left',
				}
			},
			'標題二',
			{
				title : '標題三',
				style : {
					color : 'red',
				},
			},
		];

		var items = [
			['Acrylic (Transparent)', '25', '$2.90'],
			['Plywood (Birch)', '50', '$1.25'],
			['Laminate', '10', '$2.35'],
		];

		var itemStyles = [
			{
				textAlign : 'left',
			},
			{
				color : 'blue',
			},
			{},
		];

		return (
			<div>
				<MDL.Table
					ref="table"
					selectable={true}
					headers={header}
					items={items}
					itemStyles={itemStyles}
				/>
				<button onClick={this.getSelected}>取得選取值</button>
			</div>
		);
		
	}

});
