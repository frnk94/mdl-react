
var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Loading
		http://www.getmdl.io/components/index.html#loading-section
	Props
		Type:Spinner,ProgressBar
		indeterminate,
		singleColor,
		buffer,
*/
module.exports = React.createClass({

	propTypes: {
		type :  React.PropTypes.oneOf(['Spinner', 'ProgressBar']).isRequired,
		indeterminate : React.PropTypes.bool,
		singleColor : React.PropTypes.bool,
		percentage : React.PropTypes.number,
		style : React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			type : 'Spinner',
			indeterminate : true,
			singleColor : false,
			percentage : 0,
			buffer : 0,
			style : {},
		};
	},

	componentDidMount: function() {
		if(this.props.type == 'ProgressBar' && !this.props.indeterminate){
			var self = this;
			this.refs.loading.getDOMNode().addEventListener(
				'mdl-componentupgraded',
				function() {
					self._updateProgressBar();
				}
			);
		}
	},

	_updateProgressBar : function() {
		var mp = this.refs.loading.getDOMNode().MaterialProgress;
		mp.setProgress(this.props.percentage);
		mp.setBuffer(this.props.buffer);
	},

	componentDidUpdate : function(nextProps) {
		if(
			this.props.type == 'ProgressBar' &&
			!this.props.indeterminate
		) {
			this._updateProgressBar();
		}
	},

	_getClasses: function() {
		var classes={};
		if (this.props.type ==='Spinner'){
			classes['mdl-spinner'] = true;
			classes['mdl-js-spinner'] = true;
			classes['is-active'] = true;
		}else if(this.props.type ==='ProgressBar'){
			classes['mdl-progress'] = true;
			classes['mdl-js-progress'] = true;
		}
		if(this.props.indeterminate) {
			classes['mdl-progress__indeterminate'] = true;
		}
		if(this.props.singleColor) {
			classes['mdl-spinner--single-color'] = true;
		}
		return cx(classes);
	},

	render: function() {
		return (
			<div ref="loading" className={this._getClasses()} style={this.props.style} ></div>
		);

	},

});
