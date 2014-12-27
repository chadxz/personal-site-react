'use strict';
var React = require('react');

var LoadingIndicator = React.createClass({
  render: function () {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    );
  }
});

module.exports = LoadingIndicator;
