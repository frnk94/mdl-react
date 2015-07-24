
var React = require('react');

/**
	Sliders
		http://www.getmdl.io/components/index.html#sliders-section
	Props
		min, 			number isRequired,		a minimum value for an <input> element
		max, 			number isRequired,		a maximum value for an <input> element
		tabIndex, 		number,					the tab order of an element
		step, 			number,					the legal number intervals for an <input> element
		defaultValue, 	number,					the value of an <input> element
		disabled,		boolen,					disable the slider effect
	Methods
		getValue								get the value from the current sliders
		setValue								Set the value in the current sliders
*/

var Slider = React.createClass({

	propTypes: {
		min : React.PropTypes.number.isRequired,
		max : React.PropTypes.number.isRequired,
		tabIndex : React.PropTypes.number,
		step : React.PropTypes.number,
		defaultValue : React.PropTypes.number,
		disabled : React.PropTypes.bool,
	},

	getDefaultProps: function() {
		return {
			min : 0,
			max : 10,
			defaultValue : 50,
			tabIndex : 0,
			step : 0,
			disabled : false,
		};
	},

	getInitialState: function() {
		return {
			value : this.props.defaultValue,
			_counter : 0,
		};
	},

	componentDidMount: function() {
		var node = this.refs.input.getDOMNode();
		node.value = this.props.defaultValue;
		node.setAttribute('class', 'mdl-slider mdl-js-slider');
		componentHandler.upgradeDom();
	},

	componentWillReceiveProps: function(nextProps, nextState) {
		if(
			nextProps.defaultValue &&
			this.props.defaultValue != nextProps.defaultValue
		) {
			this.setValue(nextProps.defaultValue);
		} else {
			this.setValue(this.refs.input.getDOMNode().value);
		}
	},

	componentDidUpdate: function(prevProps, prevState) {
		var node = this.refs.input.getDOMNode();
		node.value = this.state.value;
		node.setAttribute('class', 'mdl-slider mdl-js-slider');
		componentHandler.upgradeDom();
	},

	getValue : function() {
		return this.refs.input.getDOMNode().value ;
	},

	setValue : function(value) {
		this.setState({
			value : value,
			_counter : ++this.state._counter,
		});
	},

	render: function() {
		return (
			<div style={this.props.style}>
				<input
					key={this.state._counter}
					ref='input'
					type="range"
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.onChange}
					tabIndex={this.props.tabIndex}
					step={this.props.step}
					disabled={this.props.disabled}
				/>
			</div>
		);
	},
});

module.exports = Slider;
