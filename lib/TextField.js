
"use strict";

var React = require('react');
var cx = require('classnames');

/**
	TextField
		http://www.getmdl.io/components/index.html#textfields-section
	Props
		labelText
		errorText
		defaultValue
		isFloatingLabel
		pattern			正規表示式
		isMultiline
		style
	Methods
		getValue
		setValue
*/

var _counter = 1;

module.exports = React.createClass({

	displayName : 'MDL:TextField',

	propTypes: {
		labelText : React.PropTypes.string,
		isFloatingLabel : React.PropTypes.bool,
		errorText : React.PropTypes.string,
		pattern : React.PropTypes.string,
		defaultValue : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number,
		]),
		onChange : React.PropTypes.func,
		isMultiline : React.PropTypes.bool,
		rows : React.PropTypes.number,
		style : React.PropTypes.object,
	},


	getValue : function() {
		return this.state.value;
	},

	setValue : function(value) {
		if(
			this.refs.input.getDOMNode().value == '' &&
			value != ''
		) {
			this.setState({
				value : value,
				changeCounter : ++this.state.changeCounter,
			});
		}
		else {
			this.setState({
				value : value,
			});
		}
	},

	getInitialState: function() {
		return {
			value : this.props.defaultValue,
			changeCounter : 0,
		};
	},

	getDefaultProps: function() {
		return {
			rows : 3,
		};
	},

	componentWillMount: function() {
		if(this.props.defaultValue) {
			this.state.value = this.props.defaultValue;
		}
		this.state.id = 'mdl-textfield-' + _counter++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	componentDidUpdate: function(prevProps, prevState) {
		componentHandler.upgradeDom();
	},

	componentWillReceiveProps: function(nextProps) {
		if(
			nextProps.defaultValue &&
			this.props.defaultValue != nextProps.defaultValue
		) {
			this.setValue(nextProps.defaultValue);
		}
	},

	_onChange : function(event) {
		this.setState({
			value : event.target.value,
		}, function() {
			if(this.props.onChange instanceof Function) {
				this.props.onChange(event);
			}
		});
		
	},

	_renderInput : function() {
		if(!this.props.isMultiline) {
			return (
				React.createElement("input", {ref: "input", 
					className: "mdl-textfield__input", 
					type: "text", 
					id: this.state.id, 
					value: this.state.value, 
					onChange: this._onChange, 
					pattern: this.props.pattern}
				)
			);
		} else {
			return (
				React.createElement("textarea", {ref: "input", 
					className: "mdl-textfield__input", 
					type: "text", 
					rows: this.props.rows, 
					id: this.state.id, 
					value: this.state.value, 
					onChange: this._onChange}
				)
			);
		}
	},

	render : function() {
		var classes = {
			'mdl-textfield' : true,
			'mdl-js-textfield' : true,
		};
		if(this.props.isFloatingLabel) {
			classes['mdl-textfield--floating-label'] = true;
		}
		var error = null;
		if(this.props.errorText) {
			error = (
				React.createElement("span", {className: "mdl-textfield__error"}, 
					this.props.errorText
				)
			);
		}
		return (
			React.createElement("div", {key: this.state.changeCounter, className: cx(classes), style: this.props.style}, 
				this._renderInput(), 
				React.createElement(TextFieldLabel, {for: this.state.id}, 
					this.props.labelText
				), 
				React.createElement(TextFieldError, null, 
					this.props.errorText
				)
			)
		);
	},

});

var TextFieldError = React.createClass({displayName: "TextFieldError",
	render: function() {
		if(this.props.children) {
			return (
				React.createElement("span", {className: "mdl-textfield__error"}, 
					this.props.children
				)
			);
		} else {
			return null;
		}
	}
});

var TextFieldLabel = React.createClass({displayName: "TextFieldLabel",
	propTypes: {
		for : React.PropTypes.string,
	},
	render: function() {
		if(this.props.children) {
			return (
				React.createElement("label", {
					className: "mdl-textfield__label", 
					htmlFor: this.props.for
				}, 
					this.props.children
				)
			);
		} else {
			return null;
		}
	}
});
