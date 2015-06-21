var React = require('react');
var Title = require('../Title/Title');
var Subheading = require('../Subtitle/Subheading');
module.exports = React.createClass({
  displayName: 'Header',
  render: function(){
    return (
       <header className="header">
          <Title name="Theia" className="header-title"/>
          <Subheading className="header-subheading"
            text="Detects and installs missing packages"/>
       </header>
      );

  }

});