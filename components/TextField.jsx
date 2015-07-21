
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

var id = 1;

module.exports = React.createClass({

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

	getInitialState: function() {
		return {
			value : this.props.defaultValue,
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
		this.state.id = 'mdl-textfield-' + Date.now();
	},

	componentDidMount: function() {
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

	getValue : function() {
		return this.state.value;
	},

	setValue : function(value) {
		this.setState({
			value : value,
		});
	},

	_onChange : function(event) {
		this.setState({
			value : event.target.value,
		});
		if(this.props.onChange instanceof Function) {
			this.props.onChange(event);
		}
	},

	_renderInput : function() {
		if(!this.props.isMultiline) {
			return (
				<input ref='input'
					className="mdl-textfield__input"
					type="text"
					id={this.state.id}
					value={this.state.value}
					onChange={this._onChange}
					pattern={this.props.pattern}
				/>
			);
		} else {
			return (
				<textarea ref='input'
					className="mdl-textfield__input"
					type="text"
					rows={this.props.rows}
					id={this.state.id}
					value={this.state.value}
					onChange={this._onChange}
				/>
			);
		}
	},

	_renderLabel : function() {
		if(this.props.labelText) {
			return (
				<label
					className="mdl-textfield__label"
					htmlFor={this.state.id}
				>
					{this.props.labelText}
				</label>
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
				<span className="mdl-textfield__error">
					{this.props.errorText}
				</span>
			);
		}

		return (
			<div className={cx(classes)} style={this.props.style} >
				{this._renderInput()}
				{this._renderLabel()}
				{error}
			</div>
		);

	},

});
