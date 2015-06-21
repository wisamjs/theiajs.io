var React = require('react');
var Title = require('../Title/Title');
var Subheading = require('../Subheading/Subheading');
module.exports = React.createClass({
  displayName: 'Header',
  render: function(){
    return (
      <header className="header">
      <Title className="header-title">Theia</Title>
      <Subheading className="header-subheading">
        Detects and installs missing packages
      </Subheading>
       </header>
      );

  }

});