'use strict';
var React = require('react');
var moment = require('moment');

var PinboardBookmarkList = React.createClass({

  propTypes: {
    bookmarks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function () {
    var bookmarkNodes = this.props.bookmarks.map(function (bookmark) {
      var dateTimeFormat = 'MMMM D, YYYY @ h:mm a';
      var relativeDateTime = moment(bookmark.time).fromNow();
      var formattedDateTime = moment(bookmark.time).format(dateTimeFormat);
      return (
        <li key={bookmark.hash}>
          <a href={bookmark.href}>{bookmark.description}</a>&nbsp;
          <small><abbr title={formattedDateTime}>{relativeDateTime}</abbr></small>
        </li>
      );
    });

    return (
      <ul>
        {bookmarkNodes}
      </ul>
    );
  }
});

module.exports = PinboardBookmarkList;
