
var React = require('react');
var cx = require('classnames');

/**
	Loading
		http://www.getmdl.io/components/index.html#loading-section
	Props
		Spinner,ProgressBar,
		indeterminate,
		singleColor,
*/
module.exports = React.createClass({

	propTypes: {
		Spinner : React.PropTypes.bool.isRequired,
		ProgressBar : React.PropTypes.bool,
		indeterminate : React.PropTypes.bool,
		singleColor : React.PropTypes.bool,
		percentage : React.PropTypes.number,
	},

	getDefaultProps: function() {
	return {
			Spinner: true,
			indeterminate: true,
			ProgressBar: false,
			singleColor: false,
			percentage:0,
	};
},

	componentDidMount: function() {
		if(this.props.ProgressBar && !this.props.indeterminate){
			//console.log("set progress")
			var self = this;
			self.refs.loader.getDOMNode().addEventListener('mdl-componentupgraded', function() {
				this.MaterialProgress.setProgress(self.props.percentage);
			});
		}
		componentHandler.upgradeDom();
	},

	render: function() {
		var container =  {}

		if(this.props.Spinner) {
			container['mdl-spinner'] = true;
			container['mdl-js-spinner'] = true;
			container['is-active'] = true;
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
			<div ref="loader" className={cx(container)} ></div>
		);
	},

});
