var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Table
		http://www.getmdl.io/components/index.html#tables-section
	Props
		selectable 		設成true才會顯示選取框
		headers, array isRequired, 標題列
		headers[], string, 標題
		headers[].title, string, 標題
		headers[].style, object, 樣式
		items, array isRequired, 表格內容
		items[]
		itemStyles, array, 列樣式
	Methods
		getSelected 	取得勾選的資料值
*/

module.exports = React.createClass({

	propTypes: {
		headers : React.PropTypes.array.isRequired,
		items : React.PropTypes.array.isRequired,
		itemStyles : React.PropTypes.array, // check whether length of itemStyles equal to items
		selectable : React.PropTypes.bool,
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_checkProps : function() {

		var self = this;

		// 檢查 headers
		this.props.headers.forEach(function(header) {
			if(
				typeof header == 'object' &&
				!header.title
			) {
				console.warn(
					'MDL.Table: 如果 `headers` 的元素為物件, 那一定要有 title 屬性'
				);
			}
		});

		// 檢查 items 和 headers 的長度是否一致
		// 檢查 items 是 array of array
		this.props.items.forEach(function(item) {
			if(!(item instanceof Array)) {
				console.warn(
					'MDL.Table: `items` should be an array of array'
				);
			} else if(item.length != self.props.headers.length){
				console.warn(
					'MDL.Table: the length of `item` should be equal to the length of `headers`'
				);
			}
		});

		// 檢查 headers 和 itemStyles 的長度是否一致
		if(
			this.props.itemStyles instanceof Array &&
			this.props.headers.length != this.props.itemStyles.length
		) {
			console.warn(
				'MDL.Table: the length of `itemStyles` should be equal to the length of `headers`'
			);
		}

	},

	getSelected: function() {

		var result = [];

		if(this.props.selectable) {
			_.forEach(this.refs.tbody.getDOMNode().childNodes, function(element, index) {
				var row = []; //Weird Data Type
				if(element.className == 'is-selected') {
					_.forEach(element.childNodes, function(rowElement, index) {
						if(index != 0) {
							// 不用取第 0 項的值 ( checkbox )
							row.push(rowElement.innerHTML);
						}
					});
				}
				if(row.length != 0) {
					result.push(row);
				}
			});
		}

		return result;

	},

	render: function() {

		var classes = {
			table : {
				'mdl-data-table' : true,
				'mdl-js-data-table' : true,
				'mdl-shadow--2dp' : true, //Why add it here????
			},
		};
		var self = this;

		this._checkProps();

		if(this.props.selectable) {
			classes.table['mdl-data-table--selectable'] = true;
		}

		var headers = this.props.headers.map(function(element, index) {
			if(typeof element == 'string') {
				return (
					<th key={index}>{element}</th>
				);
			} else {
				return (
					<th key={index} style={element.style}>{element.title}</th>
				);
			}
		});

		var items = this.props.items.map(function(element, index) {

			var row = element.map(function(element, index) {
				if(self.props.itemStyles instanceof Array) {
					return (
						<td style={self.props.itemStyles[index]} key={index}>
							{element}
						</td>
					);
				}
				else {
					return (
						<td key={index}>{element}</td>
					);
				}
			});

			return (
				<tr key={index}>{row}</tr>
			);

		});

		return (
			<table className={cx(classes.table)}>
				<thead>
					<tr>
						{headers}
					</tr>
				</thead>
				<tbody ref="tbody">
					{items}
				</tbody>
			</table>
		);

	}

});
