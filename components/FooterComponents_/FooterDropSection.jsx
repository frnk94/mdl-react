/** @jsx React.DOM */

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		heading: 			string, 		be --drop-down-section heading
		checked: 		boolen, 		usualy it is checked
		dropList: 		array, 			push <li> element inside
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		heading: React.PropTypes.string,
		dropList: React.PropTypes.array,
	},

	getDefaultProps: function() {
		return {
			heading: 'Your heading',
			dropList:[],
		};
	},

	render: function() {

		var list = null;

		list = this.props.dropList.map(function(item, index) {
			return (
				<li key={item.id}>
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
					defaultChecked={'checked'}
				/>
				<h1 
					className={"mdl-mega-footer--heading"}
				>
					{this.props.heading}
				</h1>
				{this.props.children}
			</div>
		);
	}

});

