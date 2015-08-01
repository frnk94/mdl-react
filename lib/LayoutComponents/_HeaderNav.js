
'use strict';

var React = require('react');
var _ = require('lodash');

module.exports  = React.createClass({

	displayName : '_HeaderNav',

	propTypes: {
		isHideHeaderMenuWhenMobile : React.PropTypes.string,
	},

	render: function() {
		var headerNavClassName = 'mdl-navigation';
		if(this.props.isHideHeaderMenuWhenMobile) {
			headerNavClassName += ' mdl-layout--large-screen-only';
		}
		var items = this._generateLinks(
			this.props.headerLinks,
			'mdl-navigation__link'
		);
		return (
			React.createElement("nav", {className: headerNavClassName}, 
				items
			)
		);
	}

});
