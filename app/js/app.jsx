import React from 'react';
import ReactDOM from 'react-dom';
import PinboardWidget from './elements/PinboardWidget';
import LastfmWidget from './elements/LastfmWidget';
import pinboardActions from './actions/pinboardActions';
import lastfmActions from './actions/lastfmActions';
require('es6-promise').polyfill();

// render initial view
ReactDOM.render(<PinboardWidget />, document.getElementById('pinboardWidget'));
ReactDOM.render(<LastfmWidget />, document.getElementById('lastfmWidget'));

// load data
Promise.all([
  pinboardActions.fetchBookmarks(),
  lastfmActions.fetchTracks()
]).then(function ([bookmarks, tracks]) {
  // re-render with data
  ReactDOM.render(<PinboardWidget bookmarks={bookmarks} />, document.getElementById('pinboardWidget'));
  ReactDOM.render(<LastfmWidget tracks={tracks} />, document.getElementById('lastfmWidget'));
});
