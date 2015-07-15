"use strict";

var React = require('react');
var MDL = require('../../index.js');

var SvgIcon = React.createClass({

	propTypes: {
		icon: React.PropTypes.string.isRequired
	},

	render: function() {
		return (<i className="material-icons">{this.props.icon}</i>);
	},

});

module.exports = React.createClass({

	getInitialState: function() {
		return {
			menuList: [
			{
				text: 'Some Action',
				events: {
					onClick: function() {
						console.log("Click")
					},
				},
			},
			{
				text: 'Another Action',
				style: {},
			},
			],
		};
	},

	addMenuItems: function(){
		var menuList = this.state.menuList;
		menuList.push({text: 'New Action', events: {onClick: function() {console.log("Click");},},isDisabled:true, });
		this.setState({menuList: menuList});
	},

	render: function() {
		return (
			<div>

				<div style={{position:'relative',}}>
					<MDL.Button type="IconButton"
						text={<i className="material-icons">mood</i>}
						isRipple={true}
						id={'mdl-menu-1'}/>
					<MDL.Menu
						buttonId={'mdl-menu-1'}
						fromRightToLeft={false}
						fromBottomToTop={false}
						menuList={this.state.menuList}/>
				</div><br />

				<div style={{position:'relative', marginLeft:'20%'}} >
					<MDL.Button type="IconButton"
						text={<i className="material-icons">airplay</i>}
						isRipple={true}
						id={'mdl-menu-2'}/>
					<MDL.Menu
						buttonId={'mdl-menu-2'}
						style={{marginLeft: '300px'}}
						fromRightToLeft={true}
						fromBottomToTop={false}
						menuList={this.state.menuList}/>
				</div><br />

				<div style={{position:'relative',}}>
					<MDL.Button type="IconButton"
						text={<i className="material-icons">message</i>}
						isRipple={true}
						id={'mdl-menu-3'}/>
					<MDL.Menu
						buttonId={'mdl-menu-3'}
						fromRightToLeft={false}
						fromBottomToTop={true}
						menuList={this.state.menuList}/>
				</div><br />

				<div style={{position:'relative', marginLeft:'20%'}}>
					<MDL.Button type="IconButton"
						text={<i className="material-icons">format_list_bulleted</i>}
						isRipple={true}
						id={'mdl-menu-4'}/>
					<MDL.Menu
						buttonId={'mdl-menu-4'}
						fromRightToLeft={true}
						fromBottomToTop={true}
						menuList={this.state.menuList}/>
				</div><br />

				<button onClick={this.addMenuItems}>Add</button>

				<MDL.PrismCode
					src='http://fandora.github.io/mdl-react/components/Menu.jsx'
					lang='jsx'
				/>

			</div>
		);
	},
});
