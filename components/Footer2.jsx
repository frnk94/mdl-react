

var React = require('react');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			
		};
	},

	propTypes: {
		leftItems : React.PropTypes.shape({
			type : React.PropTypes.oneOf(['list', 'button']).isRequired,
			items : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]),
		}),
		rightItems : React.PropTypes.shape({
			type : React.PropTypes.oneOf(['list', 'button']).isRequired,
			items : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]),
		}),
		isMini: React.PropTypes.bool,
	},

	render: function() {

		if(this.props.leftItems) {

			if(this.props.leftItems.logo) {

				var newLeftLogo = null;

				newLeftLogo = React.cloneElement(this.props.leftItems.logo, {
					className: 'mdl-logo',
				});
			}

			if(this.props.leftItems.type == 'list') {

				var newLeftList = null;

				list = this.props.leftItems.items.map(function(item, index) {
					return (
						<li>{item}</li>
					);
				});

				newLeftList = (
					<ul 
						className={
							"mdl-" + 
							(this.props.isMega ? 'mega' : 'mini') + 
							"-footer--link-list"
						}
					>
						{list}
					</ul>
				);
			}

			if(this.props.leftItems.type == 'button') {

				var newLeftBtn = null;

				item = React.cloneElement(item, {
					className: 'mdl-mini-footer--social-btn',
				});

				newLeftBtn = this.props.leftItems.items.map(function(item, index) {
					return (
							{item}
					);
				});

			}

			var left = null;

			left = (
				<div className={"mdl-"+(this.props.isMini? 'mini': 'mega')+"-footer--left-section"}>
					{newLeftLogo}
					{newLeftList}
					{newLeftBtn}
				</div>
			);
		}

		if(this.props.rightItems) {

			if(this.props.rightItems.logo) {

				var newrightLogo = null;

				newrightLogo = React.cloneElement(this.props.rightItems.logo, {
					className: 'mdl-logo',
				});
			}

			if(this.props.rightItems.type == 'list') {

				var newrightList = null;

				list = this.props.rightItems.items.map(function(item, index) {
					return (
						<li>{item}</li>
					);
				});

				newrightList = (
					<ul 
						className={
							"mdl-" + 
							(this.props.isMega ? 'mega' : 'mini') + 
							"-footer--link-list"
						}
					>
						{list}
					</ul>
				);
			}

			if(this.props.rightItems.type == 'button') {

				var newrightBtn = null;

				newrightBtn = this.props.rightItems.items.map(function(item, index) {

					item = React.cloneElement(item, {
						className: 'mdl-mini-footer--social-btn',
					});

					return (
							{item}
					);
				});

			}

			var right = null;

			right = (
				<div className={"mdl-"+(this.props.isMini? 'mini': 'mega')+"-footer--right-section"}>
					{newrightLogo}
					{newrightList}
					{newrightBtn}
				</div>
			);

		}

		return (
			<div>
				<footer className={"mdl-"+ (this.props.isMini? 'mini': 'mega')+"-footer"}>
					{left}
					{right}
				</footer>
			</div>
		);
	}

});
