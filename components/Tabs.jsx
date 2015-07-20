
var React = require('react');

/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		children: isRequired, the content of the tabs
 *		tabLabels: isRequired, Array of Element, its length should equal to the number of children.
 *		isRipple: Whether applies ripple click effect to tab，Default true
 *		style: Object, Entire tabs CSS style
 *		defaultIndex: default displayed tab's index,
 *	State
 *		tabIndex
 *	Method
 *		setTabIndex: change to another tab
 *		getTabLabel: get the label of currently active tab
 *		getTabIndex: get the index of currently active tab
 */

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			isRipple: true,
			style: {},
			defaultIndex: 0,
		};
	},

	propTypes: {
		tabLabels: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
		children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
		defaultIndex: React.PropTypes.number,
		onChange: React.PropTypes.func,
	},

	getInitialState: function() {
		return {
			tabIndex: this.props.defaultIndex >= this.props.tabLabels.length ? 0 : this.props.defaultIndex,
		};
	},

	componentWillMount: function() {
		if(!this.props.children instanceof Array ){
			console.warn("MDL.Tabs: The tabs should have at least two `children`");
		} else if (!this.props.tabLabels instanceof Array || this.props.tabLabels.length == 1){
			console.warn("MDL.Tabs: The props `tabLabels` should be an array that contains at least two item");
		} else if (this.props.tabLabels.length !== this.props.children.length){
			console.warn("MDL.Tabs: The number of `tabLabels` should be same as props `children`");
		}
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	setTabIndex: function(index, e) {
		if(index == this.state.tabIndex) return;
		if(this.props.onChange) this.props.onChange(index, e);
		this.setState({tabIndex: index});
	},

	getTabLabel: function() {
		return this.props.tabLabels[this.state.tabIndex];
	},

	getTabIndex: function() {
		return this.state.tabIndex;
	},

	render: function() {

		var tabBars = [];
		var tabPanels = [];
		this.props.tabLabels.map(function(label, index){
				var id = 'mdl-tab-' + label.split(' ').join('');
				tabBars.push(
					<a key={label} href={'#'+id}
						className={"mdl-tabs__tab " + (index == this.state.tabIndex? 'is-active':'')}
						onClick={this.setTabIndex.bind(this, index)}>
						{label}
					</a>
				);
				tabPanels.push(
					<div key={label} id={id}
						className={"mdl-tabs__panel " + (index == this.state.tabIndex? 'is-active':'')}>
						{this.props.children[index]}
					</div>
				);
		}.bind(this));

		return (
			<div className={"mdl-tabs mdl-js-tabs "+(this.props.isRipple?'mdl-js-ripple-effect':'')} style={this.props.style}>
				<div className="mdl-tabs__tab-bar">
					{tabBars}
				</div>
				{tabPanels}
			</div>
		);
	}

});
