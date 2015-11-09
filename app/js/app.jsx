import React from 'react';
import ReactDOM from 'react-dom';
import PinboardWidget from './elements/PinboardWidget';
import LastfmWidget from './elements/LastfmWidget';
import PocketWidget from './elements/PocketWidget';
import pinboardActions from './actions/pinboardActions';
import lastfmActions from './actions/lastfmActions';
import pocketActions from './actions/pocketActions';
require('es6-promise').polyfill();

const $pinboardWidget = document.getElementById('pinboardWidget');
const $lastfmWidget = document.getElementById('lastfmWidget');
const $pocketWidget = document.getElementById('pocketWidget');

// render initial view
ReactDOM.render(<PinboardWidget />, $pinboardWidget);
ReactDOM.render(<LastfmWidget />, $lastfmWidget);
ReactDOM.render(<PocketWidget />, $pocketWidget);

// load data
Promise.all([
  pinboardActions.fetchBookmarks(),
  lastfmActions.fetchTracks(),
  pocketActions.fetchArticles()
]).then(([bookmarks, tracks, articles]) => {
  // re-render with data
  ReactDOM.render(<PinboardWidget bookmarks={bookmarks} />, $pinboardWidget);
  ReactDOM.render(<LastfmWidget tracks={tracks} />, $lastfmWidget);
  ReactDOM.render(<PocketWidget articles={articles} />, $pocketWidget);
});
