import React, { PropTypes } from 'react';
import moment from 'moment';

function PinboardBookmarkList({ bookmarks }) {
  const bookmarkNodes = bookmarks.map(bookmark => {
    const dateTimeFormat = 'MMMM D, YYYY @ h:mm a';
    const relativeDateTime = moment(bookmark.time).fromNow();
    const formattedDateTime = moment(bookmark.time).format(dateTimeFormat);
    return (
      <li key={bookmark.hash}>
        <a href={bookmark.href}>{bookmark.description}</a>&nbsp;
        <small><abbr title={formattedDateTime}>{relativeDateTime}</abbr></small>
      </li>
    );
  });

  return (
    <ul id="pinboardItems" className="list-unstyled">
      {bookmarkNodes}
    </ul>
  );
}

PinboardBookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PinboardBookmarkList;
