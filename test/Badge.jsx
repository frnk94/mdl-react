
var Badge = require('../components/Badge.jsx');

describe('Badge', function() {

	var target;

	it('create pure text children', function(done) {
		target = React.render((
			<Badge>
				yourText
			</Badge>
		), document.body);
		return done();
	});

	it('default badge', function(done) {
		target = React.render((
			<Badge>
				yourText
			</Badge>
		), document.body);
		// console.log('印出 document.body', document.body.innerHTML);
		expect(jquery('div.mdl-badge').attr('data-badge')).equal('?');
		return done();
	});

	it('change badge', function(done) {
		target.setProps({
			badge : 10,
		});
		expect(jquery('div.mdl-badge').attr('data-badge')).equal('10');
		return done();
	});

	it('change materialDesignIcon as false', function(done) {
		target.setProps({
			materialDesignIcon : false,
		});
		expect(jquery('div.mdl-badge')).to.exist;
		return done();
	});

	it('change materialDesignIcon as true', function(done) {
		target.setProps({
			materialDesignIcon : true,
		});
		expect(jquery('div.mdl-badge.icon.material-icons')).to.exist;
		return done();
	});

	it('change noBackground as false', function(done) {
		target.setProps({
			noBackground : false,
		});
		expect(jquery('div.mdl-badge')).to.exist;
		return done();
	});

	it('change noBackground as true', function(done) {
		target.setProps({
			noBackground : true,
		});
		expect(jquery('div.mdl-badge.mdl-badge--no-background')).to.exist;
		return done();
	});

	it('change noBackground && materialDesignIcon as true', function(done) {
		target.setProps({
			noBackground : true,
			materialDesignIcon : true,
		});
		expect(jquery('div.mdl-badge.icon.material-icons.mdl-badge--no-background')).to.exist;
		return done();
	});

	it('complext test', function(done) {
		target.setProps({
			noBackground : true,
			materialDesignIcon : true,
			badge : '?',
		});
		expect(jquery('div.mdl-badge.icon.material-icons.mdl-badge--no-background').attr('data-badge')).equal('?');
		return done();
	});

	after(function() {
		document.body.innerHTML = '';
	});

});
