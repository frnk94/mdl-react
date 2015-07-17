
"use strict";

var fs = require('fs');
var React = require('react');
var MDL = require('../../components');
var _ = require('lodash');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			items : [
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
			],
		};
	},

	getSelected: function() {
		console.log('value', this.refs.table.getSelected());
	},

	addData: function() {
		var temp = _.clone(this.state.items, true);
		temp.push({
			title : 'new',
			region : 'new',
			value : 'new',
			id : 3,
			avc : 'new',
		});
		this.setState({
			items : temp,
		});
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

		var itemStyles = [
			{
				textAlign : 'left',
			},
			{
				color : 'blue',
			},
			{}
		];

		return (
			<div>
				<MDL.Table
					ref="table"
					selectable={true}
					headers={header}
					items={this.state.items}
					itemStyles={itemStyles}
					shadow={2}
				/>
				<button onClick={this.addData}>新增資料</button>
				<button onClick={this.getSelected}>取得選取值</button>
			</div>
		);

	}

});
