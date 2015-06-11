'use strict';
var React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
      <div>
      <Link name="npm" url="npm.com/theia" />
      <Link name="github" url="github.com/wzaghal/theia" />
      <Link name="twitter" url="twitter.com/_wzaghal" />
      </div>
      );
  }

})

const Link = React.createClass({
  render: function(){
    return (
      <a className="link" href={this.props.url}>{this.props.name}</a>
      );
  }

});
