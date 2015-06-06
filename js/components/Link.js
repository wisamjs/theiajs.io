'use strict';
const React = require('react');
module.exports = React.createClass({
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

const Link = React.createClass({
  render: function(){
    return (
      <a className="link" href={this.props.url}>{this.props.name}</a>
      )
  }

});
