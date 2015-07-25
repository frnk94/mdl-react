module.exports = {
	'Grid Test' : function (client) {
		client
		.url(client.launch_url + '/#/grid')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".mdl-grid")
		.assert.elementPresent(".mdl-cell")
		.end();
	}
};
