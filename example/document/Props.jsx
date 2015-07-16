var React = require('react');

var Props = React.createClass({

	render: function() {

		var style = {
			position : 'relative',
			maxWidth : '1200px',
		};

		var titleStyle = {
			left : '0',
			top : '0',
			width : '100px',
			margin : '0',
			position : 'absolute',
		};

		var contentAreaStyle = {
			height : '100%',
			marginLeft : '100px',
			position : 'relative',
			borderBottom : '1px solid #E0E0E0',
			marginBottom : '30px',
		};

		var typeStyle = {
			color : 'rgba(0, 0, 0, 0.54)',
			marginRight : '24px',
		};

		var contentStyle = {
			marginTop : '-4px',
			marginBottom : '30px',
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
						<p style={contentStyle}>
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