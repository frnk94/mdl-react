
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

  click: function() {
    console.log('click!');
  },

  render: function() {

    return (
      <div>
        <MDL.Button type="FloatingActionButton"
          text="T"
          isRipple={true}
          isPrimary={true}
          isMini={true}
          isDisabled={false}
          onClick={this.click}
          onKeyDown={this.onKeyDown}/>

        <MDL.Button type="RaisedButton"
          text="T"
          isRipple={true}
          isPrimary={true}
          isMini={true}
          isDisabled={false}
          onClick={this.click}
          onKeyDown={this.onKeyDown}/>

        <MDL.Button type="FlatButton"
          text="Button"
          isRipple={true}
          isPrimary={true}
          isMini={true}
          isAccent={false}
          isDisabled={false} />

        <MDL.Button type="IconButton"
          text={<i className="material-icons">mood</i>}
          isRipple={true}
          isMini={true}
          isPrimary={true}
          isAccent={false}
          isDisabled={false}/>

      </div>
    );
  },

});
