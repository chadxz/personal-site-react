'use strict';
var React = require('react');

var LastfmTrackList = React.createClass({

  propTypes: {
    tracks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function () {
    var trackNodes = this.props.tracks.map(function (track, index) {
      return <li key={index}>{JSON.stringify(track)}</li>;
    });

    return (
      <ul>
        {trackNodes}
      </ul>
    );
  }
});

module.exports = LastfmTrackList;
