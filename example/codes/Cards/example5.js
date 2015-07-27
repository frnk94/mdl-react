// css style
var style = {
	width: '256px',
	height: '276px',
	background: '#46B6AC',
	color: '#ffffff',
};

var titleStyle = {
	color :'#ffffff',
};

// react code
<MDL.Card style={style}>
	<MDL.CardTitle height="20" style={titleStyle}>
		<h6>media</h6>
	</MDL.CardTitle>
	<MDL.CardMedia height="256" width="256">
		<img src="http://i.imgur.com/ZD4iVTs.jpg" width="256" height="256" border="0" alt="" />
	</MDL.CardMedia>
</MDL.Card>