
"use strict";

var MDL = require('../components');
var React = require('react');
var Router = require('react-router');

var App = React.createClass({
	mixins : [
		Router.State,
		Router.Navigation,
	],
	render : function() {
		var headerItems = [
			<a href='http://FandoraShop.com' target='_blank'>by Fandora Shop</a>
		];
		var waterfallItems = [
			<a href='http://www.getmdl.io/' target='_blank'>Material Design Lite</a>,
			<a href='https://facebook.github.io/react/' target='_blank'>React</a>,
			// <a href='http://FandoraShop.com' target='_blank'>by Fandora Shop</a>,
		];
		var tabItems = [
			<a href='#table'>Table</a>,
			<a href='#button'>Button</a>,
		];
		var drawerItems = [

			<a href='#text-field'>Text Field</a>,
			<a href='#layout'>Layout</a>,

			<a href='#loading'>Loading</a>,
			<a href='#tooltip'>Tooltip</a>,

			<a href='#slider'>Slider</a>,
			<a href='#badge'>Badge</a>,
			<a href='#footer'>Footer</a>,

			<a href='#tab'>Tab</a>,
			<a href='#button'>Button</a>,
			<a href='#menu'>Menu</a>,
			<a href='#toggle'>Toggle</a>,

			<a href='#table'>Table</a>,
			<a href='#card'>Card</a>,
			<a href='#grid'>Grid</a>,

		];
		var style = {
			padding : '24px',
		};
		return (
			<MDL.Layout
				title='mdl-react'
				href='#'
				isFixedHeader={true}
				// isFixedDrawer={true}
				// isScrollHeader={true}
				isFixedTabs={true}
				// showHeaderSearch={true}
				headerItems={headerItems}
				// waterfallItems={waterfallItems}
				// tabItems={tabItems}
				drawerItems={drawerItems}
				// drawerButtonStyle={{color:'red'}}
				// isTransparent={true}
				// headerStyle={{background:"url('http://www.getmdl.io/assets/demos/transparent.jpg') center / cover"}}
				contentStyle={{ minHeight : '1000px' }}
				// noHeaderTitle={true}
				noDrawerTitle={true}
			>
				<div style={style}>
					<Router.RouteHandler />
				</div>
			</MDL.Layout>
		);
	},
});

// 設定路由
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
var Tab = require('./views/Tab.jsx');
var Grid = require('./views/Grid.jsx');
var Tooltip = require('./views/Tooltip.jsx');

var routes = (
	<Router.Route handler={App}>
		<Router.DefaultRoute name='home' handler={Home} />
		<Router.Route name='textField' path='text-field' handler={TextField} />
		<Router.Route name='prismCode' path='prism-code' handler={PrismCode} />
		<Router.Route name='menu' path='menu' handler={Menu} />
		<Router.Route name='table' path='table' handler={Table} />
		<Router.Route name='button' path='button' handler={Button} />
		<Router.Route name='loading' path='loading' handler={Loading} />
		<Router.Route name='slider' path='slider' handler={Slider} />
		<Router.Route name='card' path='card' handler={Card} />
		<Router.Route name='badge' path='badge' handler={Badge} />
		<Router.Route name='toggle' path='toggle' handler={Toggle} />
		<Router.Route name='tab' path='tab' handler={Tab} />
		<Router.Route name='grid' path='grid' handler={Grid} />
		<Router.Route name='tooltip' path='tooltip' handler={Tooltip} />
	</Router.Route>
);

// start app
Router.run(routes, Router.HashLocation, function (Handler) {
	React.render(
		<Handler />,
		document.getElementsByTagName('body')[0]
	);
	console.log('App 程式載入終了');
});
