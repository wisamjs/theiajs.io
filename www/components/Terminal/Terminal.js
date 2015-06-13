'use strict';
const React = require('react');
module.exports = React.createClass({
  displayName: 'Terminal',
  render: function(){
    return (
      <div className="terminal">
        <TerminalScreen/>
      </div>
      );
  }

});

const Blink = React.createClass({
    displayName: 'Blink',
  render: function() {
    return (
      <span className="cursor">|</span>
    );
  }
});

const TerminalOutput = React.createClass({
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

const TerminalDefault = React.createClass({
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

const TerminalScreen = React.createClass({
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
