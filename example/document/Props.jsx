var React = require('react');

var Props = React.createClass({

	render: function() {

		var style = {
			position : 'relative',
			maxWidth : '1200px',
		};

		var titleStyle = {
			height : '100%',
			width : '100px',
			float : 'left',
			position : 'relative',
		};

		var contentAreaStyle = {
			height : '100%',
			float : 'right',
			marginLeft : '100px',
			position : 'relative',
			borderBottom : '1px solid #E0E0E0',
		};

		var typeStyle = {
			color : '#757575',
			marginRight : '8px',
		};
		
		var content = this.props.detail.map(function(item, key) {
			return (
				<div style={style}>
					<h6 style={titleStyle}>{item.key}</h6>
					<div style={contentAreaStyle}>
						<p>
							<span style={typeStyle}>{item.type}</span>
							<label>{item.state}</label>
						</p>
						<p>
							{item.content}
						</p>
					</div>
				</div>
			);
		});

		return (
			<div>
				<h5>Props</h5>
				<div>
					{content}
				</div>
			</div>
		);
	}

});

module.exports = Props;