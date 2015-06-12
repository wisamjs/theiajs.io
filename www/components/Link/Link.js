'use strict';
var React = require('react');
module.exports = React.createClass({
  displayName: 'Links',
  render: function(){
    return (
      <div>
      <Link name="npm" url="npm.com/theia" />
      <Link name="github" url="github.com/wzaghal/theia" />
      <Link name="twitter" url="twitter.com/_wzaghal" />
      </div>
      );
  }

});

const Link = React.createClass({
  displayName: 'Link',
  propTypes: {
    name: React.PropTypes.string,
    url: React.PropTypes.string
  },
  render: function(){
    return (
      <a className="link" href={this.props.url}>{this.props.name}</a>
      );
  }

});
