
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
 *	Button
 *		http://www.getmdl.io/components/index.html#buttons-section
 *	Props
 *		text: 字串或 element
 *		type: 'checkbox', 'radio', 'icon-toggle', 'switch'
 *		isRipple: 是否帶特效, 預設 true
 *		style: 設定 style 進去
 *	Methods
 * 		toggle
 */
module.exports = React.createClass({

	getDefaultProps: function() {
		return {

		};
	},

	propTypes: {
		text: React.PropTypes.node,
		type: React.PropTypes.string.isRequired,
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
	},

	getInitialState: function() {
		return {

		};
	},

	componentWillMount: function() {
		if (!_.includes(['checkbox', 'radio', 'icon-toggle', 'switch'], this.props.type)) {
			console.warn('MDL.Toggle: Wrong Toggle Type');
		}
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {

		var classes = {
			lable: {
				'mdl-js-ripple-effect': this.props.isRipple,
			},
			input: {},
			text: {},
		};

		classes.label['mdl-' + this.props.type] = true;
		classes.label['mdl-js-' + this.props.type] = true;
		classes.input['mdl-' + this.props.type + '__input'] = true;
		classes.text['mdl-' + this.props.type + '__label'] = true;

		return cx(classes);
	},

	toggle: function() {

	},

	render: function() {
		return (

		);
	},

});
