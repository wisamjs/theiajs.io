const React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
        <h1 className="title">{this.props.name}</h1>
      )
  }
});