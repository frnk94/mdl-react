var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Tooltips
		http://www.getmdl.io/components/index.html#tooltips-section
	Props
		large,		是否要選擇 mdl-tool--large
		url,			圖片來源
		text,			tooltips要顯示的文字
		width,		圖片寬度
		height,		圖片高度
	Methods
*/

var id = 1;
module.exports = React.createClass({

	propTypes: {
		element: React.PropTypes.node.isRequired,
		large: React.PropTypes.bool,
		url: React.PropTypes.string,
		text: React.PropTypes.string,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		style: React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			element: 'text',
			text: 'Tooltip text',
			large: false,
			width: 10,
			height: 20,
			style: {},
		};
	},

getInitialState: function() {
	return {
	};
},
	componentWillMount: function() {
		this.state.id = 'mdl-tooltip-' + id++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	render: function() {
		var classes = {
			'mdl-tooltip' : true,
		};

		if(this.props.large) {
			classes['mdl-tooltip--large'] = true;
		}

		return (
			<div>
				<p id={this.state.id} style={this.props.style}>
					{this.props.element}
				</p>
				<div className={cx(classes)} htmlFor={this.state.id} > 
					<img src={this.props.url} width={this.props.width} height={this.props.height} />
					{this.props.text}
				</div>
			</div>
		);
	}

});