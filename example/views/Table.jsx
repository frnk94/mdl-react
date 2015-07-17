
"use strict";

var fs = require('fs');
var React = require('react');
var MDL = require('../../components');
var _ = require('lodash');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			getValueStyle : {
				color : '#ffffff',
			},
		};
	},

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
			valueArea : 'none',
		};
	},

	getSelected: function() {
		var self = this;
		if(this.refs.table.getSelected().length == 0) {
			alert('您沒有勾選任何欄位！');
		}
		else {
			var result = this.refs.table.getSelected().map(function(item, index) {
				var temp = _.map(item, function(element, key) {
					return (
						<span> <span>{key}</span> : <span style={self.props.getValueStyle}> {element} </span> , </span>
					);
				});

				return (
					<div>{temp}</div>
				);
			});
			this.setState({
				valueArea : 'block',
				checkedValue : result,
			});
		}
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
				key : 'selectable',
				type : 'boolean',
				state : 'optional',
				content : '是否要顯示勾選欄位',
			},
			{
				key : 'headers',
				type : 'array',
				state : 'required',
				content : '標題列的內容，形式為物件陣列，顯示項目排序也會根據此陣列。可填入的參數為下列三項',
			},
			{
				key : 'headers[].key',
				type : 'string',
				state : 'required',
				content : '想要顯示的內容。',
			},
			{
				key : 'headers[].title',
				type : 'string',
				state : 'optional',
				content : '顯示的標題名稱，若無此參數則顯示 key',
			},
			{
				key : 'headers[].style',
				type : 'object',
				state : 'optional',
				content : '此標頭的 css style 客製設定',
			},
			{
				key : 'items',
				type : 'array',
				state : 'required',
				content : '要顯示的內容，形式為物件陣列，每個物件可以有多個 key 和對應的 value，根據 headers 的 key 決定每行欲顯示的內容',
			},
			{
				key : 'itemStyles',
				type : 'array',
				state : 'optional',
				content : '每列內容的 css 客製樣式，為陣列物件，陣列長度需與 headers 相同',
			},
			{
				key : 'shadow',
				type : 'number',
				state : 'optional',
				content : '陰影的大小，預設是 2 ，能填的數字只有 2, 3, 4, 6, 8, 16',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'css 客製樣式',
			},
		];

		var eventsDetail = [
			{
				key : 'getSelected',
				type : 'function',
				state : '',
				content : '取得勾選的資料值',
			}
		];

		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var tableStyle = {
			margin : '24px auto',
		};

		var buttonStyle = {
			width : '100px',
			margin : '0px 10px',
		};

		var buttonAreaStyle = {
			width : '240px',
			margin : '24px auto',
			marginTop : '0px',
		};

		var valueStyle = {
			backgroundColor : '#00BCD4',
			padding : '20px',
			color : '#ddd',
			marginBottom : '-7px',
			display : this.state.valueArea,
		};

		var style = {
			width : '100%',
			maxWidth : '1200px',
		};

		return (
			<div style={style}>
				<MDL.Card style={cardStyle} shadow={6}>
					<MDL.Table
						ref="table"
						selectable={true}
						headers={header}
						items={this.state.items}
						itemStyles={itemStyles}
						style={tableStyle}
						shadow={2}
					/>
					<div style={buttonAreaStyle}>
						<MDL.Button type="RaisedButton"
						text="新增資料"
						style={buttonStyle}
						isRipple={true}
						isAccent={true}
						isMini={true}
						isDisabled={false}
						onClick={this.addData} />
						<MDL.Button type="RaisedButton"
							text="取得勾選值"
							style={buttonStyle}
							isRipple={true}
							isPrimary={true}
							isMini={true}
							isDisabled={false}
							onClick={this.getSelected} />
					</div>
					<div style={valueStyle}>
						{this.state.checkedValue}
					</div>
					<MDL.PrismCode
						src='../codes/Table.js'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
				<Props detail={eventsDetail} title="Methods" />
			</div>
		);

	}

});
