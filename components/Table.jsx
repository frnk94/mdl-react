var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Table
		http://www.getmdl.io/components/index.html#tables-section
	Props
		selectable 		設成true才會顯示選取框
		headers, array isRequired, 標題列
		headers[].title, string, 標題
		headers[].key, string isRequired, 資料key名(無 title 時取代 title 顯示)
		headers[].style, object, 樣式
		items, array isRequired, 表格內容
		items[]		存在多個 key 和 value, headers 也有的 key 才會顯示
		itemStyles, array, 列樣式
		shadow 		陰影的大小(只能填 2, 3, 4, 6, 8, 16)
		style 		css 設定
	Methods
		getSelected 	取得勾選的資料值
*/

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			shadow : 2,
		};
	},

	propTypes: {
		headers : React.PropTypes.arrayOf(React.PropTypes.shape({
			key : React.PropTypes.string.isRequired,
		})).isRequired,
		items : React.PropTypes.array.isRequired,
		itemStyles : function(props, propName, componentName) {
			if(props[propName]) {
				if(!(props[propName] instanceof Array)) {
					return new Error('itemStyles should be an array');
				}
				if(props[propName].length != props.headers.length) {
					return new Error('the length of `itemStyles` should be equal to the length of `headers`');
				}
			}
		},
		selectable : React.PropTypes.bool,
		shadow : React.PropTypes.oneOf([ 2, 3, 4, 6, 8, 16 ]),
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	componentDidUpdate: function(prevProps, prevState) {
		componentHandler.upgradeDom();
	},

	componentWillUpdate: function(nextProps, nextState) {
		this.refs.table.getDOMNode().removeAttribute('data-upgraded');
	},

	getSelected: function() {
		var result = [];
		var self = this;
		if(this.props.selectable) {
			_.forEach(this.refs.tbody.getDOMNode().childNodes, function(element, index) {
				if(element.className == 'is-selected') {
					result.push(self.props.items[index]);
				}
			});
		}
		return result;
	},

	render: function() {

		var classes = {
			'mdl-data-table' : true,
			'mdl-js-data-table' : true,
		};
		var self = this;

		classes['mdl-shadow--' + this.props.shadow + 'dp'] = true;
		if(this.props.selectable) {
			classes['mdl-data-table--selectable'] = true;
		}

		var headers = this.props.headers.map(function(element, index) {
			if(typeof element.title == 'string') {
				return (
					<th key={index} style={element.style} data-key={element.key}>{element.title}</th>
				);
			} else {
				return (
					<th key={index} style={element.style} data-key={element.key}>{element.key}</th>
				);
			}
		});

		var date = Date.now();
		var items = this.props.items.map(function(element, index) {

			var row = self.props.headers.map(function(headerElement, index) {
				if(self.props.itemStyles instanceof Array) {
					return (
						<td style={self.props.itemStyles[index]} key={index}>
							{element[headerElement.key]}
						</td>
					);
				}
				else {
					return (
						<td key={index}>{element[headerElement.key]}</td>
					);
				}
			});
			var theKey = date + '-' + index;
			return (
				<tr key={theKey}>{row}</tr>
			);

		});

		return (
			<table ref="table" className={cx(classes)} style={this.props.style}>
				<thead>
					<tr key={date}>
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
