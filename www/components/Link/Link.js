'use strict';
var React = require('react');

module.exports = React.createClass({
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
