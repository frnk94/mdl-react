var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Table
		http://www.getmdl.io/components/index.html#tables-section
	Props
		selectable 		設成true才會顯示選取框
		header 				header 內容和 css style(必填)
		items 				表格內容(必填)
		itemStyles 		表格的 css style
	Methods
		getSelected 	取得勾選的資料值
*/

module.exports = React.createClass({

	propTypes: {
		header : React.PropTypes.array.isRequired,
		items : React.PropTypes.array.isRequired,
		itemStyles : React.PropTypes.array,
		selectable : React.PropTypes.bool,
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	getSelected: function() {
		var result = [], row;

		if(this.props.selectable) {
			_.forEach(this.refs.tbody.getDOMNode().childNodes, function(element, index) {
				row = [];
				if(element.className == 'is-selected') {
					_.forEach(element.childNodes, function(rowElement, index) {
						if(index != 0) row.push(rowElement.innerHTML);  // 不用取第 0 項的值 ( checkbox )
					});
				}
				if(row.length != 0) result.push(row);
			});
		}
		
		return result;
	},

	render: function() {

		var self = this;
		
		var classes = {
			table : {
				'mdl-data-table' : true,
				'mdl-js-data-table' : true,
				'mdl-shadow--2dp' : true,
			},
		};

		if(this.props.selectable) {
			classes.table['mdl-data-table--selectable'] = true;
		}

		var header = this.props.header.map(function(element, index) {
			return (
				<th key={index} style={element.style}>{element.title}</th>
			);
		});

		var items = this.props.items.map(function(element, index) {
			var row = element.map(function(element, index) {
				if(self.props.itemStyles != undefined) {
					return (<td style={self.props.itemStyles[index]} key={index}>{element}</td>);
				}
				else {
					return (<td key={index}>{element}</td>);
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
						{header}
					</tr>
				</thead>
				<tbody ref="tbody">
					{items}
				</tbody>
			</table>
		);
	}

});