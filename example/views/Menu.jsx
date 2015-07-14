"use strict";

var React = require('react');
var MDL = require('../../index.js');

var SvgIcon = React.createClass({

	propTypes: {
		icon: React.PropTypes.string.isRequired
	},

	render: function() {
		return (<i className="material-icons">{this.props.icon}</i>);
	}
});

module.exports = React.createClass({

	_menuList: [{
			text: '1111',
			events: {
				onClick: function() {
					console.log("Click")
				},
			}
		},{
			text: '2222',
			style: {
			},
		},
	],

	render: function() {
		return (
			<div>
				<MDL.Menu
					Icon={<SvgIcon icon="android" />}
					atRight={false}
					atTop={false}
					id="bottomLeft"
					menuList={this._menuList}/>

				<MDL.Menu
					style={{marginLeft: '300px'}}
					Icon={<SvgIcon icon="airplay" />}
					atRight={true}
					atTop={false}
					id="bottomRight"
					menuList={this._menuList}/>

				<MDL.Menu
					Icon={<SvgIcon icon="message" />}
					atRight={false}
					atTop={true}
					id="topLeft"
					menuList={this._menuList}/>

				<MDL.Menu
					style={{marginLeft: '300px'}}
					Icon={<SvgIcon icon="format_list_bulleted" />}
					atRight={true}
					atTop={true}
					id="topRight"
					menuList={this._menuList}/>
			</div>
		);
	}
});
