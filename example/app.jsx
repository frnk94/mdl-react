
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
			{
				text : (
					<span>
						by Fandora Shop
					</span>
				),
				href : 'http://FandoraShop.com',
				target : '_blank',
			},
		];
		var drawerItems = [
			{ text : 'Text Field', href : '#text-field' },
			{ text : 'Menu', href : '#menu' },
			{ text : 'Table', href : '#table' },
			{ text : 'Button', href : '#button' },
			{ text : 'Loading', href : '#loading' },
			{ text : 'Slider', href : '#slider' },
			{ text : 'Card', href : '#card' },
			{ text : 'badge', href : '#badge' },
			// {
			// 	text : (
			// 		<span>
			// 			by Fandora Shop RD Team
			// 		</span>
			// 	),
			// 	href : 'http://FandoraShop.com',
			// 	target : '_blank',
			// },
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
				headerItems={headerItems}
				drawerItems={drawerItems}
				drawerStyle={{color:'red'}}
				// isTransparent={true}
				// headerColor='red'
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
