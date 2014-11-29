'use strict';
var React = require('react');

var PinboardBookmarkList = React.createClass({

  propTypes: {
    bookmarks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function () {
    var bookmarkNodes = this.props.bookmarks.map(function (bookmark, index) {
      return <li key={index}>{JSON.stringify(bookmark)}</li>;
    });

    return (
      <ul>
        {bookmarkNodes}
      </ul>
    );
  }
});

module.exports = PinboardBookmarkList;
