
"use strict";

var fs = require('fs');
var React = require('react');
var MDL = require('../../components');
var _ = require('lodash');

var Components = require('../components');


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
					_selected : true,
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
					_selected : true,
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
						<span key={key}> <span>{key}</span> : <span style={self.props.getValueStyle}> {element} </span> , </span>
					);
				});

				return (
					<div key={index}>{temp}</div>
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
			{}
		];

		var propsDetail = [
			{
				key : 'selectable',
				type : 'boolean',
				state : 'optional',
				content : 'Show select box or not',
			},
			{
				key : 'headers',
				type : 'array',
				state : 'required',
				content : 'header\'s content, is a array of objects. The column order will follow this.',
			},
			{
				key : 'headers[].key',
				type : 'string',
				state : 'required',
				content : 'The content what you want to show.',
			},
			{
				key : 'headers[].title',
				type : 'string',
				state : 'optional',
				content : 'Title name. If no this data, it will show "key".',
			},
			{
				key : 'headers[].style',
				type : 'object',
				state : 'optional',
				content : 'this header\'s css style',
			},
			{
				key : 'items',
				type : 'array',
				state : 'required',
				content : 'The content what you want to show, is a array of objects. Every object has many key and value. Every column will follow header\'s "key" to show the same key content.',
			},
			{
				key : 'items[]._selected',
				type : 'boolean',
				state : 'optional',
				content : 'If this value is true, this item will be selected at the beginning.',
			},
			{
				key : 'itemStyles',
				type : 'array',
				state : 'optional',
				content : 'Every content css style, is a array of objects and the array length need to be same with headers.',
			},
			{
				key : 'shadow',
				type : 'number',
				state : 'optional',
				content : 'Shadow size, just allow 2, 3, 4, 6, 8, 16.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'css style setting',
			},
		];

		var eventsDetail = [
			{
				key : 'getSelected',
				type : 'function',
				state : '',
				content : 'Get the data from the rows you selected.',
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

		var demoStyle = {
			padding: '24px',
		};

		return (
			<Components.Page>
				<Components.DocTitle title="Table" />
				<MDL.Card style={cardStyle} shadow={6}>
					<div style={demoStyle}>
						<Components.DocSubtitle title="example" />
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
							<MDL.Button type="RaisedButton" isAccent={true}>
								<button onClick={this.addData} className='tableTestBtn01' style={buttonStyle}>new data</button>
							</MDL.Button>
							<MDL.Button type="RaisedButton" isPrimary={true}>
								<button onClick={this.getSelected} className='tableTestBtn01' style={buttonStyle}>get value</button>
							</MDL.Button>
						</div>
					</div>
					<div className="showValueArea" style={valueStyle}>
						{this.state.checkedValue}
					</div>
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/Table.js'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Components.Props detail={propsDetail} title="Props" />
				<Components.Props detail={eventsDetail} title="Methods" />
			</Components.Page>
		);

	}

});
