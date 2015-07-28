module.exports = {

	before : function(client) {
		client
			.url(client.launch_url)
			.waitForElementVisible('body', 200)
			.click('div.mdl-layout__drawer-button')
			.pause(500)
			.click('[href="#menu"]');
	},

	'Props Doc' : function(client) {
		client.expect.element('.mdl-card + div > h5').text.equal('Props');
		var PROPS = ['children', 'openDirection', 'isRipple', 'style'];

		client.elements('css selector', '.mdl-card + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, PROPS.length, "The total amount of props equals to " + PROPS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, PROPS[index], 'The ' + (index + 1) + 'th prop equals is "' + PROPS[index]+'"');
				});
			});
		});
	},

	'Menu Test': function(client) {
		// client
			// .waitForElementVisible('code.language-jsx', 1000, false)
			// .assert.elementSizeNotWithin('.language-jsx', 50, 50);

		client
			.assert.cssClassNotPresent("#mdl-menu-1 + .mdl-menu__container", "is-visible")
			.click('#mdl-menu-1')
			.pause(300)
			.assert.cssClassPresent("#mdl-menu-1 + .mdl-menu__container", "is-visible")
			.moveToElement('#mdl-menu-1 + .mdl-menu__container > ul > li:nth-child(1)', 17, 20, function() {
				client
					.mouseButtonDown(0)
					.pause(1000)
					.mouseButtonUp(0)
					.pause(100)
					.acceptAlert(function(result) {
							client.assert.ok( result.state === 'success', "The click event can be trigger. ");
					});
			});

		client
			.assert.cssClassNotPresent("#mdl-menu-2 + .mdl-menu__container", "is-visible")
			.click('#mdl-menu-3')
			.assert.cssClassPresent("#mdl-menu-3 + .mdl-menu__container", "is-visible")
			.assert.cssClassNotPresent("#mdl-menu-2 + .mdl-menu__container", "is-visible")
			.click('#mdl-menu-2')
			.assert.cssClassNotPresent("#mdl-menu-3 + .mdl-menu__container", "is-visible")
			.assert.cssClassPresent("#mdl-menu-2 + .mdl-menu__container", "is-visible");

	},

	after : function(client) {
		client.end();
	},
};
