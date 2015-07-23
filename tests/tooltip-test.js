module.exports = {
	'Demo test Tooltip' : function (client) {
		client
			.url('http://fandora.github.io/mdl-react/')
			.waitForElementVisible('body', 1000)
			.click('div.mdl-layout__drawer-button')
			.pause(1000)
			.click('[href="#tooltip"]')
			.pause(1000)
			.moveToElement('#mdl-tooltip-1.material-icons',12,12)
			.isVisible('div.mdl-tooltip.mdl-tooltip--large')
			.moveToElement('#mdl-tooltip-2',106,9)
			.isVisible('div.mdl-tooltip')
			.end();
	}
};