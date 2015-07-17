"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {

		var cellStyle = {
			height : '100px',
			backgroundColor : '#00CACA',
			color : '#ffffff',
			textAlign : 'center',
			lineHeight : '100px',
			fontSize : '24px',
		};
		var prismCode = {
			fontSize : '14px',
			marginBottom : '0px',
		};

		var cardStyle = {
			width : '100%',
			margin : '0px',
		};

		var gridStyle = {
			margin : '0',
		};

		var style = {
			maxWidth : '1200px',
		};

		return (
			<div style={style}>
				<MDL.Card style={cardStyle} shadow={6}>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
						<MDL.GridCell col={1} style={cellStyle}>1</MDL.GridCell>
					</MDL.Grid>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
						<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
						<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
					</MDL.Grid>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={6} style={cellStyle}>6</MDL.GridCell>
						<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
						<MDL.GridCell col={2} style={cellStyle}>2</MDL.GridCell>
					</MDL.Grid>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={6} colTablet={8} style={cellStyle}>6 (8 tablet)</MDL.GridCell>
						<MDL.GridCell col={4} colTablet={6} style={cellStyle}>4 (6 tablet)</MDL.GridCell>
						<MDL.GridCell col={2} colPhone={4} style={cellStyle}>2 (4 phone)</MDL.GridCell>
					</MDL.Grid>
					<MDL.PrismCode
						src='../codes/Grid.js'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
			</div>
		);
	}

});