module.exports = {
	'Table Test' : function (client) {
		client
		.url(client.launch_url)
		.waitForElementVisible('body', 1000)
		.click('div.mdl-layout__drawer-button')
		.pause(500)
		.click('[href="#table"]')
		.pause(500)
		.assert.elementPresent(".mdl-data-table")
		.click('.mdl-button--accent')
		.click('.mdl-button--accent')
		.click('.mdl-button--accent')
		.assert.elementPresent('tbody tr:nth-child(7)')
		.click('tbody .mdl-checkbox:nth-child(1)')
		.pause(2000)
		.click('.mdl-button--primary')
		.pause(2000)
		.assert.visible(".showValueArea")
		.assert.containsText(".showValueArea", "Au bar")
		.end();
	}
};
