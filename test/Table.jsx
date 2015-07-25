
var Table = require('../components/Table.jsx');

describe('Table', function() {

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
	];

	var target;

	it('建立 Table', function(done) {
		target = React.render((
			<Table selectable={true} headers={header}
				items={items}  shadow={2}
			/>
		), document.body);
		// console.log('印出 document.body', document.body.innerHTML);
		expect(jQuery('table').toArray()).length(1);
		expect(jQuery('tr').toArray()).length(3);
		return done();
	});

	it('改變 items', function(done) {
		items[1]._selected = true;
		target.setProps({
			items : items,
		});
		expect(jQuery('tr.is-selected').toArray()).length(1);
		return done();
	});

	after(function() {
		document.body.innerHTML = '';
	});

});
