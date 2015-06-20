'use strict';
var React = require('react');
var Blink = require('../Blink/Blink');

module.exports = React.createClass({
    displayName: 'TerminalDefault',
    propTypes: {
    action: React.PropTypes.string,
    blink: React.PropTypes.boolean
  },
  render: function(){
    var blink;
    if (this.props.blink){
      blink = <Blink/>;
    }
    var className = "terminal-interface__root" +
    " terminal-interface__root--" + this.props.action;
    return (
      <p className={className}>~/project git:(master) {blink} </p>
      );
  }
});