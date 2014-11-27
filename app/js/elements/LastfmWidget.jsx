'use strict';
var React = require('react');
var TracksStore = require('../stores/TracksStore');
var LoadingIndicator = require('./LoadingIndicator');
var LastfmTrackList = require('./LastfmTrackList');

function getTracksState() {
  return {
    tracks: TracksStore.getAll()
  };
}

var LastfmWidget = React.createClass({
  getInitialState: function () {
    return getTracksState();
  },

  componentDidMount: function () {
    TracksStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    TracksStore.removeChangeListener(this._onChange);
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
