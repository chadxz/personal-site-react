import React, { PropTypes } from 'react';
import LoadingIndicator from './LoadingIndicator';
import LastfmTrackList from './LastfmTrackList';

function LastfmWidget({ tracks }) {
  const displayed = tracks.length ?
    <LastfmTrackList tracks={tracks} /> :
    <LoadingIndicator />;

  return (
    <div className="panel panel-default">
      <div className="panel-heading text-center">Recent listens via Last.fm</div>
      <div id="trackList" className="panel-body lastfm-track-list">
        {displayed}
        <a href="http://www.last.fm/user/chadxz" title="Chad's Last.fm profile">View listening profile at Last.fm</a>
      </div>
    </div>
  );
}

LastfmWidget.propTypes = {
  tracks: LastfmTrackList.propTypes.tracks
};

LastfmWidget.defaultProps = {
  tracks: []
};

export default LastfmWidget;
