const React = require('react');

require('scss/modules/header');
require('scss/utilities/cf');

const Header = React.createClass({
  render () {
    return (
      <header className="main-header cf">
        Header!
      </header>
    );
  }
});

module.exports = Header;
