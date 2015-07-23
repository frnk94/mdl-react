
'use strict';

module.exports = {
	'Icon' : function (client) {
		client
		.url(client.launch_url + '/#/icon')
		.waitForElementVisible('body', 1000)
		.pause(500)
		.assert.elementPresent(".material-icons")
		.end();
	}
};
