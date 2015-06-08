'use strict';
const React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
      <div className="terminal">
        <TerminalScreen></TerminalScreen>
      </div>
      )
  }

});

const Blink = React.createClass({
  render: function() {
    return (
      <span className="cursor">|</span>
    )
  }
});

const TerminalOutput = React.createClass({
  render: function(){
    var blink;
    var className = "terminal-interface__text terminal-interface__text--" + this.props.action;
    if (this.props.blink){
      blink = <Blink></Blink>
    }
    return (
            <p className={className}>
              {this.props.data}
                {blink}
            </p>
          )
  }
});

const TerminalDefault = React.createClass({
  render: function(){
    var blink;
    if (this.props.blink){
      blink = <Blink></Blink>
    }
    var className = "terminal-interface__root terminal-interface__root--" + this.props.action;
    return (
      <p className={className}>~/project git:(master) {blink} </p>
      )
  }
});

const TerminalScreen = React.createClass({

  getInitialState: function(){
    return {
      prompt:'theia',
      output:'Found 3 missing packages',
      missingPackages: ['gulp','gulp-sass','babel']
    };
  },
  render: function(){
    return (
      <div className="terminal-screen">
        <div className="terminal-interface">
          <TerminalDefault></TerminalDefault>
          <TerminalOutput data={this.state.prompt} action="type"></TerminalOutput>
          <TerminalOutput data={this.state.output} action="delay"></TerminalOutput>

          <div className="terminal-interface__text__packages">
            {this.displayMissingPackages()}
          </div>
          <TerminalDefault action="delay" blink="true"></TerminalDefault>
        </div>
      </div>
      )
  },
  displayMissingPackages: function(){
    return this.state.missingPackages.map(function(pckg){
      return <TerminalOutput data={"* " + pckg} action="delay"></TerminalOutput>

    });
  }
})
