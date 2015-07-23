module.exports = {
	'Table Test' : function (client) {
		client
		.url(client.launch_url + '/#/table')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".mdl-data-table")
		.click('.mdl-button--accent')
		.pause(1000)
		.assert.elementPresent('tbody tr:nth-child(5)')
		// // 暫時關掉這段測試 docker 都跑不動
		// .click('tbody .mdl-checkbox:nth-child(1)')
		// .pause(1000)
		// .click('.mdl-button--primary')
		// .pause(1000)
		// .assert.visible("div.showValueArea")
		// .assert.containsText("div.showValueArea", "Au bar")
		.end();
	}
};
