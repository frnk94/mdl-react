
var React = require('react');
var cx = require('classnames');

/**
	Loading
		http://www.getmdl.io/components/index.html#loading-section
	Props
		Spinner,ProgressBar,
		indeterminate,
		singleColor,
		buffer,
*/
module.exports = React.createClass({

	propTypes: {
		Spinner : React.PropTypes.bool.isRequired,
		ProgressBar : React.PropTypes.bool,
		// type : React.PropTypes.
		indeterminate : React.PropTypes.bool,
		singleColor : React.PropTypes.bool,
		percentage : React.PropTypes.number,
		isActive : React.PropTypes.bool,
		style : React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			Spinner: true,
			indeterminate: true,
			ProgressBar: false,
			singleColor: false,
			percentage:0,
			buffer: 0,
			isActive : true,
		};
	},

	componentDidMount: function() {
		//componentHandler.upgradeDom();
		if(this.props.ProgressBar && !this.props.indeterminate){
			var self = this;
			self.refs.loading.getDOMNode()
			.addEventListener('mdl-componentupgraded', function() {
				this.MaterialProgress.setProgress(self.props.percentage);
				this.MaterialProgress.setBuffer(self.props.buffer);
			});
		}
	},

	render: function() {

		var container =  {};
		var style = {};

		if(this.props.Spinner) {
			container['mdl-spinner'] = true;
			container['mdl-js-spinner'] = true;
		}

		if(this.props.ProgressBar) {
			container['mdl-progress'] = true;
			container['mdl-js-progress'] = true;
		}

		if(this.props.indeterminate) {
			container['mdl-progress__indeterminate'] = true;
		}

		if(this.props.singleColor) {
			container['mdl-spinner--single-color'] = true;
		}

		return (
			<div ref="loading" className={cx(container)} style={style} ></div>
		);

	},

});
