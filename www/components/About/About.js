var React = require('react');

module.exports = React.createClass({
  displayName: 'About',
  render: function(){
    return (
      <section>
        <ul className="About">
          <li>
            <h4 className="About--title">Ridiculus Lorem Commodo</h4>
            <p className="About--paragraph">
              Etiam porta sem malesuada magna mollis euismod.
              Maecenas faucibus mollis interdum.
            </p>
            </li>
          <li>
            <h4 className="About--title">Magna Nullam Parturient</h4>
            <p className="About--paragraph">
              Etiam porta sem malesuada magna mollis euismod.
              Maecenas faucibus mollis interdum.
            </p>
          </li>
          <li>
            <h4 className="About--title">Lorem Bibendum Dolor</h4>
            <p className="About--paragraph">
              Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
          </li>
        </ul>
      </section>
      );
  }
});
