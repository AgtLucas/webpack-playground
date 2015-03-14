const React = require('react');

require('scss/modules/header');
require('scss/utilities/cf');

const Header = React.createClass({
  render () {
    return (
      <div className="main-header cf">
        Header!
      </div>
    );
  }
});

module.exports = Header;
