
var React = require('react');
var cx = require('classnames');

/**
	TextField
	http://www.getmdl.io/components/index.html#textfields-section

	Props
	labelText
	errorText
	value
	pattern
*/

module.exports = React.createClass({

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
		};

		var inputId = Date.now();

		return (
			<div className={cx(classes.container)} >
				<input className={cx(classes.input)} type="text" id={inputId} />
				<label className={cx(classes.label)} for={inputId} >
					{this.props.errorText}
				</label>
			</div>
		);

	},

});
