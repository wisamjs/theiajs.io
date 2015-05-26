'use strict';
var React = require('react');
var Links = require('../components/Link');
var Title = require('../components/Title');
var Terminal = require('../components/Terminal');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <section className="header">
          <Title name="theia"></Title>
          <Terminal></Terminal>
        </section>
        <section className="info">
          <Links></Links>
        </section>
      </div>
    );
  }
});
