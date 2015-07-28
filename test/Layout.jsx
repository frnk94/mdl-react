
var React = require('react/addons');
var Layout = require('../components/Layout.jsx');

describe('Layout', function() {

	var target;
	var isClicked = false;

	before(function() {
		$('div#test').remove();
		$('<div id="test"></div>').appendTo(document.body);
	});

	it('create Layout', function() {
		function myOnClick(e) {
			isClicked = true;
		};
		var links = [
			<a href='#' id='testLink1' className='testLink1' onClick={myOnClick}>
				Link 1
			</a>,
			<a href='#'>Link 2</a>,
		];
		target = React.render((
			<Layout
				title='Fixed Header'
				isFixedHeader={true}
				headerLinks={links}
			>
				put your content here
			</Layout>
		), document.getElementById('test'));
		expect(jquery('#testLink1')).length(1);
	});

	it('test click', function(done) {
		mouseClick(jquery('#testLink1').get(0));
		setTimeout(function() {
			expect(isClicked).equal(true);
			return done();
		}, 500);
	});

});
