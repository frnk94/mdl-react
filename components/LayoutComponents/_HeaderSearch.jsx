
'use strict';

var React = require('react');
var _ = require('lodash');

var counter = 0;

module.exports = React.createClass({

	displayName : '_HeaderSearch',

	propTypes: {
		submit : React.PropTypes.func,
		inputStyle : React.PropTypes.object,
		enabled : React.PropTypes.bool,
	},

	_onKeyPress : function(e) {
		if(
			e.which == 13 &&
			this.props.submit instanceof Function
		) {
			console.log(this.refs.input.getDOMNode().value);
			this.props.submit(this.refs.input.getDOMNode().value);
		}
	},

	render : function() {
		if(!this.props.enabled) return null;
		var inputId = 'fixed-header-drawer-exp-' + (++counter);
		var inputStyle = _.extend({
			borderBottomColor : 'white',
		}, this.props.inputStyle);
		return (
			<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
				<label
					className="mdl-button mdl-js-button mdl-button--icon"
					htmlFor={inputId}
				>
					<i className="material-icons">search</i>
				</label>
				<div className="mdl-textfield__expandable-holder" >
					<input ref='input'
						className="mdl-textfield__input"
						type="text"
						name="sample"
						id={inputId}
						style={inputStyle}
						onKeyPress={this._onKeyPress}
					/>
				</div>
			</div>
		);
	},

});
