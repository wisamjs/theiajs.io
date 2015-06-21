const React = require('react');
module.exports = React.createClass({
  displayName: 'Subheading',
  propTypes: {
    children: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render: function(){
    return (
        <h1 className={this.props.className}>
          {this.props.children}
        </h1>
      );
  }
});