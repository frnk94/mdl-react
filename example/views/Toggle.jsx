
"use strict";

var React 			= require('react');
var MDL 				= require('../../components');
var Components 		= require('../components');

module.exports = React.createClass({

	styles: {
		demo: {
			padding: '24px',
		},
		toggle: {
			marginBottom: '10px',
		},
		card: {
			width : '100%',
			margin : '0px',
		},
		tab: {
			width: '30%',
			margin: '20px auto',
		},
		prismCode: {
			fontSize : '14px',
			marginBottom : '0',
		},
	},

	getInitialState: function() {
		return {
			url: 'Checkbox.jsx'
		};
	},

	_onChange: function(e) {
		alert('The toggle is set to ' + e.target.checked);
	},

	_radioChanged: function(e) {
		alert(e.target.name + ' is set to ' + e.target.value);
	},

	_onTabChange: function(tabIndex, e) {
		if (tabIndex === 0) {
			this.setState({url: 'Checkbox.jsx'});
		} else if (tabIndex === 1) {
			this.setState({url: 'Radio.jsx'});
		} else if (tabIndex === 2) {
			this.setState({url: 'Icon.jsx'});
		} else if (tabIndex === 3) {
			this.setState({url: 'Switch.jsx'});
		}
	},

	_renderCheckbox: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Toggle type="checkbox" text="checkbox" style={this.styles.toggle}/>
				<MDL.Toggle type="checkbox" text="Checked" isChecked={true} style={this.styles.toggle}/>
				<MDL.Toggle type="checkbox" text="No Ripple" isRipple={false} style={this.styles.toggle}/>
				<MDL.Toggle type="checkbox" text="Disabled" isDisabled={true} style={this.styles.toggle}/>
				<MDL.Toggle type="checkbox" text="Event" style={this.styles.toggle} onChange={this._onChange}/>
			</div>
		);
	},

	_renderRadio: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Toggle type="radio" text="Option1" name="option" value="1" style={this.styles.toggle}/><br/>
				<MDL.Toggle type="radio" text="Option2" name="option" value="2" isChecked={true} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="radio" text="Option3" name="option" value="3" isRipple={false} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="radio" text="Option4" name="option" value="4" isDisabled={true} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="radio" text="Option5" name="option" value="5" style={this.styles.toggle} onChange={this._radioChanged}/><br/>
			</div>
		);
	},

	_renderIcon: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Toggle type="icon-toggle" text="bluetooth_audio" style={this.styles.toggle}/><br/>
				<MDL.Toggle type="icon-toggle" text="star" isChecked={true} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="icon-toggle" text="radio_button_checked" isRipple={false} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="icon-toggle" text="notifications" isDisabled={true} style={this.styles.toggle}/><br/>
				<MDL.Toggle type="icon-toggle" text="cake" style={this.styles.toggle} onChange={this._onChange}/><br/>
			</div>
		);
	},

	_renderSwitch: function() {
		return (
			<div style={this.styles.tab}>
				<MDL.Toggle type="switch" text="switch" style={this.styles.toggle}/>
				<MDL.Toggle type="switch" text="switch on" isChecked={true} style={this.styles.toggle}/>
				<MDL.Toggle type="switch" text="No Ripple" isRipple={false} style={this.styles.toggle}/>
				<MDL.Toggle type="switch" text="Disabled" isDisabled={true} style={this.styles.toggle}/>
				<MDL.Toggle type="switch" text="Event" style={this.styles.toggle} onChange={this._onChange}/>
			</div>
		);
	},

	_renderPropsDetail: function() {
		var detail = [
			{
				key : 'text',
				type : 'node',
				state : 'required',
				content : (
					<div>
						<p>This is what will be displayed with the toggle.</p>
						<p>If the type of toggle is "icon-toggle", the text will be identified as material icon label.
						(You can search the label of material icons in <a href="https://www.google.com/design/icons/" target="_blank">https://www.google.com/design/icons/</a>.
							If the label consists of at least 2 words, remember using the underline symbol _ to joint words, i.e. open_in_browser.)</p>
					</div>),
			},
			{
				key : 'type',
				type : 'one of "checkbox", "radio", "icon-toggle", "switch"',
				state : 'required',
				content : 'The type of toggle that will be displayed',
			},
			{
				key : 'name',
				type : 'string',
				state : 'optional',
				content : 'HTML `name` attribute. If the type of toggle is "radio", the radio options in same group must have the same name.',
			},
			{
				key : 'value',
				type : 'string',
				state : 'optional',
				content : 'HTML `value` attribute. If the type of toggle is "radio", you can get the value by using onChange event',
			},
			{
				key : 'isRipple',
				type : 'boolean',
				state : 'default: true',
				content : "If false, the click event will not activate ripple animation.",
			},
			{
				key : 'isDisabled',
				type : 'boolean',
				state : 'optional',
				content : "Disables the toogle if set to true.",
			},
			{
				key : 'isChecked',
				type : 'default: false',
				state : 'optional',
				content : 'If true, the toggle will be turned on initially. If the type of toggle is "radio", there should be only one isChecked in a group.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : "Override the inline-styles of the toggle's root element.",
			},
		];

		return (<Components.Props detail={detail} title="Props" />);
	},

	_renderMethodsDetail: function() {
		var detail = [
			{
				key : 'setChecked',
				type : 'function( bool )',
				content : 'Set true to turn on the toggle, or set false to turn off.',
			},
			{
				key : 'toggle',
				type : 'function()',
				content : 'If the toogle has been turned off, the method will turn it on, vice versa.',
			},
			{
				key : 'getChecked',
				type : 'function()',
				content : 'Check whether the toggle is checked. If the toggle is turned on, true will be returned.',
			},
		];

		return (<Components.Props detail={detail} title="Methods" />);
	},

	_renderEventsDetail: function() {
		var detail = [
			{
				key : 'onChange',
				type : 'function( event )',
				content : 'Fired when the toggle changed. The function will receive event as arguments.',
			},
		];

		return (<Components.Props detail={detail} title="Events" />);
	},

	render: function() {
		return (
			<Components.Page>
				<Components.DocTitle title="Toggle" />
				<MDL.Card style={this.styles.card} shadow={6}>
					<div style={this.styles.demo}>
						<Components.DocSubtitle title="example" />
						<MDL.Tabs onChange={this._onTabChange}
							tabLabels={['Checkbox','Radio','Icon Toggle','Switch',]} >
							{this._renderCheckbox()}
							{this._renderRadio()}
							{this._renderIcon()}
							{this._renderSwitch()}
						</MDL.Tabs>
					</div>

					<MDL.PrismCode
						src={'http://fandora.github.io/mdl-react/example/codes/Toggles/'+this.state.url}
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
