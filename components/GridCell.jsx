var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			col : 0,
			colDesktop : 0,
			colTablet : 0,
			colPhone : 0,
		};
	},

	propTypes: {
		col : React.PropTypes.number,
		colDesktop : React.PropTypes.number,
		colTablet : React.PropTypes.number,
		colPhone : React.PropTypes.number,
		hideDesktop : React.PropTypes.bool,
		hideTablet : React.PropTypes.bool,
		hidePhone : React.PropTypes.bool,
		stretch : React.PropTypes.bool,
		top : React.PropTypes.bool,
		middle : React.PropTypes.bool,
		bottom : React.PropTypes.bool,
		style : React.PropTypes.object,

	},

	render: function() {

		var classes = {
			'mdl-cell' : true,
		};

		if(this.props.col != 0) {
			classes['mdl-cell--' + this.props.col + '-col'] = true;
		}
		if(this.props.colDesktop != 0) {
			classes['mdl-cell--' + this.props.colDesktop + '-col-desktop'] = true;
		}
		if(this.props.colTablet != 0) {
			classes['mdl-cell--' + this.props.colTablet + '-col-tablet'] = true;
		}
		if(this.props.colPhone != 0) {
			classes['mdl-cell--' + this.props.colPhone + '-col-phone'] = true;
		}
		if(this.props.hideDesktop) {
			classes['mdl-cell--hide-desktop'] = true;
		}
		if(this.props.hideTablet) {
			classes['mdl-cell--hide-tablet'] = true;
		}
		if(this.props.hidePhone) {
			classes['mdl-cell--hide-phone'] = true;
		}
		if(this.props.stretch) {
			classes['mdl-cell--stretch'] = true;
		}
		if(this.props.top) {
			classes['mdl-cell--top'] = true;
		}
		if(this.props.middle) {
			classes['mdl-cell--middle'] = true;
		}
		if(this.props.bottom) {
			classes['mdl-cell--bottom'] = true;
		}

		return (
			<div className={cx(classes)} style={this.props.style}>
				{this.props.children}
			</div>
			
		);
	}

});