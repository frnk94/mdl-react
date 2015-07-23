
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');


/**
 *	Toggle
 *		http://www.getmdl.io/components/index.html#toggles-section
 *	Props
 *		text: 字串, element 或 icon
 *		type: 'checkbox', 'radio', 'icon-toggle', 'switch'
 *		name: html element, mainly for the binding of Radio Buttons
 *		value: html element, the value of the input
 *		isRipple: 是否帶特效, 預設 true
 *		isDisabled: 是否禁用Toggle
 *		isChecked: 預設勾選
 *		style: Toggle CSS 樣式
 *		onChange: onchange event
 *	Methods
 *		toggle: toggle checkbox
 *		setChecked: set checkbox checked or unchecked
 *		getChecked: whether the checkbox is checked
 */

var id = 1;

module.exports = React.createClass({displayName: "exports",

	getDefaultProps: function() {
		return {
			text: '',
			isRipple: true,
			style: {},
			isChecked: false,
			isDisabled: false,
		};
	},

	propTypes: {
		text: React.PropTypes.node,
		type: React.PropTypes.oneOf(['checkbox', 'radio', 'icon-toggle', 'switch']).isRequired,
		name: React.PropTypes.string,
		value: React.PropTypes.string,
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
		isChecked: React.PropTypes.bool,
		onChange:  React.PropTypes.func,
		isDisabled: React.PropTypes.bool,
	},

	id: 'mdl-toggle-',

	componentWillMount: function() {

		if (this.props.type == "radio") {
			if(!this.props.name) console.warn('MDL.Toggle: Radio button needs props name');
			if(!this.props.value) console.warn('MDL.Toggle: Radio button needs props value');
		}

		this.id += id++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	toggle: function() {
		return this.setChecked(!React.findDOMNode(this.refs.input).checked);
	},

	setChecked: function(isChecked) {
			var input = React.findDOMNode(this.refs.input);
			if(input.checked == isChecked) return;
			input.checked = isChecked;

			isChecked?
				React.findDOMNode(this.refs.label).className += ' is-checked':
				React.findDOMNode(this.refs.label).className = React.findDOMNode(this.refs.label).className.replace(' is-checked','');
			return input.checked;
	},

	getChecked: function() {
		return React.findDOMNode(this.refs.input).checked;
	},

	_getClasses: function() {
		var classes = {
			label: {
				'mdl-js-ripple-effect': this.props.isRipple,
			},
			input: {},
			text: {},
		};
		classes.label['mdl-' + this.props.type] = true;
		classes.label['mdl-js-' + this.props.type] = true;
		classes.input['mdl-' + this.props.type + '__input'] = true;
		classes.text['mdl-' + this.props.type + '__label'] = true;

		return classes;
	},

	render: function() {

		var classes = this._getClasses();
		var text = this.props.type == 'icon-toggle'?
			(React.createElement("i", {className: "mdl-icon-toggle__label material-icons"}, this.props.text)) :
			(React.createElement("span", {className: cx(classes.text)}, this.props.text));

		var input = this.props.type == 'radio'?
			(
				React.createElement("input", {ref: "input", 
					type: "radio", 
					id: this.id, 
					className: "mdl-radio__button", 
					name: this.props.name, 
					value: this.props.value, 
					defaultChecked: this.props.isChecked, 
					disabled: this.props.isDisabled, 
					onChange: this.props.onChange})
			):
			(
				React.createElement("input", {ref: "input", 
					type: "checkbox", 
					id: this.id, 
					className: cx(classes.input), 
					defaultChecked: this.props.isChecked, 
					disabled: this.props.isDisabled, 
					onChange: this.props.onChange})
			);

		return (
			React.createElement("label", {ref: "label", style: this.props.style, className: cx(classes.label), htmlFor: this.id}, 
			  input, 
			  text
			)
		);
	},

});
