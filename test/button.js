module.exports = {

	before : function(client) {

		client
			.url(client.launch_url)
			.waitForElementVisible('body', 200)
			.click('div.mdl-layout__drawer-button')
			.pause(500)
			.click('[href="#button"]');
	},

	'Props Doc': function(client) {

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

	'Methods Doc': function(client) {

		client.expect.element('.mdl-card + div + div > h5').text.equal('Methods');
		var METHODS = ['setDisabled', 'toggleButton', 'getDisabled'];
		client.assert.elementCount('.mdl-card + div + div > div > div', METHODS.length);
		client.elements('css selector', '.mdl-card + div + div > div > div > h6', function(elems) {
			client.assert.equal(elems.value.length, METHODS.length, "The total amount of methods equals to " + METHODS.length);

			elems.value.forEach(function(element, index) {
				client.elementIdText(element.ELEMENT, function(result){
					client.assert.equal(result.value, METHODS[index], 'The ' + (index + 1) + 'th method is "' + METHODS[index]+'"');
				});
			});
		});
	},

	'Code': function(client) {
		//There are code existed in this part, and must have multiple line.
		var TABS = ['Floating Action Buttons', 'Raised Buttons', 'Flat Buttons', 'Icon Buttons'];

	},

	'FAB': function(client) {
		//Check the type of button is FAB
		//Check ripple works, the color is right, the button event is fired correctly.
	},

	'Raised Button': function(client) {
		//Check the type of button is Raised
		//Check ripple works, the color is right, the button event is fired correctly.
	},

	'Flat Button': function(client) {
		//Check the type of button is Flat
		//Check ripple works, the color is right, the button event is fired correctly.
	},

	'Icon Button': function(client) {
		//Check the type of button is Icon
		//Check ripple works, the color is right, the button event is fired correctly.
	},

	after : function(client) {
		client.end();
	},
};
