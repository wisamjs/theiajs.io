'use strict';
const React = require('react');
const Links = require('../Link/Link');
const Title = require('../Title/Title');
const Terminal = require('../Terminal/Terminal');

module.exports = React.createClass({
  displayName: 'View',
  render: function () {
    return (
      <div className="wrapper">
        <header className="header">
          <Title name="Theia" className="header-title"/>
          <h3 className="header-subheading">Integer posuere erat a ante.</h3>
        </header>
        <section className="Terminal">
          <Terminal></Terminal>
          <Links></Links>
        </section>
      </div>
    );
  }
});
