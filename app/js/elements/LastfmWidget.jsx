'use strict';
var React = require('react');
var TrackStore = require('../stores/TrackStore');
var LoadingIndicator = require('./LoadingIndicator');
var LastfmTrackList = require('./LastfmTrackList');

function getTracksState() {
  return {
    tracks: TrackStore.getAll()
  };
}

var LastfmWidget = React.createClass({
  getInitialState: function () {
    return getTracksState();
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var displayed = this.state.tracks.length ?
      <LastfmTrackList tracks={this.state.tracks} /> :
      <LoadingIndicator />;

    return (
      <div>
        <div>Recent listens via Last.fm</div>
        {displayed}
      </div>
    );
  },

  _onChange: function () {
    this.setState(getTracksState());
  }
});

module.exports = LastfmWidget;
