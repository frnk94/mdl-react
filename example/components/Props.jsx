var React = require('react');

var Props = React.createClass({

	render: function() {

		var style = {
			position : 'relative',
			width : '100%',
			marginTop : '40px',
		};

		var titleStyle = {
			left : '0',
			top : '0',
			width : '160px',
			margin : '0',
			position : 'absolute',
		};

		var contentAreaStyle = {
			height : '100%',
			marginLeft : '160px',
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
			lineHeight : '20px',
		};
		
		var content = this.props.detail.map(function(item, key) {
			return (
				<div style={style} key={key}>
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
				<h5>{this.props.title}</h5>
				<div>
					{content}
				</div>
			</div>
		);
	}

});

module.exports = Props;