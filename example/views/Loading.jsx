
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			test : true
		};
	},

	// componentDidMount: function() {
	// 	var self = this;
	// 	setInterval(function() {
	// 		self.setState({
	// 			test : !self.state.test,
	// 		});
	// 	}, 1000 * 2);
	// },

	render: function() {
		return (
			<div>
				<MDL.Loading
					type="Spinner"
					singleColor={false}
					isActive={this.state.test}
				/> <br />
				<MDL.Loading
					type="ProgressBar"
					indeterminate={true}
				/>  <br />
				<MDL.Loading
					type="ProgressBar"
					indeterminate={false}
					percentage={44}
					buffer={87}
				/>
				<MDL.Loading />
			</div>
		);
	},

});
