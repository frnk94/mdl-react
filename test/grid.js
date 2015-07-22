module.exports = {
	'Grid Test' : function (client) {
	client
		.url('http://localhost:8080/#/grid')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".mdl-grid")
		.assert.elementPresent(".mdl-cell")
		.end();
	}
};