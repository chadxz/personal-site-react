'use strict';

var req = require('superagent');
var url = require('url');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TrackConstants = require('../constants/TrackConstants');
var config = require('../config');
var utils = require('../utils');

var TrackActions = {
  fetchTracks: function () {
    var tracksUrl = url.resolve(config.apiUrl, '/lastfm?limit=5');

    req.get(tracksUrl).end(function (err, res) {
      if (err || !utils.isOk(res.status)) {
        AppDispatcher.handleUpdate({
          actionType: TrackConstants.TRACK_UPDATE_ERROR,
          err: err,
          statusCode: res.statusCode,
          response: res.body
        });
        return;
      }

      AppDispatcher.handleUpdate({
        actionType: TrackConstants.TRACK_UPDATE,
        tracks: res.body
      });
    });
  }
};

module.exports = TrackActions;
