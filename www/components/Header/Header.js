var React = require('react');
var Title = require('../Title/Title');
module.exports = React.createClass({
  displayName: 'Header',
  render: function(){
    return (
       <header className="header">
          <Title name="Theia" className="header-title"/>
          <h3 className="header-subheading">Integer posuere erat a ante.</h3>
       </header>
      );

  }

});