"use strict";

var React 			= require('react');
var MDL 				= require('../../components');
var Components 		= require('../components');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			menuList: [
				{
					text: 'Some Action',
					events: {
						onClick: function(e) {
							alert("Click");
						},
					},
				},
				{
					text: 'Another Action',
					style: {color: 'red'},
				},
				{
					text: 'Disabled Action',
					isDisabled: true,
				},
			],
		};
	},

	styles: {
		demo: {
			padding: '24px',
		},
		card: {
			width : '100%',
			margin : '0px',
		},
		block: {
			display: 'flex',
			width: '50%',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: '80px',
			paddingBottom: '80px',
		},
		menu: {
			marginLeft: '70%',
		},
		prismCode: {
			fontSize : '14px',
			marginBottom : '0',
		},
	},

	_renderPropsDetail: function() {
		var propsDetail = [
			{
				key : 'children',
				type : 'element',
				state : 'required',
				content : 'A clickable element that will open the menu list. If there are multiple children, only the first child will be rendered.',
			},
			{
				key : 'menuList',
				type : 'Array of Object',
				state : 'required',
				content : (
					<div>
						<p>There are four properties can contains in object</p>
						<p><b>text</b>: string or element. required. The text will be rendered on the list by the order in array.</p>
						<p><b>events</b>: object. optional. properties should be React events. When you interact with the the item, some of events will be triggered.</p>
						<p><b>style</b>: object. optional. Override the inline-styles of the item's element.</p>
						<p><b>isDisabled</b>: boolean. optional. Disables item if set to true.</p>
					</div>
				),
			},
			{
				key : 'openDirection',
				type : 'one of "bottom-left", "bottom-right", "top-left", "top-right"',
				state : 'default: bottom-left',
				content : 'This is the placement of the menu relative to the IconButton.',
			},
			{
				key : 'isRipple',
				type : 'boolean',
				state : 'optional',
				content : "If false, the click event will not activate ripple animation.",
			},
			{
				key : 'style',
				type : 'boolean',
				state : 'optional',
				content : "Override the inline-styles of the menu's root element.",
			},
		];

		return (<Components.Props detail={propsDetail} title="Props" />);
	},
	render: function() {
		return (
			<Components.Page>
				<Components.DocTitle title="Menu" />
				<MDL.Card style={this.styles.card} shadow={6}>
					<div style={this.styles.demo}>
						<Components.DocSubtitle title="example" />
						<div style={this.styles.block}>
							<MDL.Menu
								openDirection='bottom-left'
								menuList={this.state.menuList}>
								<MDL.Button type="IconButton"
									text={<i className="material-icons">mood</i>}
									isRipple={true}/>
							</MDL.Menu>

							<MDL.Menu
								style={this.styles.menu}
								openDirection='bottom-right'
								menuList={this.state.menuList}>
								<MDL.Button type="IconButton"
									text={<i className="material-icons">airplay</i>}
									isRipple={true}/>
							</MDL.Menu>
						</div>

						<div style={this.styles.block}>
							<MDL.Menu
								openDirection='top-left'
								menuList={this.state.menuList}>
								<MDL.Button type="IconButton"
									text={<i className="material-icons">message</i>}
									isRipple={true}/>
							</MDL.Menu>
							<MDL.Menu
								style={this.styles.menu}
								openDirection='top-right'
								menuList={this.state.menuList}>
								<MDL.Button type="IconButton"
									text={<i className="material-icons">format_list_bulleted</i>}
									isRipple={true}/>
							</MDL.Menu>
						</div>
					</div>
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/Menu.jsx'
						lang='jsx'
						style={this.styles.prismCode}
					/>
				</MDL.Card>
				{this._renderPropsDetail()}
			</Components.Page>
		);
	},

});
