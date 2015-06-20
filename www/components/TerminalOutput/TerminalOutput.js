'use strict';
var React = require('react');
var Blink = require('../Blink/Blink');

module.exports = React.createClass({
  displayName: 'TerminalOutput',
  propTypes: {
    action: React.PropTypes.string,
    blink: React.PropTypes.boolean,
    data: React.PropTypes.string
  },
  render: function(){
    var blink;
    var className = "terminal-interface__text" +
    " terminal-interface__text--" + this.props.action;
    if (this.props.blink){
      blink = <Blink/>;
    }
    return (
            <p className={className}>
              {this.props.data}
                {blink}
            </p>
          );
  }
});