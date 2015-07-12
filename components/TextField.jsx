
var React = require('react');
var cx = require('classnames');

/**
	TextField
		http://www.getmdl.io/components/index.html#textfields-section
	Props
		labelText
		errorText
		defaultValue
		floatingLabel
		pattern
	Methods
		getValue
		setValue
*/

var id = 1;

module.exports = React.createClass({

	propTypes: {
		labelText : React.PropTypes.string,
		errorText : React.PropTypes.string,
		defaultValue : React.PropTypes.string,
		floatingLabel : React.PropTypes.bool,
		pattern : React.PropTypes.string,
	},

	getInitialState: function() {
		return {
			value : this.props.defaultValue,
		};
	},

	componentWillMount: function() {
		if(this.props.defaultValue) {
			this.state.value = this.props.defaultValue;
		}
		this.state.id = 'mdl-textfield-' + id++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
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
	},

	render : function() {

		var classes = {
			container : {
				'mdl-textfield' : true,
				'mdl-js-textfield' : true,
			},
			input : {
				'mdl-textfield__input' : true,
			},
			label : {
				'mdl-textfield__label' : true,
			},
			error : {
				'mdl-textfield__error' : true,
			},
		};

		if(this.props.floatingLabel) {
			classes.container['mdl-textfield--floating-label'] = true;
		}

		var error = null;
		if(this.props.errorText) {
			error = (
				<span className={cx(classes.error)}>
					{this.props.errorText}
				</span>
			);
		}

		return (
			<div className={cx(classes.container)} >
				<input className={cx(classes.input)}
					type="text"
					value={this.state.value}
					id={this.state.id}
					onChange={this._onChange}
					pattern={this.props.pattern}
				/>
				<label
					className={cx(classes.label)}
					htmlFor={this.state.id}
				>
					{this.props.labelText}
				</label>
				{error}
			</div>
		);

	},

});
