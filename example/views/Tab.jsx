
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	_firstTab: function() {
		this.refs.tab.setTabIndex(0);
	},

	_secondTab: function() {
		this.refs.tab.setTabIndex(1);
	},

	_thirdTab: function() {
		this.refs.tab.setTabIndex(2);
	},

	render: function() {
		return (
			<div>
				<MDL.Tabs ref="tab" tabLabels={['Starks','Lannisters','Targaryens',]} isRipple={true} defaultIndex={1}>
					<ul>
						<li>Eddard</li>
						<li>Catelyn</li>
						<li>Robb</li>
						<li>Sansa</li>
						<li>Brandon</li>
						<li>Arya</li>
						<li>Rickon</li>
					</ul>

					<ul>
						<li>Tywin</li>
						<li>Cersei</li>
						<li>Jamie</li>
						<li>Tyrion</li>
					</ul>
					<ul>
						<li>Viserys</li>
						<li>Daenerys</li>
					</ul>
				</MDL.Tabs>

				<MDL.Button type="RaisedButton"
					text="Tab1"
					isPrimary={true}
					onClick={this._firstTab} />
				<MDL.Button type="RaisedButton"
					text="Tab2"
					isPrimary={true}
					onClick={this._secondTab} />
				<MDL.Button type="RaisedButton"
					text="Tab3"
					isPrimary={true}
					onClick={this._thirdTab} />
			</div>
		);
	},

});
