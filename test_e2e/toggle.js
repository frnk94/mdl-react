
module.exports = {

	before : function(client) {
		client
			.url(client.launch_url)
			.waitForElementVisible('body', 200)
			.click('div.mdl-layout__drawer-button')
			.pause(500)
			.click('[href="#toggle"]');
	},

	'Props Doc' : function(client) {
		client.expect.element('.mdl-card + div > h5').text.equal('Props');
		var PROPS = ['text', 'type', 'name', 'value', 'isRipple', 'isDisabled', 'isChecked', 'style'];

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
		var METHODS = ['setChecked', 'toggle', 'getChecked'];

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

	'Checkbox Test' : function(client) {
		client
			.click('[href="#mdl-tab-Checkbox"]')
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.assert.cssClassPresent('#mdl-tab-Checkbox > div label:nth-child(2)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-Checkbox > div label:nth-child(4)', 'is-disabled')

			.click('#mdl-tab-Checkbox > div label:nth-child(1)')
			.click('#mdl-tab-Checkbox > div label:nth-child(2)')
			.click('#mdl-tab-Checkbox > div label:nth-child(3)')
			.assert.cssClassPresent('#mdl-tab-Checkbox > div label:nth-child(1)', 'is-checked')
			.assert.cssClassNotPresent('#mdl-tab-Checkbox > div label:nth-child(2)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-Checkbox > div label:nth-child(3)', 'is-checked')

			.click('#mdl-tab-Checkbox > div label:nth-child(5)')
			.pause(100)
			.acceptAlert(function(result) {
				client.assert.ok( result.state === 'success', "The click event can be trigger. ");
			});
	},

	'Radio Test' : function(client) {
		client
			.click('[href="#mdl-tab-Radio"]')
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.assert.cssClassPresent('#mdl-tab-Radio > div label:nth-child(3)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-Radio > div label:nth-child(7)', 'is-disabled')

			.click('#mdl-tab-Radio > div label:nth-child(1)')
			.click('#mdl-tab-Radio > div label:nth-child(3)')
			.click('#mdl-tab-Radio > div label:nth-child(5)')
			.click('#mdl-tab-Radio > div label:nth-child(5)')
			.click('#mdl-tab-Radio > div label:nth-child(1)')
			.click('#mdl-tab-Radio > div label:nth-child(1)')
			.assert.elementCount('#mdl-tab-Radio > div label.is-checked', 1)
			.assert.cssClassPresent('#mdl-tab-Radio > div label.is-checked:nth-child(1)', 'is-checked');
	},

	'Icon Test' : function(client) {
		client
			.click('[href="#mdl-tab-IconToggle"]')
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.assert.cssClassPresent('#mdl-tab-IconToggle > div label:nth-child(3)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-IconToggle > div label:nth-child(7)', 'is-disabled')

			.click('#mdl-tab-IconToggle > div label:nth-child(1)')
			.click('#mdl-tab-IconToggle > div label:nth-child(3)')
			.click('#mdl-tab-IconToggle > div label:nth-child(5)')
			.assert.cssClassPresent('#mdl-tab-IconToggle > div label:nth-child(1)', 'is-checked')
			.assert.cssClassNotPresent('#mdl-tab-IconToggle > div label:nth-child(3)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-IconToggle > div label:nth-child(5)', 'is-checked')

			.click('#mdl-tab-IconToggle > div label:nth-child(9)')
			.pause(100)
			.acceptAlert(function(result) {
				client.assert.ok( result.state === 'success', "The click event can be trigger. ");
			});
	},

	'Switch Test' : function(client) {
		client
			.click('[href="#mdl-tab-Switch"]')
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50)
			.assert.cssClassPresent('#mdl-tab-Switch > div label:nth-child(2)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-Switch > div label:nth-child(4)', 'is-disabled')

			.click('#mdl-tab-Switch > div label:nth-child(1)')
			.click('#mdl-tab-Switch > div label:nth-child(2)')
			.click('#mdl-tab-Switch > div label:nth-child(3)')
			.assert.cssClassPresent('#mdl-tab-Switch > div label:nth-child(1)', 'is-checked')
			.assert.cssClassNotPresent('#mdl-tab-Switch > div label:nth-child(2)', 'is-checked')
			.assert.cssClassPresent('#mdl-tab-Switch > div label:nth-child(3)', 'is-checked')

			.click('#mdl-tab-Switch > div label:nth-child(5)')
			.pause(100)
			.acceptAlert(function(result) {
				client.assert.ok( result.state === 'success', "The click event can be trigger. ");
			});
	},

	after : function(client) {
		client.end();
	},
};
