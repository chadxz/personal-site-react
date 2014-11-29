'use strict';

var utils = {
  isOk: function (statusCode) {
    return (statusCode >= 200 && statusCode < 300);
  }
};

module.exports = utils;
