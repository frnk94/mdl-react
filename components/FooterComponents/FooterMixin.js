// FooterMixin.js

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		isMega,			boolen				if it is true, it should be 'mega', otherwise 'mini' 
*/

var React = require('react');

var FooterMixin = {

	propTypes: {
			isMega: React.PropTypes.bool,
		},

	getDefaultProps: function() {
		return {
			isMega: false,
		};
	},

};

