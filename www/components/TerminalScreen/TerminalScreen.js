'use strict';
const React = require('react');
var TerminalOutput = require('../TerminalOutput/TerminalOutput');
var TerminalDefault = require('../TerminalDefault/TerminalDefault');

module.exports = React.createClass({
  displayName: 'TerminalScreen',
  getInitialState: function(){
    return {
      prompt: 'theia',
      output: 'Found 3 missing packages',
      missingPackages: ['gulp', 'gulp-sass', 'babel']
    };
  },
  displayMissingPackages: function(){
    return this.state.missingPackages.map(function(pckg){
      return <TerminalOutput data={"* " + pckg} action="delay"/>;

    });
  },
  render: function(){
    return (
      <div className="terminal-screen">
        <div className="terminal-interface">
          <TerminalDefault/>
          <TerminalOutput data={this.state.prompt} action="type"/>
          <TerminalOutput data={this.state.output} action="delay"/>

          <div className="terminal-interface__text__packages">
            {this.displayMissingPackages()}
          </div>
          <TerminalDefault action="delay" blink={true}/>
        </div>
      </div>
      );
  }
});
