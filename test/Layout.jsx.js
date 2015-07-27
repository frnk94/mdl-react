
var React = require('react/addons');
var Layout = require('../components/Layout.jsx');

describe('Layout', function() {

	var target;

	it('create Layout', function(done) {
		var isClicked = false;
		function myOnClick(e) {
			console.log('clicked');
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
		), jquery('#test').get(0));
		return done();
		// expect(jquery('#testLink1')).length(1);
		// jquery('#testLink1').get(0).click();
		// setTimeout(function() {
		// 	expect(isClicked).equal(true);
		// 	return done();
		// }, 100);
	});

	it('test2', function(done) {
		console.log(typeof jquery('#testLink1').gte(0).click);
		return done();
	});

});
