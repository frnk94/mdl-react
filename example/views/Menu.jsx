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

	_menuList: [{
		text: 'Some Action',
		events: {
			onClick: function() {
				console.log("Click")
			},
		}
	},{
		text: 'Another Action',
		style: {
		},
	},
	],

	render: function() {
		return (
			<div>

				<div>
					<MDL.Menu
						Icon={<SvgIcon icon="android" />}
						fromRightToLeft={false}
						fromBottomToTop={false}
						menuList={this._menuList}/>

					<MDL.Menu
						style={{marginLeft: '300px'}}
						Icon={<SvgIcon icon="airplay" />}
						fromRightToLeft={true}
						fromBottomToTop={false}
						menuList={this._menuList}/>

					<MDL.Menu
						Icon={<SvgIcon icon="message" />}
						fromRightToLeft={false}
						fromBottomToTop={true}
						menuList={this._menuList}/>

					<MDL.Menu
						style={{marginLeft: '300px'}}
						Icon={<SvgIcon icon="format_list_bulleted" />}
						fromRightToLeft={true}
						fromBottomToTop={true}
						menuList={this._menuList}/>
				</div>

				<MDL.PrismCode
					src='../../components/Menu.jsx'
					lang='jsx'
					/>
			</div>
		);
	},
});
