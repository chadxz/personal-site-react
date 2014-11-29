'use strict';
var Dispatcher = require('flux').Dispatcher;
var objectAssign = require('object-assign');

var AppDispatcher = objectAssign(new Dispatcher(), {
  handleUpdate: function (action) {
    this.dispatch({
      source: 'UPDATE',
      action: action
    });
  }
});

module.exports = AppDispatcher;
