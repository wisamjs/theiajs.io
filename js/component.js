'use strict';
var React = require('react');
module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <section className="header">
          <Title name="theia"></Title>
          <Terminal></Terminal>
        </section>
        <section className="info">
          <Links></Links>
        </section>
      </div>
    );
  }
});

var Title = React.createClass({
  render: function(){
    return (
        <h1>{this.props.name}</h1>
      )
  }
});

var Terminal = React.createClass({
  render: function(){
    return (
      <div className="terminal">
        <TerminalBar></TerminalBar>
        <TerminalScreen></TerminalScreen>
      </div>
      )
  }

});

var TerminalBar = React.createClass({
  render: function(){
    return (
      <div className="bar">
      <button className="button-close" color="#d64d4d"></button>
      <button className="button-minimize" color="#e8d174"></button>
      <button className="button-maximize" color="#9ed670" onClick={this.test}></button>

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
      <div className="screen">
        <div className="terminal-interface">
          <p className="terminal-interface__text">{terminalMsg}</p>
          <span className="terminal-interface--last-char">{lastChar}</span>
          <span className="cursor">|</span>
        </div>
      </div>
      )
  }
})

var Links = React.createClass({
  render: function(){
    return (
      <div>
      <Link url="npm.com/theia" name="npm"></Link>
      <Link url="github.com/wzaghal/theia" name="github"></Link>
      <Link url="twitter.com/_wzaghal" name="twitter"></Link>
      </div>
      )

  }

})

var Link = React.createClass({
  render: function(){
    return (
      <a className="link" href={this.props.url}>{this.props.name}</a>
      )

  }

});

