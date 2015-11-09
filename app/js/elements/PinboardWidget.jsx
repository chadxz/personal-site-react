import React, { PropTypes } from 'react';
import LoadingIndicator from './LoadingIndicator';
import PinboardBookmarkList from './PinboardBookmarkList';

function PinboardWidget({ bookmarks }) {
  const displayed = bookmarks.length ?
    <PinboardBookmarkList bookmarks={bookmarks} /> :
    <LoadingIndicator />;

  return (
    <div className="panel panel-default">
      <div className="panel-heading text-center">Recent bookmarks on Pinboard</div>
      <div id="pinboardList" className="panel-body pinboard-list">
        {displayed}
        <a href="https://pinboard.in/u:chadxz" title="Chad's pinboard">View all bookmarks at pinboard.in</a>
      </div>
    </div>
  );
}

PinboardWidget.propTypes = {
  bookmarks: PinboardBookmarkList.propTypes.bookmarks
};

PinboardWidget.defaultProps = {
  bookmarks: []
};

export default PinboardWidget;
