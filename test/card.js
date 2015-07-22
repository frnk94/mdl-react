module.exports = {
	'Card Test' : function (client) {
	client
		.url('http://localhost:8080/#/card')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".mdl-card")
		.end();
	}
};