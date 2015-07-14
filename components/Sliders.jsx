
var React = require('react');

/**
	Sliders
		http://www.getmdl.io/components/index.html#sliders-section
	Props
		min, 			string isRequired,		a minimum value for an <input> element
		max, 			string isRequired,		a maximum value for an <input> element
		tabindex, 		string,					the tab order of an element
		step, 			string,					the legal number intervals for an <input> element
		defaultValue, 	string,					the value of an <input> element
	Methods
		getValue								get the value from the current sliders
		stateValue								Set the value in the current sliders
*/


var Sliders = React.createClass({

	propTypes: {
		min : React.PropTypes.string.isRequired,
		max : React.PropTypes.string.isRequired,
		tabindex : React.PropTypes.string,
		step : React.PropTypes.string,
		defaultValue : React.PropTypes.string,
		disabled : React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			min : '0',
			max : '10',
			defaultValue : '0',
			tabindex : '0',
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
		this.refs.input.getDOMNode().value = this.props.defaultValue;
		this.refs.input.getDOMNode().setAttribute('class', 'mdl-slider mdl-js-slider');
	},

	componentDidUpdate: function(prevProps, prevState) {
		this.refs.input.getDOMNode().value = this.state.stateValue;
		this.refs.input.getDOMNode().setAttribute('class', 'mdl-slider mdl-js-slider');
		componentHandler.upgradeDom();
	},

	getValue : function() {
		return this.refs.input.getDOMNode().value ;
	},

	setValue : function(inputValue) {
		this.refs.input.getDOMNode().value  = inputValue;
		this.setState({
			stateValue : inputValue, 
		});
	},

	render: function() {
		var date = Date.now();

		if(this.props.min < 0) {
			console.warn('MDL.Sliders : min should greater than Zero.')
		}

		return (
			<div>
				<input 
					key={date}
					ref='input'
					type="range"
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.onChange}
					tabIndex={this.props.tabindex}
					step={this.props.step}
					disabled={this.props.disabled}
				/>
			</div>
		);
	},
});

module.exports = Sliders;