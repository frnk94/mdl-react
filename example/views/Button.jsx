
"use strict";

var React 			= require('react');
var MDL 				= require('../../components');
var Props 			= require('../document/Props.jsx');
var DocTitle 		= require('../document/DocTitle.jsx');
var DocSubtitle = require('../document/DocSubtitle.jsx');

module.exports = React.createClass({

	styles: {
		main: {
			width : '100%',
			maxWidth : '1200px',
		},
		demo: {
			padding: '24px',
		},
		button: {
			marginLeft: '20%',
			marginBottom: '25px',
			marginTop: '25px',
		},
		miniFAB : {
			marginLeft: '21%',
			marginBottom: '25px',
			marginTop: '25px',
		},
		card: {
			width : '100%',
			margin : '0px',
		},
		tab: {
			paddingTop: '10px',
		},
		prismCode: {
			fontSize : '14px',
			marginBottom : '0',
		},
	},
	propsDetail: [
		{
			key : 'text',
			type : 'node',
			state : 'required',
			content : (<div>
				<p>This is what will be displayed inside the button.</p>
				<p>If the type of button is IconButton, you should manually wrap the icon element inside.
					(You can search the label of material icons in <a href="https://www.google.com/design/icons/" target="_blank">https://www.google.com/design/icons/</a>.
						If the label consists of at least 2 words, remember using the underline symbol _ to joint words, i.e. open_in_browser.)</p>
				</div>),
			},
			{
				key : 'type',
				type : 'one of "FloatingActionButton", "RaisedButton", "FlatButton", "IconButton"',
				state : 'required',
				content : 'The type of button that will be displayed',
			},
			{
				key : 'isRipple',
				type : 'boolean',
				state : 'default: true',
				content : 'If false, the click event will not activate ripple animation.',
			},
			{
				key : 'isPrimary',
				type : 'boolean',
				state : 'optional',
				content : 'If true, the button use the primary colors.',
			},
			{
				key : 'isAccent',
				type : 'boolean',
				state : 'optional',
				content : "If true, the button use the accent colors.",
			},
			{
				key : 'isMini',
				type : 'boolean',
				state : 'optional',
				content : "If true, the button will be Mini FAB. This props only works on type 'FloatingActionButton'.",
			},
			{
				key : 'defaultDisabled',
				type : 'boolean',
				state : 'optional',
				content : "Disables the button if set to true.",
			},
			{
				key : 'id',
				type : 'string',
				state : 'optional',
				content : 'HTML `id` attribute. It should be set when you need to manually bind the button with another component.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "Override the inline-styles of the button's root element.",
			},
	],
	methodsDetail: [
		{
			key : 'setDisabled',
			type : 'function( bool )',
			content : 'Set true to activate the button, or set false to disable it.',
		},
		{
			key : 'toggleButton',
			type : 'function()',
			content : 'If the button is disabled, the method will activate the button, vice versa.',
		},
		{
			key : 'getDisabled',
			type : 'function()',
			content : 'Check whether the button is disabled. If the button is disabled, true will be returned.',
		},
	],

	getInitialState: function() {
		return {
			url: 'FAB.jsx'
		};
	},

	_onTabChange: function(tabIndex, e) {
		if (tabIndex === 0) {
			this.setState({url: 'FAB.jsx'});
		} else if (tabIndex === 1) {
			this.setState({url: 'Raised.jsx'});
		} else if (tabIndex === 2) {
			this.setState({url: 'Flat.jsx'});
		} else if (tabIndex === 3) {
			this.setState({url: 'Icon.jsx'});
		}
	},

	render: function() {
		return (
			<div style={this.styles.main}>
				<DocTitle title="Button" />
				<MDL.Card style={this.styles.card} shadow={6}>
					<div style={this.styles.demo}>
						<DocSubtitle title="example" />
						<MDL.Tabs onChange={this._onTabChange}
							tabLabels={['Floating Action Buttons','Raised Buttons','Flat Buttons','Icon Buttons',]} isRipple={true}>

							<div style={this.styles.tab}>
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									text={<i className="material-icons">notifications_none</i>}
									isPrimary={true}/>
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									text={<i className="material-icons">public</i>}
									isAccent={true}/>
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									text={<i className="material-icons">star</i>}
									onClick={ function() {this.refs.FAB.toggleButton();}.bind(this) }
									isPrimary={true}
									isRipple={false}/>

								<br />
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									text={<i className="material-icons">notifications_none</i>}/>
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									text={<i className="material-icons">public</i>}
									isRipple={false}/>
								<MDL.Button type="FloatingActionButton" style={this.styles.button}
									ref="FAB"
									text={<i className="material-icons">star</i>}
									defaultDisabled={true}/>
								<br />
								<MDL.Button type="FloatingActionButton" style={this.styles.miniFAB}
									text={<i className="material-icons">notifications_none</i>}
									isPrimary={true}
									isMini={true} />
								<MDL.Button type="FloatingActionButton" style={this.styles.miniFAB}
									text={<i className="material-icons">public</i>}
									isAccent={true}
									isMini={true} />
								<MDL.Button type="FloatingActionButton" style={this.styles.miniFAB}
									text={<i className="material-icons">star</i>}
									onClick={ function() {this.refs.FAB.toggleButton();}.bind(this) }
									isPrimary={true}
									isMini={true}
									isRipple={false}/>

							</div>

							<div style={this.styles.tab}>
								<MDL.Button type="RaisedButton" style={this.styles.button}
									text="Primary"
									isPrimary={true}/>
								<MDL.Button type="RaisedButton" style={this.styles.button}
									text="Accent"
									isAccent={true}/>
								<MDL.Button type="RaisedButton" style={this.styles.button}
									text="No Ripple"
									onClick={ function() {this.refs.raised.toggleButton();}.bind(this) }
									isPrimary={true}
									isRipple={false}/>

								<br />
								<MDL.Button type="RaisedButton" style={this.styles.button}
									text="Default"/>
								<MDL.Button type="RaisedButton" style={this.styles.button}
									text="Default"
									isRipple={false}/>
								<MDL.Button type="RaisedButton" style={this.styles.button}
									ref="raised"
									text="Disabled"
									defaultDisabled={true}/>

							</div>

							<div style={this.styles.tab}>
								<MDL.Button type="FlatButton" style={this.styles.button}
									text="Primary"
									isPrimary={true}/>
								<MDL.Button type="FlatButton" style={this.styles.button}
									text="Accent"
									isAccent={true}/>
								<MDL.Button type="FlatButton" style={this.styles.button}
									text="No Ripple"
									onClick={ function() {this.refs.flat.toggleButton();}.bind(this) }
									isPrimary={true}
									isRipple={false}/>
								<br />
								<MDL.Button type="FlatButton" style={this.styles.button}
									text="Default"/>
								<MDL.Button type="FlatButton" style={this.styles.button}
									text="Default"
									isRipple={false}/>
								<MDL.Button type="FlatButton" style={this.styles.button}
									ref="flat"
									text="Disabled"
									defaultDisabled={true}/>

							</div>

							<div style={this.styles.tab}>
								<MDL.Button type="IconButton" style={this.styles.button}
									text={<i className="material-icons">mood</i>}
									isPrimary={true}/>
								<MDL.Button type="IconButton" style={this.styles.button}
									text={<i className="material-icons">mood</i>}
									isAccent={true}/>
								<MDL.Button type="IconButton" style={this.styles.button}
									text={<i className="material-icons">mood</i>}
									onClick={ function() {this.refs.icon.toggleButton();}.bind(this) }
									isPrimary={true}
									isRipple={false}/>
								<br />
								<MDL.Button type="IconButton" style={this.styles.button}
									text={<i className="material-icons">plus_one</i>}/>
								<MDL.Button type="IconButton" style={this.styles.button}
									text={<i className="material-icons">plus_one</i>}
									isRipple={false}/>
								<MDL.Button type="IconButton" style={this.styles.button}
									ref="icon"
									text={<i className="material-icons">plus_one</i>}
									defaultDisabled={true}/>

							</div>
						</MDL.Tabs>
					</div>

					<MDL.PrismCode
						src={'http://fandora.github.io/mdl-react/example/codes/Buttons/'+this.state.url}
						lang='jsx'
						style={this.styles.prismCode}
						/>
				</MDL.Card>

				<Props detail={this.propsDetail} title="Props" />
				<Props detail={this.methodsDetail} title="Methods" />
			</div>
		);
	},
	});
