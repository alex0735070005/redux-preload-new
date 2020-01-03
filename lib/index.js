'use strict';

exports.__esModule = true;
exports.serverPreload = undefined;

require('babel-polyfill');

var _prefetch = require('./prefetch');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _serverPrefetch = require('./prefetch/serverPrefetch');

var _serverPrefetch2 = _interopRequireDefault(_serverPrefetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a list of decorators
 *
 * @return {Object} - connect wrappers
 */
exports.default = _prefetch2.default;
exports.serverPreload = _serverPrefetch2.default;