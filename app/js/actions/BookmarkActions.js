'use strict';

var req = require('superagent');
var url = require('url');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var BookmarkConstants = require('../constants/BookmarkConstants');
var config = require('../config');
var utils = require('../utils');

var BookmarkActions = {
  fetchBookmarks: function () {
    var bookmarksUrl = url.resolve(config.apiUrl, '/pinboard?limit=5');

    req.get(bookmarksUrl).end(function (err, res) {
      if (err || !utils.isOk(res.status)) {
        AppDispatcher.handleUpdate({
          actionType: BookmarkConstants.BOOKMARK_UPDATE_ERROR,
          err: err,
          statusCode: res.statusCode,
          response: res.body
        });
        return;
      }

      AppDispatcher.handleUpdate({
        actionType: BookmarkConstants.BOOKMARK_UPDATE,
        bookmarks: res.body
      });
    });
  }
};

module.exports = BookmarkActions;
