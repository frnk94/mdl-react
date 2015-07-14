
"use strict";

var MDL = require('../index.js');
var React = require('react');
var Router = require('react-router');

var App = React.createClass({
	mixins : [
		Router.State,
		Router.Navigation,
	],
	render : function() {
		return (
			<div>
				<Router.RouteHandler />
			</div>
		);
	},
});

// 設定路由
var Home = require('./views/Home.jsx');
var TextField = require('./views/TextField.jsx');
var PrismCode = require('./views/PrismCode.jsx');
var Loading = require('./views/Loading.jsx');

var routes = (
	<Router.Route handler={App}>
		<Router.Route name='home' path='/' handler={Home} />
		<Router.Route name='textField' path='/text-field' handler={TextField} />
		<Router.Route name='prismCode' path='/prism-code' handler={PrismCode} />
		<Router.Route name='loading' path='/loading' handler={Loading} />
		
	</Router.Route>
);

// start app
Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(
		<Handler />,
		document.getElementsByTagName('body')[0]
	);
	console.log('App 程式載入終了');
});
