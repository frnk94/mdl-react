
"use strict";

var fs = require('fs');
var React = require('react');
var MDL = require('../../components');
var _ = require('lodash');
var Props = require('../document/Props.jsx');

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
			{},
		];

		var propsDetail = [
			{
				key : 'items',
				type : 'array',
				state : 'required',
				content : 'The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.',
			},
			{
				key : 'items',
				type : 'array',
				state : 'required',
				content : 'The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.',
			},
			{
				key : 'items',
				type : 'array',
				state : 'required',
				content : 'The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.',
			},
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

				<MDL.Button type="RaisedButton"
					text="新增資料"
					isRipple={true}
					isPrimary={true}
					isMini={true}
					isDisabled={false}
					onClick={this.addData} />
				<MDL.Button type="RaisedButton"
					text="取得選取值"
					isRipple={true}
					isPrimary={true}
					isMini={true}
					isDisabled={false}
					onClick={this.getSelected} />

				<Props detail={propsDetail} />
			</div>
		);

	}

});
