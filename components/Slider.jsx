
var React = require('react');

/**
	Sliders
		http://www.getmdl.io/components/index.html#sliders-section
	Props
		min, 			string isRequired,		a minimum value for an <input> element
		max, 			string isRequired,		a maximum value for an <input> element
		tabIndex, 		string,					the tab order of an element
		step, 			string,					the legal number intervals for an <input> element
		defaultValue, 	string,					the value of an <input> element
	Methods
		getValue								get the value from the current sliders
		setValue								Set the value in the current sliders
*/

var counter = 0;

var Slider = React.createClass({

	propTypes: {
		min : React.PropTypes.string.isRequired,
		max : React.PropTypes.string.isRequired,
		tabIndex : React.PropTypes.string,
		step : React.PropTypes.string,
		defaultValue : React.PropTypes.string,
		disabled : React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			min : '0',
			max : '10',
			defaultValue : '0',
			tabIndex : '0',
			step : '0',
			disabled : null,
		};
	},

	getInitialState: function() {
		return {
			stateValue : this.props.defaultValue,
		};
	},

	componentDidMount: function() {
		var node = this.refs.input.getDOMNode();
		node.value = this.props.defaultValue;
		node.setAttribute('class', 'mdl-slider mdl-js-slider');
	},

	componentDidUpdate: function(prevProps, prevState) {
		var node = this.refs.input.getDOMNode();
		node.value = this.state.stateValue;
		node.setAttribute('class', 'mdl-slider mdl-js-slider');
		componentHandler.upgradeDom();
	},

	getValue : function() {
		return this.refs.input.getDOMNode().value ;
	},

	setValue : function(inputValue) {
		this.setState({
			stateValue : inputValue,
		});
	},

	render: function() {
		var key = 'mdl-slider-' + (counter++);
		return (
			<div style={this.props.style}>
				<input
					key={key}
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
