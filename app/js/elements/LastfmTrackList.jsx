'use strict';
var React = require('react');

var LastfmTrackList = React.createClass({
  render: function () {
    var trackNodes = this.props.tracks.map(function (track) {
      return <li key={track}>{track}</li>;
    });

    return (
      <ul>
        {trackNodes}
      </ul>
    );
  }
});

module.exports = LastfmTrackList;
