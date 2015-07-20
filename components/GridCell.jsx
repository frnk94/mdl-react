var React = require('react');
var cx = require('classnames');

/**
	GridCell
		http://www.getmdl.io/components/index.html#layout-section/grid
		在 grid system 裡的每個單位
		A grid has 12 columns in the desktop screen size, 8 in the tablet size, and 4 in the phone size.
	Props
		col 			佔的寬度
		colDesktop 		在桌面寬度下佔的寬度
		colTablet 		在平板寬度下佔的寬度
		colPhone 		在手機寬度下佔的寬度
		isHideDesktop 	在桌面寬度是否隱藏
		isHideTablet 		在平板寬度是否隱藏
		isHidePhone 		在手機寬度是否隱藏
		isStretch 		Stretches the cell vertically to fill the parent
		isTop 			Aligns the cell to the top of the parent
		isMiddle 			Aligns the cell to the middle of the parent
		isBottom 			Aligns the cell to the bottom of the parent
		style 			css setting
*/

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
		isHideDesktop : React.PropTypes.bool,
		isHideTablet : React.PropTypes.bool,
		isHidePhone : React.PropTypes.bool,
		isStretch : React.PropTypes.bool,
		isTop : React.PropTypes.bool,
		isMiddle : React.PropTypes.bool,
		isBottom : React.PropTypes.bool,
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
		if(this.props.isHideDesktop) {
			classes['mdl-cell--hide-desktop'] = true;
		}
		if(this.props.isHideTablet) {
			classes['mdl-cell--hide-tablet'] = true;
		}
		if(this.props.isHidePhone) {
			classes['mdl-cell--hide-phone'] = true;
		}
		if(this.props.isStretch) {
			classes['mdl-cell--stretch'] = true;
		}
		if(this.props.isTop) {
			classes['mdl-cell--top'] = true;
		}
		if(this.props.isMiddle) {
			classes['mdl-cell--middle'] = true;
		}
		if(this.props.isBottom) {
			classes['mdl-cell--bottom'] = true;
		}

		return (
			<div className={cx(classes)} style={this.props.style}>
				{this.props.children}
			</div>
			
		);
	}

});