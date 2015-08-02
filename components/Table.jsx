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
		items[]._selected		設成 true 的話則此選項則會勾選
		itemStyles, array, 列樣式
		shadow 		陰影的大小(只能填 2, 3, 4, 6, 8, 16)
		style 		css 設定
		onRowSelected 		監聽點選動作，回傳所有選取值
	Methods
		getSelected 		取得勾選的資料值
		getSelectedIndexes	取得勾選的索引值
*/

var Table = React.createClass({

	displayName : 'MDL:Table',

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
		onRowSelected : React.PropTypes.func,
	},

	getSelected : function() {
		return _.map(this._selectedIndexes, function(i) {
			return this.props.items[i];
		}, this);
	},

	getSelectedIndexes : function() {
		return this._selectedIndexes;
	},

	forceRender : function() {
		this._selectedIndexes = this._getSelectedByProp(this.props);
		this.setState({
			counter : ++this.state.counter,
		});
	},

	getInitialState: function() {
		var tmp = _.map(this.props.items, function(item, index) {
			if(item._selected) return index;
		});
		this._selectedIndexes = this._getSelectedByProp(this.props);
		this._defaultSelectedIndexes = this._getSelectedByProp(this.props);
		return {
			counter : 0,
			itemsLength : this.props.items.length,
			headersLength : this.props.headers.length,
		};
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
		this._refreshSelected();
		this._bindOnSelected();
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.debug('Table.componentDidUpdate');
		componentHandler.upgradeDom();
		this._unbindOnSelected();
		this._refreshSelected();
		this._bindOnSelected();
	},

	componentWillReceiveProps: function(nextProps) {
		if(
			this.state.itemsLength != nextProps.items.length ||
			this.state.headersLength != nextProps.headers.length ||
			this.props.selectable != nextProps.selectable
		) {
			console.debug('mdl table structure changed');
			this.setState({
				counter : ++this.state.counter,
				itemsLength : nextProps.items.length,
				headersLength : nextProps.headers.length,
			});
		}
		if(
			!(_.isEqual(
				this._getSelectedByProp(nextProps),
				this._defaultSelectedIndexes
			))
		) {
			console.debug('items[]._selected changed, so we use new one');
			this._selectedIndexes = this._getSelectedByProp(nextProps);
			this._defaultSelectedIndexes = this._getSelectedByProp(nextProps);
		}
	},

	_bindOnSelected: function() {
		var checkobxs = this._getNodeByClassName("mdl-checkbox__input");
		_.forEach(checkobxs, function(element, index) {
			element.onchange = this._onCheckboxChange;
		}, this);
	},

	_onCheckboxChange : function(event) {
		this._selectedIndexes = this._getSelectedByDom();
		if(this.props.onRowSelected instanceof Function) {
			this.props.onRowSelected(
				this.getSelected(),
				this._selectedIndexes
			);
		}
	},

	_unbindOnSelected: function() {
		_.forEach(this._getNodeByClassName("mdl-checkbox__input"), function(element, index) {
			element.onchange = null;
		});
	},

	_getNodeByClassName : function(cname) {
		return React.findDOMNode(this).getElementsByClassName(cname);
	},

	_refreshSelected : function() {
		var checkboxs = this._getNodeByClassName("mdl-checkbox__input");
		if(checkboxs.length == 0) return;
		var trs = this.refs.tbody.getDOMNode().childNodes;
		_.forEach(trs, function(tr, index) {
			var isTrChecked = tr.classList.contains('is-selected');
			var isInSelectdIndexes = _.include(this._selectedIndexes, index);
			if(isTrChecked != isInSelectdIndexes) {
				checkboxs[index + 1].click();
			}
		}, this);
	},

	_getSelectedByProp : function(prop) {
		var tmp = _.map(prop.items, function(item, index) {
			if(item._selected) return index;
		});
		return _.filter(tmp, function(i) {
			return i >= 0;
		});
	},

	_getSelectedByDom : function() {
		if(this.props.selectable) {
			var trNodes = this.refs.tbody.getDOMNode().childNodes;
			var selectedItems = _.map(trNodes, function(element, index) {
				if(element.classList.contains('is-selected')) {
					return index;
				}
			}, this);
			return _.filter(selectedItems, function(i) {
				return i >= 0;
			});
		} else {
			return [];
		}
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
			return (
				<tr key={index} data-key={index}>{row}</tr>
			);
		});

		return (
			<table ref="table"
				key={this.state.counter}
				className={cx(classes)}
				style={this.props.style}
			>
				<TableHead headers={this.props.headers} />
				<tbody ref="tbody">
					{items}
				</tbody>
			</table>
		);

	}

});


var TableHead = React.createClass({
	render: function() {
		var headers = this.props.headers.map(function(element, index) {
			if(typeof element.title == 'string') {
				return (
					<th key={index}
						style={element.style}
					>
						{element.title}
					</th>
				);
			} else {
				return (
					<th key={index}
						style={element.style}
					>
						{element.key}
					</th>
				);
			}
		});
		return (
			<thead>
				<tr>{headers}</tr>
			</thead>
		);
	}
});

module.exports = Table;
