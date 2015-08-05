
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
			React.createElement("div", {className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right"}, 
				React.createElement("label", {
					className: "mdl-button mdl-js-button mdl-button--icon", 
					htmlFor: inputId
				}, 
					React.createElement("i", {className: "material-icons"}, "search")
				), 
				React.createElement("div", {className: "mdl-textfield__expandable-holder"}, 
					React.createElement("input", {ref: "input", 
						className: "mdl-textfield__input", 
						type: "text", 
						name: "sample", 
						id: inputId, 
						style: inputStyle, 
						onKeyPress: this._onKeyPress}
					)
				)
			)
		);
	},

});
