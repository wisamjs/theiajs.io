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
      <div className="cursor">|</div>
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

