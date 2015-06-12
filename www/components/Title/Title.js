const React = require('react');
module.exports = React.createClass({
  displayName: 'Title',
  propTypes: {
    className: React.PropTypes.string,
    name: React.PropTypes.string
  },
  render: function(){
    return (
        <h1 className={this.props.className}>
          {this.props.name}
        </h1>
      );
  }
});