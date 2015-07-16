var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Tooltips
		http://www.getmdl.io/components/index.html#tooltips-section
	Props
		large,		是否要選擇 mdl-tool--large
		cource,		圖片來源
		text,			tooltips要顯示的文字
		width,		圖片寬度
		height,		圖片高度
	Methods
*/


module.exports = React.createClass({

	propTypes: {
		large: React.PropTypes.bool,
		text: React.PropTypes.node.isRequired,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
	}

	componentWillMount: function() {
		if(!_.includes(this.props.text)){
			console.warn('MDL.Tooltips: No Tip Text');
		}
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	render: function() {
		var classes = {'mdl-tooltip'=true,};

		if(this.props.large) {
			classes['mdl-tooltip--large'] = true;
		}

		return (
			<div>
				<span className={cx(classes)}> 
					<img src={this.props.source} width={this.props.width} height={this.porps.height}>
					{this.props.text}
				</span>
			</div>
		);
	}

});