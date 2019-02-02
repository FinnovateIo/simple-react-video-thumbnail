(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './VideoPlayer'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./VideoPlayer'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.VideoPlayer);
    global.index = mod.exports;
  }
})(this, function (module, _VideoPlayer) {
  'use strict';

  var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = _VideoPlayer2.default;
});