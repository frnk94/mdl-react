
var MDL = {
	Menu : require('../components/Menu.jsx'),
	Button : require('../components/Button.jsx'),
};


describe('Badge', function() {

	var target;

	before(function() {
		$('div#test').remove();
		$('<div id="test"></div>').appendTo(document.body);
	});

	it('是否 child 的 className 可以傳遞下去', function() {
		target = React.render((
			<MDL.Menu openDirection='bottom-left'>
				<MDL.Button type="IconButton">
					<button className='TEST_CLASS_3'><i className="material-icons">mood</i></button>
				</MDL.Button>
				<div className='TEST_CLASS_1'> Another Action </div>
				<div className='TEST_CLASS_2 TEST_CLASS_1'>Disabled Action</div>
			</MDL.Menu>
		), jquery('#test').get(0));
		expect(jquery('div.TEST_CLASS_1')).length(2);
		expect(jquery('div.TEST_CLASS_2')).length(1);
		expect(jquery('button.TEST_CLASS_3')).length(1);
	});

	it('是否 child 的 className 可以傳遞下去', function() {
		var testArray = [
			<div className='TEST_CLASS_1' key='1'> Another Action </div>,
			<div className='TEST_CLASS_2 TEST_CLASS_1' key='2'>Disabled Action</div>,
		];
		target = React.render((
			<MDL.Menu openDirection='bottom-left'>
				<MDL.Button type="IconButton">
					<button className='TEST_CLASS_3'><i className="material-icons">mood</i></button>
				</MDL.Button>
				{testArray}
			</MDL.Menu>
		), jquery('#test').get(0));
		// expect(target.props.children).length(3);
		expect(jquery('div.TEST_CLASS_1')).length(2);
		expect(jquery('div.TEST_CLASS_2')).length(1);
		expect(jquery('button.TEST_CLASS_3')).length(1);
		expect($('#test ul > li')).length(2);
	});

	it('測試點擊 button', function() {
		mouseClick($('button.TEST_CLASS_3').get(0));
		expect(jquery('div.TEST_CLASS_2:visible')).length(1);
	});

});
