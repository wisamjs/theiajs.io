'use strict';
var React = require('react');
var Link = require('../Link/Link');

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
