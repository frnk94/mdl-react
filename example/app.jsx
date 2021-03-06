
"use strict";

var MDL = require('../components');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var App = React.createClass({
	mixins : [
		Router.State,
		Router.Navigation,
	],
	componentDidMount: function() {
		global._transitionTo = this.transitionTo;
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log('App.componentDidUpdate');
		this.refs.layout.scrollTop(0);
	},
	render : function() {
		var headerLinks = [
			<a href='https://github.com/Fandora/mdl-react' target='_blank'>
				<i className="fa fa-github" style={{fontSize:'15px',marginRight:'5px'}}> </i> GitHub
			</a>,
			<a href='http://FandoraShop.com' target='_blank'>by Fandora Shop</a>,
		];
		var waterfallLinks = [
			<a href='http://www.getmdl.io/' target='_blank'>Material Design Lite</a>,
			<a href='https://facebook.github.io/react/' target='_blank'>React</a>,
		];
		var drawerLinks = [
			<a href='#badge' onClick={function(){console.log('badge.onClick');}} >Badge</a>,
			<a href='#button'>Button</a>,
			<a href='#card'>Card</a>,
			<a href='#grid'>Grid</a>,
			<a href='#icon'>Icon</a>,
			<a href='#layout'>Layout</a>,
			<a href='#loading'>Loading</a>,
			<a href='#menu'>Menu</a>,
			<a href='#miniFooter'>Mini Footer</a>,
			<a href='#slider'>Slider</a>,
			<a href='#table'>Table</a>,
			<a href='#tabs'>Tabs</a>,
			<a href='#text-field'>Text Field</a>,
			<a href='#toggle'>Toggle</a>,
			<a href='#tooltip'>Tooltip</a>,
			<a href='#prismCode'>PrismCode</a>,
		];
		var tabs = [
			<a href=''>Tab 1</a>,
			<a href=''>Tab 2</a>,
			<a href=''>Tab 3</a>,
		];
		return (
			<MDL.Layout ref='layout'
				title='mdl-react'
				href='#'
				isFixedHeader={true}
				headerLinks={headerLinks}
				drawerLinks={drawerLinks}
				contentStyle={{ minHeight : '1000px' }}
				noDrawerTitle={true}
			>
				<Router.RouteHandler />
			</MDL.Layout>
		);
	},
});

var Home = require('./views/Home.jsx');
var TextField = require('./views/TextField.jsx');
var PrismCode = require('./views/PrismCode.jsx');
var Menu = require('./views/Menu.jsx');
var Table = require('./views/Table.jsx');
var Button = require('./views/Button.jsx');
var Loading = require('./views/Loading.jsx');
var Slider = require('./views/Slider.jsx');
var Card = require('./views/Card.jsx');
var Badge = require('./views/Badge.jsx');
var Toggle = require('./views/Toggle.jsx');
var Tabs = require('./views/Tabs.jsx');
var Grid = require('./views/Grid.jsx');
var MiniFooter = require('./views/MiniFooter.jsx');
var Tooltip = require('./views/Tooltip.jsx');
var Layout = require('./views/Layout.jsx');
var Icon = require('./views/Icon.jsx');

var routes = (
	<Router.Route handler={App} >
		<Router.DefaultRoute name='home' handler={Home} />
		<Router.Route name='textField' path='text-field' handler={TextField} />
		<Router.Route name='prismCode' path='prismCode' handler={PrismCode} />
		<Router.Route name='menu' path='menu' handler={Menu} />
		<Router.Route name='table' path='table' handler={Table} />
		<Router.Route name='button' path='button' handler={Button} />
		<Router.Route name='loading' path='loading' handler={Loading} />
		<Router.Route name='slider' path='slider' handler={Slider} />
		<Router.Route name='card' path='card' handler={Card} />
		<Router.Route name='badge' path='badge' handler={Badge} />
		<Router.Route name='toggle' path='toggle' handler={Toggle} />
		<Router.Route name='tabs' path='tabs' handler={Tabs} />
		<Router.Route name='grid' path='grid' handler={Grid} />
		<Router.Route name='miniFooter' path='miniFooter' handler={MiniFooter} />
		<Router.Route name='tooltip' path='tooltip' handler={Tooltip} />
		<Router.Route name='layout' path='layout' handler={Layout} />
		<Router.Route name='icon' path='icon' handler={Icon} />
	</Router.Route>
);

Router.create({
	routes: routes,
	location: Router.HashLocation,
}).run(function (Handler) {
	React.render(
		<div><Handler /></div>,
		document.body
	);
	console.log('App 程式載入終了');
});
