var header = [
	{
		title : '歌曲',
		key : 'song',
		style : {
			textAlign : 'left',
		}
	},
	{
		title : '歌手',
		key : 'singer',
	},
	{
		key : 'country',
	},
];

var items = [
	{
		id : 1,
		song : 'Au bar',
		singer : 'Joyce Jonathan',
		country : '法國',
		link : 'https://www.youtube.com/watch?v=pX08MtExn7U',
	},
	{
		id : 2,
		song : 'Demain',
		singer : 'Berry',
		country : '法國',
		link : 'https://www.youtube.com/watch?v=9iPGvsRijrc',
	},
	{
		id : 3,
		song : 'Master of Tides',
		singer : 'Lindsey Stirling',
		country : '美國',
		link : 'https://www.youtube.com/watch?v=RrutzRWXkKs',
	},
	{
		id : 4,
		song : 'Photograph',
		singer : 'Ed Sheeran',
		country : '英國',
		link : 'https://www.youtube.com/watch?v=SPKBtZHuzKY',
	},
];

var itemStyles = [
	{
		textAlign : 'left',
	},
	{
		color : '#00CACA',
	},
	{},
];

<Table selectable={true} headers={header} items={items} itemStyles={itemStyles} shadow={2} />
