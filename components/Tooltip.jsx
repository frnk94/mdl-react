
"use strict";

var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
	Tooltips
		http://www.getmdl.io/components/index.html#tooltips-section
	Props
		large,		是否要選擇 mdl-tool--large
		url,			圖片來源
		text,			tooltips要顯示的文字
		width,		圖片寬度
		height,		圖片高度
	Methods
*/

var token = 1;

module.exports = React.createClass({

	propTypes: {
		children: React.PropTypes.element.isRequired,
		large: React.PropTypes.bool,
		url: React.PropTypes.string,
		text: React.PropTypes.string,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		style: React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			text: 'Tooltip text',
			width: 10,
			height: 20,
			// style: {
			// 	display : 'inline-block',
			// },
		};
	},

	// getInitialState: function() {
	// 	return {
	// 	};
	// },
	// componentWillMount: function() {
	// 	this.state.id = 'mdl-tooltip-' + id++;
	// },

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	render: function() {

		var classes = {
			'mdl-tooltip' : true,
		};
		var style = {
			display : 'inline-block',
		};

		if(this.props.large) {
			classes['mdl-tooltip--large'] = true;
		}

		var id = 'mdl-tooltip-' + (token++);
		var children = React.cloneElement(this.props.children, {
			id : id,
			// key : id,
		});

		var style = _.extend(style, this.props.style);

		return (
			<div style={style}>
				{children}
				<div className={cx(classes)} htmlFor={id} >
					{this.props.text}
				</div>
			</div>
		);

		// return (
		// 	<div>
		// 		<p id={this.state.id} style={this.props.style}>
		// 			{this.props.element}
		// 		</p>
		// 		<div className={cx(classes)} htmlFor={this.state.id} >
		// 			{this.props.text}
		// 		</div>
		// 	</div>
		// );
	}

});
