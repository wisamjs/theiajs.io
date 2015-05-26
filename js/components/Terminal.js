'use strict';
var React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
      <div className="terminal">
        <TerminalScreen></TerminalScreen>
      </div>
      )
  }

});

var TerminalScreen = React.createClass({
  getInitialState: function(){
    return {'data':'theia'};
  },
  render: function(){
    var fullMsg = this.state.data;
    var lastChar = this.state.data.slice(-1);
    var terminalMsg = fullMsg.slice(0, fullMsg.length -1 );
    return (
      <div className="terminal-screen">
        <div className="terminal-interface">
          <p className="terminal-interface__root">~/project git:(master)</p>
          <p className="terminal-interface__text">
            {terminalMsg}
            <span className="terminal-interface--last-char">{lastChar}</span>
            <span className="cursor">|</span>
          </p>
        </div>
      </div>
      )
  }
})