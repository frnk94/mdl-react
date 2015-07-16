
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
					Spinner={true}
					singleColor={false}
					isActive={this.state.test}
				/> <br />
				<MDL.Loading
					ProgressBar={true}
					indeterminate={true}
					Spinner={false}
				/>  <br />
				<MDL.Loading
					ProgressBar={true}
					indeterminate={false}
					Spinner={false}
					percentage={44}
					buffer={87}
				/>
				<MDL.Loading />
			</div>
		);
	},

});
