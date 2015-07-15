
/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/layout

	props
		title, string or element
		href, string, 標題的連結
		items, array of object
		headerItems, array of obbject
*/

var React = require('react');
var cx = require('classnames');

var Layout = React.createClass({

	propTypes: {
		title : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element,
		]),
		href : React.PropTypes.string,
		type : React.PropTypes.oneOf([
			'FixedHeader',
			'FixedDrawer',
		]),
		// items : React.PropTypes.array,
		headerItems : React.PropTypes.arrayOf(React.PropTypes.shape({
			text : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			href : React.PropTypes.string,
			onClick : React.PropTypes.func,
		})),
		drawerItems : React.PropTypes.arrayOf(React.PropTypes.shape({
			text : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			href : React.PropTypes.string,
			onClick : React.PropTypes.func,
		})),
	},

	getDefaultProps: function() {
		return {
			title : '',
			// items : [],
			headerItems : [],
			drawerItems : [],
		};
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	render: function() {

		var classes = {
			root : {
				'mdl-layout' : true,
				'mdl-js-layout' : true,
				// mdl-layout--overlay-drawer-button
			}
		};

		if(this.props.type == 'FixedHeader') {
			classes.root['mdl-layout--fixed-header'] = true;
		} else if(this.props.type == 'FixedDrawer') {
			classes.root['mdl-layout--fixed-drawer'] = true;
			classes.root['mdl-layout--overlay-drawer-button'] = true;
		}

		var titleComponent = null;
		if(this.props.title && this.props.href) {
			var style = {
				textDecoration: 'none',
				color : 'inherit',
			};
			titleComponent = (
				<span className="mdl-layout-title">
					<a href={this.props.href} style={style} >
						{this.props.title}
					</a>
				</span>
			);
		} else if(this.props.title) {
			titleComponent = (
				<span className="mdl-layout-title">
					{this.props.title}
				</span>
			);
		}

		var headerBlock = null;
		if(
			this.props.headerItems.length > 0
		) {

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

			headerBlock = (
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						{titleComponent}
						<div className="mdl-layout-spacer"></div>
						<nav className="mdl-navigation mdl-layout--large-screen-only">
							{headerItems}
						</nav>
					</div>
				</header>
			);

		}

		var drawerBlock = null;
		if(
			this.props.drawerItems.length > 0
		) {

			var drawerItems = this.props.drawerItems.map(function(element, index) {
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

			drawerBlock = (
				<div className="mdl-layout__drawer">
					{titleComponent}
					<nav className="mdl-navigation">
						{drawerItems}
					</nav>
				</div>
			);

		}


		return (
			<div className={cx(classes.root)}>
				{headerBlock}
				{drawerBlock}
				<main className="mdl-layout__content">
					<div className="page-content">
						{this.props.children}
					</div>
				</main>
			</div>
		);

	}

});

module.exports = Layout;
