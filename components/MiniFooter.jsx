
'use strict';

var React = require('react');

var MiniFooter = React.createClass({

	propTypes: {
		leftSection : React.PropTypes.shape({
			links : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.node,
		}),
		rightSection : React.PropTypes.shape({
			links : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.node,
		}),
		style : React.PropTypes.object,
	},

	getInitialState: function() {
		return {
			miniOrMega : this.props.isMini? 'mini': 'mega',
		};
	},

	_generateList: function(links) {
		var list = links.map(function(item, index) {
			return <li key={index}>{item}</li>;
		});
		return (
			<ul className="mdl-mini-footer--link-list">
				{list}
			</ul>
		);
	},

	_generateSection: function(section, side) {
		if(section) {
			var logo = null;
			if(section.logo) {
				logo = (
					<div className="mdl-logo">
						{section.logo}
					</div>
				);
			}
			var cname = "mdl-mini-footer--" + side + "-section";
			return (
				<div className={cname}>
					{logo}
					{this._generateList(section.links)}
				</div>
			);
		}
	},

	render: function() {
		return (
			<footer className="mdl-mini-footer" style={this.props.style} >
				{this._generateSection(this.props.leftSection, 'left')}
				{this._generateSection(this.props.rightSection, 'right')}
			</footer>
		);
	}
});

module.exports = MiniFooter;
