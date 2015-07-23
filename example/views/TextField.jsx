
"use strict";

var React = require('react');
var MDL = require('../../components');

var Components = require('../components');

var ExampleTextField = React.createClass({

	propTypes: {
		style : React.PropTypes.string
	},

	getInitialState: function() {
		return {
			counter : 0,
		};
	},

	componentDidMount: function() {
		this._intervalId = setInterval(this._cron, 1000);
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
		clearInterval(this._intervalId);
	},

	_cron : function() {
		console.log('_cron', this.isMounted());
		this.setState({
			counter : ++this.state.counter,
		});
	},

	render: function() {

		var styles = {
			card : {
				padding : '20px',
				width : '100%',
			},
		};

		return (
			<Components.Page>
				<Components.DocTitle title="Text Field" />
				<MDL.Card style={styles.card} shadow={6}>
					<MDL.TextField
						defaultValue='no label text'
						onChange={function(e) { console.log(e.target.value) }}
					/><br />
					<MDL.TextField
						labelText='test label text'
						defaultValue='test default value'
					/><br />
					<MDL.TextField
						labelText='input digits with error text'
						errorText='plz input digits'
						pattern='[0-9]*'
					/><br />
					<MDL.TextField
						labelText='test floating label text'
						errorText='test error text'
						defaultValue='test default value'
						isFloatingLabel={true}
					/><br />
					<MDL.TextField
						labelText='Numeric Textfield with Floating Label'
						errorText='plz input digits'
						defaultValue={this.state.counter}
						isFloatingLabel={true}
						pattern='[0-9]*'
					/><br />
					<MDL.TextField
						labelText='Floating Multiline Textfield'
						defaultValue={'first line\nsecond line'}
						isFloatingLabel={true}
						isMultiline={true}
					/>
					<MDL.PrismCode
						src='example/codes/TextField.jsx'
						lang='jsx'
					/>
				</MDL.Card>
				{this._renderProps()}
			</Components.Page>
		);
	},

	_renderProps : function() {
		var propsDetail = [
			{
				key : 'labelText',
				type : 'string',
				state : 'optional',
				content : 'textfield label',
			},
			{
				key : 'isFloatingLabel',
				type : 'bool',
				state : 'optional',
				content : 'enable floating label',
			},
			{
				key : 'errorText',
				type : 'string',
				state : 'optional',
				content : 'error message, shoud use `errorText` with `pattern`',
			},
			{
				key : 'pattern',
				type : 'string',
				state : 'optional',
				content : 'regular expression string, shoud use `pattern` with `errorText`',
			},
			{
				key : 'defaultValue',
				type : 'string or number',
				state : 'optional',
				content : 'the default value',
			},
			{
				key : 'onChange',
				type : 'function(event)',
				state : 'optional',
				content : 'Callback function fired when the value changed',
			},
			{
				key : 'isMultiline',
				type : 'bool',
				state : 'optional',
				content : 'to enable multiline, it will render <textarea>',
			},
			{
				key : 'rows',
				type : 'number',
				state : 'optional',
				content : 'the number of rows of textarea',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "Override the inline-styles of the root element",
			},
		];
		return <Components.Props detail={propsDetail} title="Props" />;
	},

});

module.exports = ExampleTextField;
