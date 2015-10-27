import React, { PropTypes } from 'react';
import moment from 'moment';

function LastfmTrackList({ tracks }) {
  const lastfmMusicUrl = 'http://www.last.fm/music/';
  const dateTimeFormat = 'MMMM D, YYYY @ h:mm a';

  const trackNodes = tracks.map(function (track) {
    const uniqueId = (track.date && track.date.uts || 'now') + track.url;
    const artistUrl = lastfmMusicUrl + track.artist.url.replace(/\s/gi, '+');
    const isPlaying = track['@attr'] && (track['@attr'].nowplaying === 'true');
    const relativeDateTime = track.date && moment.unix(track.date.uts).fromNow();
    const formattedDateTime = track.date && moment.unix(track.date.uts).format(dateTimeFormat);
    const displayedTime = isPlaying ?
      <small><span>&#x266C;</span> now playing <span>&#x266C;</span></small> :
      <small><abbr title={formattedDateTime}>{relativeDateTime}</abbr></small>;

    return (
      <li key={uniqueId}>
        <a href={artistUrl} title={`${track.artist.name} on Last.fm`}>{track.artist.name}</a>&nbsp;-&nbsp;
        <a href={track.url} title={`${track.name} on Last.fm`}>{track.name}</a>&nbsp;
        {displayedTime}
      </li>
    );
  });

  return (
    <ul id="lastfmTracks" className="list-unstyled">
      {trackNodes}
    </ul>
  );
}

LastfmTrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LastfmTrackList;
