'use strict';
var React = require('react');
var moment = require('moment');

var LastfmTrackList = React.createClass({

  propTypes: {
    tracks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function () {
    var lastfmMusicUrl = 'http://www.last.fm/music/';
    var dateTimeFormat = 'MMMM D, YYYY @ h:mm a';

    var trackNodes = this.props.tracks.map(function (track) {
      var artistUrl = lastfmMusicUrl + track.artist.url.replace(/\s/gi, '+');
      var isPlaying = track['@attr'] && (track['@attr'].nowplaying === 'true');
      var relativeDateTime = track.date && moment.unix(track.date.uts).fromNow();
      var formattedDateTime = track.date && moment.unix(track.date.uts).format(dateTimeFormat);
      var displayedTime = isPlaying ?
        <small><span>&#x266C;</span> now playing <span>&#x266C;</span></small> :
        <small><abbr title={formattedDateTime}>{relativeDateTime}</abbr></small>;

      return (
        <li key={track.mbid}>
          <a href={artistUrl} title={track.artist.name + " on Last.fm"}>{track.artist.name}</a>&nbsp;-&nbsp;
          <a href={track.url} title={track.name + " on Last.fm"}>{track.name}</a>&nbsp;
          {displayedTime}
        </li>
      );
    });

    return (
      <ul>
        {trackNodes}
      </ul>
    );
  }
});

module.exports = LastfmTrackList;
