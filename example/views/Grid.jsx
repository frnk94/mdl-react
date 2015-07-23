"use strict";

var React = require('react');
var MDL = require('../../components');
var Components = require('../components');

module.exports = React.createClass({

	render: function() {

		var gridDetail = [
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'css style setting',
			},
		];

		var gridCellDetail = [
			{
				key : 'col',
				type : 'number',
				state : 'optional',
				content : 'Sets the column size for the cell to col value. Value is 1-12 inclusive.',
			},
			{
				key : 'colDesktop',
				type : 'number',
				state : 'optional',
				content : 'Sets the column size for the cell to colDesktop value in desktop mode only. Value is 1-12 inclusive.',
			},
			{
				key : 'colTablet',
				type : 'number',
				state : 'optional',
				content : 'Sets the column size for the cell to colTablet value in tablet mode only. Value is 1-8 inclusive.',
			},
			{
				key : 'colPhone',
				type : 'number',
				state : 'optional',
				content : 'Sets the column size for the cell to colPhone value in phone mode only. Value is 1-4 inclusive.',
			},
			{
				key : 'isHideDesktop',
				type : 'boolean',
				state : 'optional',
				content : 'Hides the cell when in desktop mode.',
			},
			{
				key : 'isHideTablet',
				type : 'boolean',
				state : 'optional',
				content : 'Hides the cell when in tablet mode.',
			},
			{
				key : 'isHidePhone',
				type : 'boolean',
				state : 'optional',
				content : 'Hides the cell when in phone mode.',
			},
			{
				key : 'isStretch',
				type : 'boolean',
				state : 'optional',
				content : 'Stretches the cell vertically to fill the parent.',
			},
			{
				key : 'isTop',
				type : 'boolean',
				state : 'optional',
				content : 'Aligns the cell to the top of the parent.',
			},
			{
				key : 'isMiddle',
				type : 'boolean',
				state : 'optional',
				content : 'Aligns the cell to the middle of the parent.',
			},
			{
				key : 'isBottom',
				type : 'boolean',
				state : 'optional',
				content : 'Aligns the cell to the bottom of the parent.',
			},
			{
				key : 'style',
				type : 'object',
				state : 'optional',
				content : 'css style setting',
			},
		];

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

		var demoStyle = {
			padding: '24px',
		};

		return (
			<Components.Page>
				<Components.DocTitle title="Grid" />
				<MDL.Card style={cardStyle} shadow={6}>
					<div style={demoStyle}>
						<Components.DocSubtitle title="example" />
						<MDL.Grid>
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
						<MDL.Grid>
							<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
							<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
							<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
						</MDL.Grid>
						<MDL.Grid>
							<MDL.GridCell col={6} style={cellStyle}>6</MDL.GridCell>
							<MDL.GridCell col={4} style={cellStyle}>4</MDL.GridCell>
							<MDL.GridCell col={2} style={cellStyle}>2</MDL.GridCell>
						</MDL.Grid>
						<MDL.Grid>
							<MDL.GridCell col={6} colTablet={8} style={cellStyle}>6 (8 tablet)</MDL.GridCell>
							<MDL.GridCell col={4} colTablet={6} style={cellStyle}>4 (6 tablet)</MDL.GridCell>
							<MDL.GridCell col={2} colPhone={4} style={cellStyle}>2 (4 phone)</MDL.GridCell>
						</MDL.Grid>
					</div>
					<MDL.PrismCode
						src='http://fandora.github.io/mdl-react/example/codes/Grid.js'
						lang='jsx'
						style={prismCode}
					/>
				</MDL.Card>
				<Components.MainContent>
					<p>The grid component is a simplified method for laying out content for multiple screen sizes. It reduces the usual coding burden required to correctly display blocks of content in a variety of display conditions.</p>
					<p>The grid is defined and enclosed by a container element. A grid has 12 columns in the desktop screen size, 8 in the tablet size, and 4 in the phone size, each size having predefined margins and gutters. Cells are laid out sequentially in a row, in the order they are defined, with some exceptions:
						<br /><br />
						1. If a cell does not fit in the row in one of the screen sizes, it flows into the following line.
						<br />
						2. If a cell has a specified column size equal to or larger than the number of columns for the current screen size, it takes up the entirety of its row.</p>
						<p>When you use this grid system, you need to write a Grid and let GridCell inside and then it will work. Please refer to the example. </p>


				</Components.MainContent>
				<Components.Props detail={gridDetail} title="Props (Grid)" />
				<Components.Props detail={gridCellDetail} title="Props (GridCell)" />
			</Components.Page>
		);
	}

});
