module.exports = {
	before : function(client) {
		client
			.url(client.launch_url)
			.waitForElementVisible('body', 200)
			.click('div.mdl-layout__drawer-button')
			.pause(500)
			.click('[href="#tabs"]');
	},

	'Props Doc' : function(client) {
		client.expect.element('.mdl-card + div > h5').text.equal('Props');
		var PROPS = ['children', 'tabLabels', 'defaultIndex', 'isRipple', 'style'];

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
		var METHODS = ['setTabIndex', 'getTabLabel', 'getTabIndex'];

		client.elements('css selector', '.mdl-card + div + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, METHODS.length, "The total amount of methods equals to " + METHODS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, METHODS[index], 'The ' + (index + 1) + 'th method is "' + METHODS[index]+'"');
				});
			});
		});
	},

	'Events Doc' : function(client) {
		client.expect.element('.mdl-card + div + div + div > h5').text.equal('Events');
		var METHODS = ['onChange'];

		client.elements('css selector', '.mdl-card + div + div + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, METHODS.length, "The total amount of methods equals to " + METHODS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, METHODS[index], 'The ' + (index + 1) + 'th method is "' + METHODS[index]+'"');
				});
			});
		});
	},

	'Tabs Test': function(client) {
		// client
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50);

		client.click('[href="#mdl-tab-1-Starks"]');
		client.expect.element('#mdl-tab-1-Starks').visible;
		client.expect.element('#mdl-tab-1-Lannisters').not.visible;
		client.expect.element('#mdl-tab-1-Targaryens').not.visible;

		client.click('[href="#mdl-tab-1-Targaryens"]');
		client.expect.element('#mdl-tab-1-Targaryens').visible;
		client.expect.element('#mdl-tab-1-Lannisters').not.visible;
		client.expect.element('#mdl-tab-1-Starks').not.visible;

		client.click('.mdl-card > div + div > button:nth-child(1)');
		client.expect.element('#mdl-tab-1-Lannisters').visible;

		client.click('.mdl-card > div + div > button:nth-child(2)');
		client.click('.mdl-card > div + div > button:nth-child(2)');
		client.expect.element('#mdl-tab-1-Starks').visible;
	},

	after : function(client) {
		client.end();
	},
};
