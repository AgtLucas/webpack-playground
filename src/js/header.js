const React = require('react');

require('stylesheets/modules/header');
require('stylesheets/utilities/cf');

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
