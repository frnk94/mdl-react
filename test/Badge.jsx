
var Badge = require('../components/Badge.jsx');

describe('Badge', function() {

	var target;

	it('創建 pure text children', function(done) {
		target = React.render((
			<Badge>
				yourText
			</Badge>
		), document.body);
		return done();
	});
	it('預設 badge 是否為問號', function(done) {
		target = React.render((
			<Badge>
				yourText
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
	it('觀察 materialDesignIcon 狀態 為 false', function(done) {
		target.setProps({
			materialDesignIcon : false,
		});
		expect(jQuery('div.mdl-badge')).to.exist
		return done();
	});
	it('觀察 materialDesignIcon 狀態 為 true', function(done) {
		target.setProps({
			materialDesignIcon : true,
		});
		expect(jQuery('div.mdl-badge.icon.material-icons')).to.exist;
		return done();
	});
	it('改變 materialDesignIcon 狀態 為 false', function(done) {
		target.setProps({
			materialDesignIcon : false,
		});
		expect(jQuery('div.mdl-badge')).to.exist
		return done();
	});
	it('改變 materialDesignIcon 狀態 為 true', function(done) {
		target.setProps({
			materialDesignIcon : true,
		});
		expect(jQuery('div.mdl-badge.icon.material-icons')).to.exist
		return done();
	});
	it('觀察 noBackground 狀態 為 false', function(done) {
		target.setProps({
			noBackground : false,
		});
		expect(jQuery('div.mdl-badge')).to.exist
		return done();
	});
	it('觀察 noBackground 狀態 為 true', function(done) {
		target.setProps({
			noBackground : true,
		});
		expect(jQuery('div.mdl-badge.mdl-badge--no-background')).to.exist
		return done();
	});
	it('改變 noBackground 狀態 為 false', function(done) {
		target.setProps({
			noBackground : false,
		});
		expect(jQuery('div.mdl-badge')).to.exist
		return done();
	});
	it('改變 noBackground 狀態 為 true', function(done) {
		target.setProps({
			noBackground : true,
		});
		expect(jQuery('div.mdl-badge.mdl-badge--no-background')).to.exist
		return done();
	});
	it('觀察 noBackground && materialDesignIcon 狀態 為 true', function(done) {
		target.setProps({
			noBackground : true,
			materialDesignIcon : true,
		});
		expect(jQuery('div.mdl-badge.icon.material-icons.mdl-badge--no-background')).to.exist
		return done();
	});
	it('觀察 noBackground && materialDesignIcon 狀態 為 true 且 badge 為 \'?\'', function(done) {
		target.setProps({
			noBackground : true,
			materialDesignIcon : true,
			badge : '?',
		});
		expect(jQuery('div.mdl-badge.icon.material-icons.mdl-badge--no-background').attr('data-badge')).equal('?')
		return done();
	});

	after(function() {
		document.body.innerHTML = '';
	});

});
