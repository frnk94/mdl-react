
"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components');

module.exports = React.createClass({

	styles: {
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
			key : 'children',
			type : 'String or Element',
			state : 'required',
			content : (<div>
				<p>Material Design Lite Button Element</p>
				<p>Only one child is allowed. If the child is `string`, it will be wrapped in `button` element automatically
					and its style can be modified by the style props of `MDL.Button`.</p>
				<p>If the type of button is IconButton, you should manually wrap the icon element.
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
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "If style prop exists, it will override the style of the child.",
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

	_renderFAB: function() {
		return (
			<div style={this.styles.tab}>

				<MDL.Button type="FloatingActionButton" isPrimary={true} style={this.styles.button}>
					<button><i className="material-icons">notifications_none</i></button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isAccent={true} >
					<button style={this.styles.button}><i className="material-icons">public</i></button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isPrimary={true} isRipple={false}>
					<button onClick={function() {this.refs.FAB.toggleButton();}.bind(this)} style={this.styles.button}>
						<i className="material-icons">star</i>
					</button>
				</MDL.Button>

				<br />

				<MDL.Button type="FloatingActionButton">
					<button style={this.styles.button}>
						<i className="material-icons">notifications_none</i>
					</button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isRipple={false}>
					<button style={this.styles.button}>
						<i className="material-icons">public</i>
					</button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" defaultDisabled={true} ref="FAB">
					<button style={this.styles.button}>
						<i className="material-icons">star</i>
					</button>
				</MDL.Button>

				<br />

				<MDL.Button type="FloatingActionButton" isPrimary={true} isMini={true}>
					<button style={this.styles.miniFAB}>
						<i className="material-icons">notifications_none</i>
					</button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isAccent={true} isMini={true}>
					<button style={this.styles.miniFAB}>
						<i className="material-icons">public</i>
					</button>
				</MDL.Button>

				<MDL.Button type="FloatingActionButton" isPrimary isMini isRipple={false}>
					<button style={this.styles.miniFAB} onClick={function() {this.refs.FAB.toggleButton();}.bind(this)}>
						<i className="material-icons">star</i>
					</button>
				</MDL.Button>

			</div>
		);
	},

	_renderRaised: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Button type="RaisedButton" style={this.styles.button} isPrimary={true}>
					Primary
				</MDL.Button>
				<MDL.Button type="RaisedButton" isAccent={true}>
					<a href="/" target="_blank" style={this.styles.button}>Link</a>
				</MDL.Button>
				<MDL.Button type="RaisedButton" isPrimary={true} isRipple={false}>
					<button style={this.styles.button} onClick={ function() {this.refs.raised.toggleButton();}.bind(this)}>No Ripple</button>
				</MDL.Button>

				<br />

				<MDL.Button type="RaisedButton" style={this.styles.button}>
					Default
				</MDL.Button>
				<MDL.Button type="RaisedButton" isRipple={false}>
					<a href="/" target="_blank" style={this.styles.button}>Link</a>
				</MDL.Button>
				<MDL.Button type="RaisedButton" ref="raised" defaultDisabled={true}>
						<button style={this.styles.button}>Disabled</button>
				</MDL.Button>

			</div>
		);
	},

	_renderFlat: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Button type="FlatButton" style={this.styles.button} isPrimary={true}>
					Primary
				</MDL.Button>
				<MDL.Button type="FlatButton" isAccent={true}>
					<a href="/" target="_blank" style={this.styles.button}>Link</a>
				</MDL.Button>
				<MDL.Button type="FlatButton" isPrimary={true} isRipple={false}>
					<button style={this.styles.button} onClick={ function() {this.refs.flat.toggleButton();}.bind(this) }>No Ripple</button>
				</MDL.Button>

				<br />

				<MDL.Button type="FlatButton" style={this.styles.button}>
					Default
				</MDL.Button>
				<MDL.Button type="FlatButton" isRipple={false}>
					<a href="/" target="_blank" style={this.styles.button}>Link</a>
				</MDL.Button>
				<MDL.Button type="FlatButton" ref="flat" defaultDisabled={true}>
						<button style={this.styles.button}>Disabled</button>
				</MDL.Button>

			</div>
		);
	},

	_renderIcon: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Button type="IconButton" isPrimary={true}>
					<button style={this.styles.button}><i className="material-icons">mood</i></button>
				</MDL.Button>

				<MDL.Button type="IconButton" isAccent={true}>
					<button style={this.styles.button}><i className="material-icons">mood</i></button>
				</MDL.Button>

				<MDL.Button type="IconButton" isPrimary={true} isRipple={false}>
					<button style={this.styles.button} onClick={ function() {this.refs.icon.toggleButton();}.bind(this) }>
						<i className="material-icons">mood</i>
					</button>
				</MDL.Button>

				<br />
				<MDL.Button type="IconButton">
					<button style={this.styles.button}><i className="material-icons">plus_one</i></button>
				</MDL.Button>
				<MDL.Button type="IconButton" isRipple={false}>
					<button style={this.styles.button}><i className="material-icons">plus_one</i></button>
				</MDL.Button>
				<MDL.Button type="IconButton" ref="icon" defaultDisabled={true}>
					<button style={this.styles.button}><i className="material-icons">plus_one</i></button>
				</MDL.Button>
			</div>
		);
	},

	render: function() {
		return (
			<Components.Page>
				<Components.DocTitle title="Button" />
				<MDL.Card style={this.styles.card} shadow={6}>
					<div style={this.styles.demo}>
						<Components.DocSubtitle title="example" />
						<MDL.Tabs onChange={this._onTabChange}
							tabLabels={['Floating Action Buttons','Raised Buttons','Flat Buttons','Icon Buttons',]} isRipple={true}>

							{this._renderFAB()}
							{this._renderRaised()}
							{this._renderFlat()}
							{this._renderIcon()}

						</MDL.Tabs>
					</div>

					<MDL.PrismCode
						src={'http://fandora.github.io/mdl-react/example/codes/Buttons/'+this.state.url}
						lang='jsx'
						style={this.styles.prismCode}
						/>
				</MDL.Card>

				<Components.Props detail={this.propsDetail} title="Props" />
				<Components.Props detail={this.methodsDetail} title="Methods" />
			</Components.Page>
		);
	},
	});
