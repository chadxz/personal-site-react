'use strict';
var React = require('react');
var TracksStore = require('./stores/TracksStore');
var PinboardWidget = require('./elements/PinboardWidget');
var LastfmWidget = require('./elements/LastfmWidget');

TracksStore.init();
React.render(<PinboardWidget />, document.getElementById('pinboardWidget'));
React.render(<LastfmWidget />, document.getElementById('lastfmWidget'));
