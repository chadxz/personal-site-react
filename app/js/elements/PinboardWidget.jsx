'use strict';
var React = require('react');
var LoadingIndicator = require('./LoadingIndicator');
var PinboardBookmarkList = require('./PinboardBookmarkList');

var PinboardWidget = React.createClass({
  getInitialState: function () {
    return { bookmarks: [] };
  },
  render: function () {
    var displayed = this.state.bookmarks.length ?
      <PinboardBookmarkList bookmarks="{this.state.bookmarks}" /> :
      <LoadingIndicator />;

    return (
      <div>
        <div>Recent bookmarks on Pinboard</div>
        {displayed}
      </div>
    );
  }
});

module.exports = PinboardWidget;
