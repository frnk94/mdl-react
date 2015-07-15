
/**
	LayoutFixHeader
		http://www.getmdl.io/components/index.html#layout-section/layout

	props
		title, string
		items, array
		headerItems, array
*/

var React = require('react');

var LayoutFixHeader = React.createClass({

	propTypes: {
		title : React.PropTypes.string,
		items : React.PropTypes.array,
		headerItems : React.PropTypes.array,
	},

	getDefaultProps: function() {
		return {
			title : 'title',
			items : [],
			headerItems : [],
		};
	},

	render: function() {

		var headerItems = this.props.headerItems.map(function(element, index) {
			return (
				<a className="mdl-navigation__link"
					href={element.href}
					onClick={element.onClick}
					key={index}
				>
					{element.text}
				</a>
			);
		});

		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">
							{this.props.title}
						</span>
						<div className="mdl-layout-spacer"></div>
						<nav className="mdl-navigation mdl-layout--large-screen-only">
							{headerItems}
						</nav>
					</div>
				</header>
				<div className="mdl-layout__drawer">
					<span className="mdl-layout-title">Title</span>
					<nav className="mdl-navigation">
						<a className="mdl-navigation__link" href="/table">Table</a>
						<a className="mdl-navigation__link" href="/text-field">TextField</a>
						<a className="mdl-navigation__link" href="/card">Card</a>
						<a className="mdl-navigation__link" href="">Link</a>
					</nav>
				</div>
				<main className="mdl-layout__content">
					<div className="page-content">
						<span>Your content goes here</span>
					</div>
				</main>
			</div>
		);
	}

});

module.exports = LayoutFixHeader;
