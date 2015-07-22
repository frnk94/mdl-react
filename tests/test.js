module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://fandora.github.io/mdl-react/')
      .waitForElementVisible('body', 1000)
      .click('div.mdl-layout__drawer-button')
      .pause(500)
      .click('[href="#table"]')
      .pause(500)
      .click('.mdl-button--accent')
      .click('.mdl-button--accent')
      .click('.mdl-button--accent')
      .assert.elementPresent('tbody tr:nth-child(7)')
      .click('thead .mdl-checkbox')
      .pause(500)
      .click('.mdl-button--primary');
      // .waitForElementVisible('body', 1000)
      // .assert.title('Google')
      // .assert.visible('input[type=text]')
      // .setValue('input[type=text]', 'rembrandt van rijn')
      // // .waitForElementVisible('input[name=btnK]', 1000)
      // .click('[value="Google 搜尋"]', function() {
      //     client
      //     .pause(3000)
      //     .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      //     .end();
      // });
      // .waitForElementVisible('ol#rso', 3000)
      // .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      // .end();
  }
};