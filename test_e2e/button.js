
module.exports = {

	before : function(client) {
		client
			.url(client.launch_url)
			.waitForElementVisible('body', 200)
			.click('div.mdl-layout__drawer-button')
			.pause(500)
			.click('[href="#button"]');
	},

	'Props Doc' : function(client) {
		client.expect.element('.mdl-card + div > h5').text.equal('Props');
		var PROPS = ['text', 'type', 'isRipple', 'isPrimary', 'isAccent', 'isMini', 'defaultDisabled', 'id', 'style'];

		client.elements('css selector', '.mdl-card + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, PROPS.length, "The total amount of props equals to " + PROPS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, PROPS[index], 'The ' + (index + 1) + 'th prop equals is "' + PROPS[index]+'"');
				});
			});
		});
	},

	'Methods Doc' : function(client) {
		client.expect.element('.mdl-card + div + div > h5').text.equal('Methods');
		var METHODS = ['setDisabled', 'toggleButton', 'getDisabled'];

		client.elements('css selector', '.mdl-card + div + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, METHODS.length, "The total amount of methods equals to " + METHODS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, METHODS[index], 'The ' + (index + 1) + 'th method is "' + METHODS[index]+'"');
				});
			});
		});
	},

	'FAB' : function(client) {
		client
			.click('a[href="#mdl-tab-FloatingActionButtons"]')
			.waitForElementVisible('code.language-jsx', 1000, false)
			.assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.expect.element('.mdl-button--fab:nth-child(7)').attribute('disabled'); //element br will be counted in child

		client
			.click('.mdl-button--fab:nth-child(3)')
			.expect.element('.mdl-button--fab:nth-child(7)').not.attribute('disabled');

		client
			.click('.mdl-button--fab:nth-child(11)')
			.expect.element('.mdl-button--fab:nth-child(7)').attribute('disabled');

		client.elements('css selector', '#mdl-tab-FloatingActionButtons .mdl-button--fab', function(elems) {
			client.assert.ok( elems.value.length  === 9, 'All of buttons are Raised Button.');
		});

	},

	'Raised Button': function(client) {
		client
			.click('a[href="#mdl-tab-RaisedButtons"]')
			.waitForElementVisible('code.language-jsx', 1000, false)
			.assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.expect.element('.mdl-button--raised:nth-child(7)').attribute('disabled');

		client
			.click('.mdl-button--raised:nth-child(3)')
			.expect.element('.mdl-button--raised:nth-child(7)').not.attribute('disabled');

		client.elements('css selector', '#mdl-tab-RaisedButtons .mdl-button--raised', function(elems) {
			client.assert.ok( elems.value.length  === 6, 'All of buttons are Raised Button.');
		});

	},

	'Flat Button': function(client) {
		client
			.click('a[href="#mdl-tab-FlatButtons"]')
			.waitForElementVisible('code.language-jsx', 1000, false)
			.assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.expect.element('#mdl-tab-FlatButtons button:nth-child(7)').attribute('disabled');

		client
			.click('#mdl-tab-FlatButtons button:nth-child(3)')
			.expect.element('#mdl-tab-FlatButtons button:nth-child(7)').not.attribute('disabled');


		client.elements('css selector', '#mdl-tab-FlatButtons > div > *:not(br)', function(elems) {
			client.assert.ok( elems.value.length  === 6, 'All of buttons are Raised Button.');
		});


	},

	'Icon Button': function(client) {
		client
			.click('a[href="#mdl-tab-IconButtons"]')
			.waitForElementVisible('code.language-jsx', 1000, false)
			.assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.expect.element('.mdl-button--icon:nth-child(7)').attribute('disabled');

		client
			.click('.mdl-button--icon:nth-child(3)')
			.expect.element('.mdl-button--icon:nth-child(7)').not.attribute('disabled');

		client.elements('css selector', '#mdl-tab-IconButtons .mdl-button--icon', function(elems) {
			client.assert.ok( elems.value.length  === 6, 'All of buttons are Raised Button.');
		});


	},

	after : function(client) {
		client.end();
	},
};
