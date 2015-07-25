
'use strict';

module.exports = {
	'Card Test' : function (client) {
		client
		.url(client.launch_url + '/#/card')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".mdl-card")
		.end();
	}
};
