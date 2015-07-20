/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		title: string, be --drop-down-section title
		checked: boolen, usualy it is checked
		dropList: array, push <li> element inside
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		checked : React.PropTypes.bool,
		dropList: React.PropTypes.array,
	},

	getDefaultProps: function() {
		return {
			checked: true,
			title: 'Your title',
			dropList:[],
		};
	},

	render: function() {

		var list = null;

		list = this.props.dropList.map(function(item, index) {
			return (
				<li>
					<a 
						href={item.href}
					>
						{item.text}
					</a>
				</li>
			);
		});

		return (
			<div className={"mdl-mega-footer--drop-down-section"}>
				<input 
					className={"mdl-mega-footer--heading-checkbox"}
					type={"checkbox"}
					checked={this.props.checked}
				/>
					<h1 className={"mdl-mega-footer--heading"}>{this.props.title}</h1>
					{this.props.children}
			</div>
		);
	}

});

