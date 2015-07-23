// css style
var style = {
	background: 'url("http://i.imgur.com/ZD4iVTs.jpg") center / cover',
};

var actionStyle = {
	color : '#ffffff',
	height: '52px',
	padding: '16px',
	background: 'rgba(0, 0, 0, 0.2)',
};

// react code
<MDL.Card width='256' height='256' style={style} shadow={2}>
	<MDL.CardTitle height='256'></MDL.CardTitle>
	<MDL.CardAction style={actionStyle}>
		<span className="demo-card-image__filename">Image.jpg</span>
	</MDL.CardAction>
</MDL.Card>