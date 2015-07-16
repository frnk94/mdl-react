
var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			isRipple: true,
			style: {},
			defaultIndex: 0,
		};
	},

	propTypes: {
		tabLabels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
		defaultIndex: React.PropTypes.number,
	},

	getInitialState: function() {
		return {
			tabIndex: this.props.defaultIndex >= this.props.tabLabels.length ? 0 : this.props.defaultIndex,
		};
	},

	componentWillMount: function() {
		if(!this.props.children instanceof Array ){
			console.warn("MDL.Tabs: The tabs should have at least two `children`");
		} else if (this.props.tabLabels.length !== this.props.children.length){
			console.warn("MDL.Tabs: The number of `tabLabels` should be same as props `children`");
		}
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	setTabIndex: function(index) {
		this.setState({tabIndex: index});
		return this.state.tabIndex;
	},

	render: function() {

		var tabBars = [];
		var tabPanels = [];
		this.props.tabLabels.map(function(label, index){
			if(index == this.state.tabIndex)
			{
				tabBars.push(<a key={label} ref={'bar-'+label} href={'#mdl-tab-'+label}
					className="mdl-tabs__tab is-active" onClick={this.setTabIndex.bind(this, index)}>{label}</a>);
				tabPanels.push(<div key={label} ref={'panel-'+label} id={'mdl-tab-'+label}
					className="mdl-tabs__panel is-active">{this.props.children[index]}</div>);
			} else {
				tabBars.push(<a key={label} ref={'bar-'+label} href={'#mdl-tab-'+label}
					className="mdl-tabs__tab" onClick={this.setTabIndex.bind(this, index)}>{label}</a>);
				tabPanels.push(<div key={label} ref={'panel-'+label} id={'mdl-tab-'+label}
					className="mdl-tabs__panel">{this.props.children[index]}</div>);
			}
		}.bind(this));

		return (
			<div className={"mdl-tabs mdl-js-tabs "+(this.props.isRipple?'mdl-js-ripple-effect':'')}>
			  <div className="mdl-tabs__tab-bar">
					{tabBars}
			  </div>
				{tabPanels}
			</div>
		);
	}

});
