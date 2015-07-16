/** @jsx React.DOM */

var React = require('react');
var cx = require('classnames');

/**
	Badge
		http://www.getmdl.io/components/index.html#badges-section
	Props
		badge,					node isRequired,		the legal char for <Badge> element
		materialDesignIcon,		bool,					use mdl icon in Badge
		noBackground,			bool,					use Background in Badge
		style,					objecy,					for css
	Icon
		https://www.google.com/design/icons/
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		badge : React.PropTypes.node.isRequired,
		materialDesignIcon : React.PropTypes.bool,
		noBackground : React.PropTypes.bool,
		style : react.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			badge : 404,
			materialDesignIcon : false,
			noBackground : false,
			style : {
				display: 'inline-block',
			},
		};
	},

	render: function() {

		console.log('inside render');

		var date = Date.now();

		_getClasses: function() {

			var classes = {
				'mdl-design': true,
			};

			if(this.props.noBackground) {
				classes['mdl-badge--no-background'] = true;
			}

			if(this.props.materialDesignIcon) {
				classes['icon material-icons'] = true;
			}

			return cx(classes);
		},

		var style = this.props.style;

		style.display = this.props.display ? this.props.display : style.display;

		return (
			<div 
				key={date}
				className={this._getClasses()}
				data-badge={this.props.badge}
				style={style}
			>
				{this.props.children}
			</div>
		);

	},

});
