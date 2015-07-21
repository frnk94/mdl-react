
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');
var DocTitle = require('../document/DocTitle.jsx');

var ExampleTextField = React.createClass({

	propTypes: {
		style : React.PropTypes.string
	},

	_cron : function() {
		this.setState({
			counter : ++this.state.counter,
		});
	},

	componentDidMount: function() {
		console.log('componentDidMount');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
		// clearInterval(this._intervalId);
	},

	render: function() {

		var styles = {
			root : {
				width : '100%',
				maxWidth : '1200px',
			},
			card : {
				padding : '20px',
				width : '100%',
				// backgroundColor : '#eee',
			},
			layoutContainer : {
				position : 'relative',
				width : '100%',
				height : '300px',
				backgroundColor : 'white',
				marginBottom : '20px',
			},
			prismCode : {
				fontSize : '14px',
			},
		};

		var items = [
			<a href='#'>Link 1</a>,
			<a href='#'>Link 2</a>,
			<a href='#'>Link 3</a>,
		];

		return (
			<div style={styles.root}>
				<DocTitle title="Layout" />
				<MDL.Card style={styles.card} shadow={6}>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Fixed Header'
							href='#'
							isFixedHeader={true}
							headerItems={items}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/FixHeader.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Fixed header and drawer'
							href='#'
							isFixedHeader={true}
							headerItems={items}
							drawerItems={items}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/FixHeaderAndDrawer.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Fixed header and drawer without title'
							href='#'
							isFixedHeader={true}
							headerItems={items}
							drawerItems={items}
							noDrawerTitle={true}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/FixHeaderAndDrawerWithoutTitle.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Scrolling header'
							href='#'
							isScrollHeader={true}
							headerItems={items}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/ScrollingHeader.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Waterfall header'
							href='#'
							isScrollHeader={true}
							showHeaderSearch={true}
							onSearchSubmit={function(value){alert('onSearchSubmit' + value)}}
							waterfallItems={items}
							drawerItems={items}
							noDrawerTitle={true}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/WaterfallHeader.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
					<div style={styles.layoutContainer}>
						<MDL.Layout
							title='Scrollable tabs'
							href='#'
							headerItems={items}
							tabItems={items}
							drawerItems={items}
							noDrawerTitle={true}
						>
							<MDL.PrismCode
								src='example/codes/Layouts/ScrollableTabs.jsx'
								lang='jsx'
								style={styles.prismCode}
							/>
						</MDL.Layout>
					</div>
				</MDL.Card>
				{this._renderProps()}
			</div>
		);
	},

	_renderProps : function() {
		var propsDetail = [
			{
				key : 'title',
				type : 'element or string',
				state : 'optional',
				content : 'Header title and drawer title',
			},
			{
				key : 'href',
				type : 'string',
				state : 'optional',
				content : 'the href attribute of title',
			},
			{
				key : 'noHeaderTitle',
				type : 'bool',
				state : 'optional',
				content : 'disable displaying header title',
			},
			{
				key : 'noDrawerTitle',
				type : 'bool',
				state : 'optional',
				content : 'disable displaying drawer title',
			},
			{
				key : 'headerItems',
				type : 'array of elements',
				state : 'optional',
				content : 'array of links',
			},
			{
				key : 'headerStyle',
				type : 'object',
				state : 'optional',
				content : 'the CSS inline style of the root element of header',
			},
			{
				key : 'isFixHeader',
				type : 'bool',
				state : 'optional',
				content : 'enable fixed header',
			},
			{
				key : 'isScrollHeader',
				type : 'bool',
				state : 'optional',
				content : 'enable scrolling header',
			},
		];
		return <Props detail={propsDetail} title="Props" />;
	},

});

module.exports = ExampleTextField;
