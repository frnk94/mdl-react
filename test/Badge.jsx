
var Badge = require('../components/Badge.jsx');

describe('Badge', function() {

	var target;

	it('預設值是否為問號', function(done) {
		target = React.render((
			<Badge>
				<div>yourText</div>
			</Badge>
		), document.body);
		// console.log('印出 document.body', document.body.innerHTML);
		expect(jQuery('div.mdl-badge').attr('data-badge')).equal('?');
		return done();
	});

	it('改變 badge 狀態', function(done) {
		target.setProps({
			badge : 10,
		});
		expect(jQuery('div.mdl-badge').attr('data-badge')).equal('10');
		return done();
	});

	it('pure text children', function(done) {
		target = React.render((
			<Badge>
				yourText
			</Badge>
		), document.body);
		// console.log('印出 document.body', document.body.innerHTML);
		return done();
	});

	after(function() {
		document.body.innerHTML = '';
	});

});
