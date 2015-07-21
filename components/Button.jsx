
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Button
		http://www.getmdl.io/components/index.html#buttons-section
	Props
		text:字串或 element
		type: 'FloatingActionButton', 'RaisedButton', 'FlatButton', 'IconButton'
		id: 作為 HTML attribute for 的綁定
		isRipple: 是否帶特效, 預設 true
		style: 設定 style 進去
		isPrimary: 是否使用 primary color
		isAccent: 是否使用強調色
		isMini: 是否 mini for FAB
		defaultDisabled: 預設是否禁愈用
	States
		isDisabled: 是否禁用Button，預設False
	Methods
		setDisabled: 設定Button啟動或禁用
		toggleButton: 啟動或禁用Button
		getDisabled: 取得Button目前狀態
*/
module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			style: {},
			isMini: false,
			isRipple: true,
			isPrimary: false,
			isAccent: false,
		};
	},

	propTypes: {
		text: React.PropTypes.node.isRequired,
		style: React.PropTypes.object,
		type: React.PropTypes.string.isRequired,
		isMini: React.PropTypes.bool,
		isRipple: React.PropTypes.bool,
		isPrimary: React.PropTypes.bool,
		isAccent: React.PropTypes.bool,
		defaultDisabled: React.PropTypes.bool,
	},

	getInitialState: function() {
		return {
			isDisabled: this.props.defaultDisabled,
		};
	},

	componentWillMount: function() {
		if (!_.includes(['FloatingActionButton', 'RaisedButton', 'FlatButton', 'IconButton'], this.props.type)) {
			console.warn('MDL.Button: Wrong Button Type');
		}
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {

		var classes = {
			'mdl-button': true,
			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.isRipple,
			'mdl-button--primary': this.props.isPrimary,
			'mdl-button--accent': this.props.isAccent,
		};

		if (this.props.type === 'FloatingActionButton') {
			classes['mdl-button--fab'] = true;
			classes['mdl-button--mini-fab'] = this.props.isMini;
		} else if (this.props.type === 'RaisedButton') {
			classes['mdl-button--raised'] = true;
		} else if (this.props.type === 'IconButton') {
			classes['mdl-button--icon'] = true;
		}

		return cx(classes);
	},


	_getEventProps: function() {
		var events = {};
		for(var key in this.props) {
			if(key.match(/^on/)) {
					events[key] = this.props[key];
			}
		}
		return events;
	},

	getDisabled: function() {
		return this.state.isDisabled;
	},

	setDisabled: function(isDisabled) {
		this.setState({isDisabled: Boolean(isDisabled)});
		return this.state.isDisabled;
	},

	toggleButton: function() {
		this.setDisabled(!this.state.isDisabled);
		return this.state.isDisabled;
	},

	render: function() {
		var eventHandlers = this._getEventProps();
		return (
			<button {...eventHandlers}
				id={this.props.id}
				className={this._getClasses()}
				disabled={this.state.isDisabled}
				style={this.props.style}
			>
				{this.props.text}
			</button>
		);
	},

});
