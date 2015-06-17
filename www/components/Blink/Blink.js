'use strict';
const React = require('react');

module.exports = React.createClass({
    displayName: 'Blink',
  render: function() {
    return (
      <span className="cursor">|</span>
    );
  }
});