'use strict';
const React = require('react');
const Links = require('../Link/Link');
const Title = require('../Title/Title');
const Terminal = require('../Terminal/Terminal');

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
