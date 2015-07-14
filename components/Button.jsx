
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Button
		http://www.getmdl.io/components/index.html#buttons-section
	Props
		text: 字串或 element
		type: 'FloatingActionButton', 'RaisedButton', 'FlatButton', 'IconButton'
		isRipple: 是否帶特效, 預設 true
		style: 設定 style 進去
		isPrimary: 是否使用 primary color
		isAccent: 是否使用強調色
		isMini: 是否 mini for FAB
	States
		isDisabled: 是否禁用Button，預設False
	Methods
		toggleButton: 啟動或禁用Button
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
		isDisabled: React.PropTypes.bool,
	},

	getInitialState: function() {
		return {
			isDisabled: false,
		};
	},

	componentWillMount: function() {
		if (this.props.type !== 'FloatingActionButton' &&
			this.props.type !== 'RaisedButton' &&
			this.props.type !== 'FlatButton' &&
			this.props.type !== 'IconButton')
				console.log('Wrong Button Type');
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {

		var classes = {
			'mdl-button': true,
			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.isRipple,
			'mdl-button--colored': this.props.isPrimary,
			'mdl-button--accent': this.props.isAccent,
		};

		if (this.props.type === 'FloatingActionButton') {
			classes['mdl-button--fab'] = true;
			classes['mdl-button--mini-fab']= this.props.isMini;
		} else if (this.props.type === 'RaisedButton') {
			classes['mdl-button--raised'] = true;
		} else if (this.props.type === 'IconButton') {
			classes['mdl-button--icon'] = true;
		}

		return cx(classes);
	},

	_getUnusedProps: function() {
		var obj = _.clone(this.props, true);
		var props = ['text', 'style', 'type', 'isMini', 'isRipple', 'isPrimary', 'isAccent'];

		props.forEach(function(property) {
			if(obj.hasOwnProperty(property)) delete obj[property];
		});
		return obj;
	},

	toggleButton: function() {
		this.setState({isDisabled: !this.state.isDisabled});
	},

	render: function() {
		var props = this._getUnusedProps();
		return (
			<button {...props} className={this._getClasses()} disabled={this.state.isDisabled} style={this.props.style}>
				{this.props.text}
			</button>
		);
	},

});
