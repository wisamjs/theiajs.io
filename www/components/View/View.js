'use strict';
var React = require('react');
var Links = require('../Links/Links');
var Terminal = require('../Terminal/Terminal');
var Header = require('../Header/Header');
var About = require('../About/About');

module.exports = React.createClass({
  displayName: 'View',
  render: function () {
    return (
      <div className="wrapper">
        <Header/>
        <section className="Terminal">
          <Terminal/>
        </section>
        <About/>
        <Links/>
      </div>
    );
  }
});
