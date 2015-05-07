'use strict';
var React = require('react');
module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Title name="theia"></Title>
        <Terminal></Terminal>
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
      <Button color="#d64d4d"></Button>
      <Button color="#e8d174"></Button>
      <Button color="#9ed670"></Button>

      </div>
      )
  }
});

var Button = React.createClass({
  render:function(){
    let style = {'background-color':this.props.color};
    return (
      <button style={style}></button>
    )
  }

});

var TerminalScreen = React.createClass({
  render: function(){
    return (
      <div className="screen">
      </div>
      )
  }
})

