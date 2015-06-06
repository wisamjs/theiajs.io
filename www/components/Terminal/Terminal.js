'use strict';
const React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
      <div className="terminal">
        <TerminalScreen></TerminalScreen>
      </div>
      )
  }

});

const TerminalScreen = React.createClass({
  getInitialState: function(){
    return {'data':'theia'};
  },
  render: function(){
    const fullMsg = this.state.data;
    const lastChar = this.state.data.slice(-1);
    const terminalMsg = fullMsg.slice(0, fullMsg.length -1 );
    return (
      <div className="terminal-screen">
        <div className="terminal-interface">
          <p className="terminal-interface__root">~/project git:(master)</p>
          <p className="terminal-interface__text">
            {terminalMsg}
            <span className="terminal-interface--last-char">{lastChar}</span>
          </p>
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