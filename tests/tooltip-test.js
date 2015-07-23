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
      .pause(1000)
      .moveToElement('#mdl-tooltip-2',106,9)
      // .click('.mdl-button--accent')
      // .click('.mdl-button--accent')
      // .click('.mdl-button--accent')
      // .assert.elementPresent('tbody tr:nth-child(7)')
      // .click('thead .mdl-checkbox')
      // .pause(500)
      // .click('.mdl-button--primary');
      
  }
};