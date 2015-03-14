const React = require('react');
const Header = require('js/header.js');
const Footer = require('js/footer.js');

require('scss/modules/container');

const Container = React.createClass({
  render () {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = Container;
