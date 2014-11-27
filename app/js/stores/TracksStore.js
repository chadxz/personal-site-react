'use strict';

var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var CHANGE_EVENT = 'change';
var _tracks = [];

var TracksStore = objectAssign(EventEmitter.prototype, {

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

  init: function () {
    var self = this;
    function addTrackLater() {
      setTimeout(function () {
        _tracks = [].concat(Date.now(), _tracks).slice(0, 5);
        self.emitChange();
        addTrackLater();
      }, 2000);
    }

    addTrackLater();
  }
});

module.exports = TracksStore;
