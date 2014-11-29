'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TrackConstants = require('../constants/TrackConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var CHANGE_EVENT = 'change';
var _tracks = [];

var TrackStore = objectAssign(new EventEmitter(), {

  getAll: function () {
    return _tracks;
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
      case TrackConstants.TRACK_UPDATE:
        _tracks = action.tracks;
        TrackStore.emitChange();
        break;
    }

    return true; // no errors
  })
});

module.exports = TrackStore;
