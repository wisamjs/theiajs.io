'use strict';
const React = require('react');
var TerminalScreen = require('../TerminalScreen/TerminalScreen');

module.exports = React.createClass({
  displayName: 'Terminal',
  render: function(){
    return (
      <div className="terminal">
        <TerminalScreen/>
      </div>
      );
  }

});


