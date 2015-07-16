
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
					id : 1,
					song : 'Au bar',
					singer : 'Joyce Jonathan',
					country : '法國',
					link : 'https://www.youtube.com/watch?v=pX08MtExn7U',
				},
				{
					id : 2,
					song : 'Demain',
					singer : 'Berry',
					country : '法國',
					link : 'https://www.youtube.com/watch?v=9iPGvsRijrc',
				},
				{
					id : 3,
					song : 'Master of Tides',
					singer : 'Lindsey Stirling',
					country : '美國',
					link : 'https://www.youtube.com/watch?v=RrutzRWXkKs',
				},
				{
					id : 4,
					song : 'Photograph',
					singer : 'Ed Sheeran',
					country : '英國',
					link : 'https://www.youtube.com/watch?v=SPKBtZHuzKY',
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
			id : 5,
			song : 'Like A Fool',
			singer : 'Keira Knightley',
			country : '美國',
			link : 'https://www.youtube.com/watch?v=G2JQo7-F9_s',
		});
		this.setState({
			items : temp,
		});
	},

	render: function() {

		var header = [
			{
				title : '歌曲',
				key : 'song',
				style : {
					textAlign : 'left',
				}
			},
			{
				title : '歌手',
				key : 'singer',
			},
			{
				key : 'country',
			},
		];

		var itemStyles = [
			{
				textAlign : 'left',
			},
			{
				color : '#00CACA',
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
