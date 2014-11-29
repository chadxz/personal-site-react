'use strict';
var React = require('react');
var PinboardWidget = require('./elements/PinboardWidget');
var LastfmWidget = require('./elements/LastfmWidget');
var BookmarkActions = require('./actions/BookmarkActions');
var TrackActions = require('./actions/TrackActions');

// render initial view
React.render(<PinboardWidget />, document.getElementById('pinboardWidget'));
React.render(<LastfmWidget />, document.getElementById('lastfmWidget'));

// load data
BookmarkActions.fetchBookmarks();
TrackActions.fetchTracks();
