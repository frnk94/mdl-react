"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components');

module.exports = React.createClass({

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
				type : 'Array of element',
				state : 'required',
				content : (
					<div>
						<p>The amount of children must have at least 2 element. One is the clickable element to open menu list, and the others are the items in menu list.</p>
						<p><b>Clickable Element</b>: This element must be the first child.</p>
						<p><b>Item in menu list</b>: If you want to disable this item, put `disabled` in props.</p>
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

							<MDL.Menu openDirection='bottom-left'>
								<MDL.Button type="IconButton">
									<button><i className="material-icons">mood</i></button>
								</MDL.Button>
								<div onClick={function(e) {alert("Click");}.bind(this)}> Some Action </div>
								<div style={{color: 'red'}}> Another Action </div>
								<div disabled>Disabled Action</div>
							</MDL.Menu>

							<MDL.Menu
								isRipple={false}
								style={this.styles.menu}
								openDirection='bottom-right'>

								<MDL.Button type="IconButton">
									<button><i className="material-icons">airplay</i></button>
								</MDL.Button>
								<div onClick={function(e) {alert("Click");}.bind(this)}> Some Action </div>
								<div style={{color: 'red'}}> Another Action </div>
								<div disabled>Disabled Action</div>
							</MDL.Menu>
						</div>

						<div style={this.styles.block}>
							<MDL.Menu openDirection='top-left'>
								<MDL.Button type="IconButton">
									<button><i className="material-icons">message</i></button>
								</MDL.Button>
								<div onClick={function(e) {alert("Click");}.bind(this)}> Some Action </div>
								<div style={{color: 'red'}}> Another Action </div>
								<div disabled>Disabled Action</div>
							</MDL.Menu>

							<MDL.Menu style={this.styles.menu} openDirection='top-right'>
								<MDL.Button type="IconButton">
									<button><i className="material-icons">format_list_bulleted</i></button>
								</MDL.Button>
								<div onClick={function(e) {alert("Click");}.bind(this)}> Some Action </div>
								<div style={{color: 'red'}}> Another Action </div>
								<div disabled>Disabled Action</div>
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
