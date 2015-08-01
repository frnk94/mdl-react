
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

	before(function() {
		$('div#test').remove();
		$('<div id="test"></div>').appendTo(document.body);
	});

	it('建立 Table', function(done) {
		target = React.render((
			<Table selectable={true} headers={header}
				items={items}  shadow={2}
			/>
		), document.getElementById('test'));
		// console.log('印出 document.body', document.body.innerHTML);
		expect(jquery('table').toArray()).length(1);
		expect(jquery('tr').toArray()).length(3);
		return done();
	});

	it('改變 items', function(done) {
		items[1]._selected = true;
		target.setProps({
			items : items,
		});
		expect(jquery('tr.is-selected').toArray()).length(1);
		return done();
	});

	it('.forceRender()', function(done) {
		mouseClick($('table input').get(0));
		expect(jquery('tr.is-selected').toArray()).length(2);
		target.forceRender();
		expect(jquery('tr.is-selected').toArray()).length(1);
		return done();
	});

});
