const React = require('react');
module.exports = React.createClass({
  displayName: 'Subheading',
  propTypes: {
    className: React.PropTypes.string,
    text: React.PropTypes.string
  },
  render: function(){
    return (
        <h1 className={this.props.className}>
          {this.props.text}
        </h1>
      );
  }
});