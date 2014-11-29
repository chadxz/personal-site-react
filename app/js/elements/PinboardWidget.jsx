'use strict';
var React = require('react');
var LoadingIndicator = require('./LoadingIndicator');
var PinboardBookmarkList = require('./PinboardBookmarkList');
var BookmarkStore = require('../stores/BookmarkStore');

function getBookmarksState() {
  return {
    bookmarks: BookmarkStore.getAll()
  };
}

var PinboardWidget = React.createClass({
  getInitialState: function () {
    return getBookmarksState();
  },

  componentDidMount: function () {
    BookmarkStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    BookmarkStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var displayed = this.state.bookmarks.length ?
      <PinboardBookmarkList bookmarks={this.state.bookmarks} /> :
      <LoadingIndicator />;

    return (
      <div>
        <div>Recent bookmarks on Pinboard</div>
        {displayed}
        <a href="https://pinboard.in/u:chadxz" title="Chad's pinboard">View all bookmarks at pinboard.in</a>
      </div>
    );
  },

  _onChange: function () {
    this.setState(getBookmarksState());
  }
});

module.exports = PinboardWidget;
