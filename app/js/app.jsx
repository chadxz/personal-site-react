'use strict';
var React = require('react');
var PinboardWidget = require('./elements/PinboardWidget');
var LastfmWidget = require('./elements/LastfmWidget');

React.render(<PinboardWidget />, document.getElementById('pinboardWidget'));
React.render(<LastfmWidget />, document.getElementById('lastfmWidget'));
