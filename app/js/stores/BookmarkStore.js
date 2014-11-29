'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var BookmarkConstants = require('../constants/BookmarkConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var CHANGE_EVENT = 'change';
var _bookmarks = [];

var BookmarkStore = objectAssign(new EventEmitter(), {

  getAll: function () {
    return _bookmarks;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
      case BookmarkConstants.BOOKMARK_UPDATE:
        _bookmarks = action.bookmarks;
        BookmarkStore.emitChange();
        break;
    }

    return true; // no errors
  })
});

module.exports = BookmarkStore;
