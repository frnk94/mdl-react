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
		menuList.push({text: 'New Action', events: {onClick: function() {console.log("Click");},}, });
		this.setState({menuList: menuList});
	},

	render: function() {
		return (
			<div>

				<div>
					<MDL.Menu
						Icon={<SvgIcon icon="android" />}
						fromRightToLeft={false}
						fromBottomToTop={false}
						menuList={this.state.menuList}/>

					<MDL.Menu
						style={{marginLeft: '300px'}}
						Icon={<SvgIcon icon="airplay" />}
						fromRightToLeft={true}
						fromBottomToTop={false}
						menuList={this.state.menuList}/>

					<MDL.Menu
						Icon={<SvgIcon icon="message" />}
						fromRightToLeft={false}
						fromBottomToTop={true}
						menuList={this.state.menuList}/>

					<MDL.Menu
						style={{marginLeft: '300px'}}
						Icon={<SvgIcon icon="format_list_bulleted" />}
						fromRightToLeft={true}
						fromBottomToTop={true}
						menuList={this.state.menuList}/>

					<button onClick={this.addMenuItems}>Add</button>
				</div>

				<MDL.PrismCode
					src='../../components/Menu.jsx'
					lang='jsx'
					/>

			</div>
		);
	},
});
