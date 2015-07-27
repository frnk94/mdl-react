"use strict";

var React 			= require('react');
var MDL 				= require('../../components');
var Components 		= require('../components');

module.exports = React.createClass({

	styles: {
		demo: {
			padding: '24px',
		},
		card: {
			width : '100%',
			margin : '0px',
		},
		tab: {
			height: '150px',
		},
		menu: {
			marginLeft: '70%',
		},
		button: {
			margin:'0 50px'
		},
		prismCode: {
			fontSize : '14px',
			marginBottom : '0',
		},
	},

	_renderPropsDetail: function() {
		var detail = [
			{
				key : 'children',
				type : 'Array of element',
				state : 'required',
				content : (
					<div>
						<div>The content in the corresponding tab. </div>
						<div>A child is corresponded by the order of the array, i.e. the content in first tab is the first child, the content in second tab is the second child, and so on.</div>
					</div>
				),
			},
			{
				key : 'tabLabels',
				type : 'Array of string or element',
				state : 'required',
				content : 'Sets the string of element of the tab item to the string specified. It should have at least two items in the array.',
			},
			{
				key : 'defaultIndex',
				type : 'number',
				state : 'default: 0',
				content : 'Specify initial visible tab index.'+
					'If defaultIndex is set but larger than the total amount of tabs, defaultIndex will be set to 0',
			},
			{
				key : 'isRipple',
				type : 'boolean',
				state : 'default: true',
				content : 'If false, the click event will not activate ripple animation.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "Override the inline-styles of the tabs' root element.",
			},
		];

		return (<Components.Props detail={detail} title="Props" />);
	},

	_renderMethodsDetail: function() {
		var detail = [
			{
				key : 'setTabIndex',
				type : 'function( number )',
				content : 'Set the active tab to specified label by the index. If index is greater than the total amount of tabs, it will take no effect.',
			},
			{
				key : 'getTabLabel',
				type : 'function()',
				content : 'Get the label of currently active tab',
			},
			{
				key : 'getTabIndex',
				type : 'function()',
				content : 'Get the index of currently active tab',
			},
		];

		return (<Components.Props detail={detail} title="Methods" />);
	},

	_renderEventsDetail: function() {
		var detail = [
			{
				key : 'onChange',
				type : 'function( index, event )',
				content : 'Fired when the active tab changed. The function will receive the index of the new active tab and event as arguments.',
			},
		];

		return (<Components.Props detail={detail} title="Events" />);
	},

	_renderTab1: function() {
		return (
			<ul style={this.styles.tab}>
				<li>Eddard</li>
				<li>Catelyn</li>
				<li>Robb</li>
				<li>Sansa</li>
				<li>Brandon</li>
				<li>Arya</li>
				<li>Rickon</li>
			</ul>
		);
	},

	_renderTab2: function() {
		return (
			<ul style={this.styles.tab}>
				<li>Tywin</li>
				<li>Cersei</li>
				<li>Jamie</li>
				<li>Tyrion</li>
			</ul>
		);
	},

	_renderTab3: function() {
		return (
			<ul style={this.styles.tab}>
				<li>Viserys</li>
				<li>Daenerys</li>
			</ul>
		);
	},

	_renderControlPanel: function() {
		return (
			<div style={{margin: '10px auto'}}>
				<MDL.Button type="FloatingActionButton" isMini isAccent style={this.styles.button}>
					<button onClick={this.previousTab}><i className="material-icons">arrow_back</i></button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isMini isAccent style={this.styles.button}>
					<button onClick={this.nextTab}><i className="material-icons">arrow_forward</i></button>
				</MDL.Button>
			</div>
		);
	},

	nextTab: function() {
		this.refs.tab.setTabIndex( (this.refs.tab.getTabIndex() + 1) % 3 );
	},

	previousTab: function() {
		var index = this.refs.tab.getTabIndex() - 1;
		if( index<0 ) index = 2;
		this.refs.tab.setTabIndex( index % 3 );
	},

	changedTab: function(index, e) {
		console.log("The tab is changed to", index);
	},

	render: function() {
		return (
			<Components.Page>
				<Components.DocTitle title="Tabs" />
				<MDL.Card style={this.styles.card} shadow={6}>
					<div style={this.styles.demo}>
						<Components.DocSubtitle title="example" />
						<MDL.Tabs ref="tab"
							tabLabels={['Starks','Lannisters','Targaryens',]} defaultIndex={1} onChange={this.changedTab}
						>
							{this._renderTab1()}
							{this._renderTab2()}
							{this._renderTab3()}
						</MDL.Tabs>
					</div>
					{this._renderControlPanel()}
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/Tabs.jsx'
						lang='jsx'
						style={this.styles.prismCode}
					/>
				</MDL.Card>
				{this._renderPropsDetail()}
				{this._renderMethodsDetail()}
				{this._renderEventsDetail()}
			</Components.Page>
		);
	},

});
