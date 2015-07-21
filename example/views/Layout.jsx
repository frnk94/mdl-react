
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

		];
		return <Props detail={propsDetail} title="Props" />;
	},

});

module.exports = ExampleTextField;
