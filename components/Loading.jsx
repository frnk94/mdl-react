
var React = require('react');
var cx = require('classnames');

/**
	LayoutFixHeader
		http://www.getmdl.io/components/index.html#loading-section
	Props
		Spinner,ProgressBar,
		indeterminate,
		singleColor,
*/
module.exports = React.createClass({

	propTypes: {
		Spinner : React.PropTypes.bool,
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

	componentWillMount: function() {
		componentHandler.upgradeDom();
	},

	componentDidMount: function() {
		if(this.props.ProgressBar && !this.props.indeterminate){
			//console.log("set progress")
			var self = this;
			self.refs.loader.getDOMNode().addEventListener('mdl-componentupgraded', function() {
    		this.MaterialProgress.setProgress(self.props.percentage);
  		});
		}
	},

	render: function() {
		var classes = {
				container : {},
			};

		if(this.props.Spinner) {
			classes.container['mdl-spinner'] = true;
			classes.container['mdl-js-spinner'] = true;
			classes.container['is-active'] = true;
		}

		if(this.props.ProgressBar) {
			classes.container['mdl-progress'] = true;
			classes.container['mdl-js-progress'] = true;
		}

		if(this.props.indeterminate) {
			classes.container['mdl-progress__indeterminate'] = true;
		}

		if(this.props.singleColor) {
			classes.container['mdl-spinner--single-color'] = true;
		}

		return (
			<div ref="loader" className={cx(classes.container)} ></div>
		);
	},

});
