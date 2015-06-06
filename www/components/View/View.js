'use strict';
const React = require('react');
const Links = require('../components/Link');
const Title = require('../components/Title');
const Terminal = require('../components/Terminal');

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
