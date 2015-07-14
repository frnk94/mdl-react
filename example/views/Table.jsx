
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
				key : 'title',
				style : {
					textAlign : 'left',
				}
			},
			{
				title : '標題一',
				key : 'region',
			},
			{
				key : 'value',
			},
		];

		var items = [
			{
				title : 'Acrylic',
				region : 'TW',
				value : '1',
				id : 1,
				avc : 'aaa',
			},
			{
				title : 'title2',
				region : 'TW2',
				value : '2',
				id : 2,
				avc : 'bbb',
			},
			{
				title : 'title3',
				region : 'TW3',
				value : '3',
				id : 3,
				avc : 'ccc',
			},
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
