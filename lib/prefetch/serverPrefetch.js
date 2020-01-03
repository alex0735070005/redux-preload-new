'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Recursively tries to render components on server and when gets to component with prefetching
 * get an exception with dispatched prefetch actions. Then gets all async actions and waits for
 * its resolving
 *
 * @param  {Object} routerContext — component
 * @param  {Object} prefetchCursor — counter, which ensures to invoke prefetch actions only once
 * @return {Promise} promise
 */
var prefetch = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(routerContext, prefetchCursor) {
    var dispatchedPromisses;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            prefetchCursor.current = -1; // eslint-disable-line no-param-reassign

            _context.prev = 1;

            _server2.default.renderToStaticMarkup(_react2.default.createElement(
              _ServerPrefetchProvider2.default,
              { prefetchCursor: prefetchCursor },
              routerContext
            ));
            _context.next = 14;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](1);

            if (!(_context.t0.type === 'prefetch')) {
              _context.next = 13;
              break;
            }

            dispatchedPromisses = (0, _extractDispatchedPromises2.default)(_context.t0.dispatchedActions);

            if (!dispatchedPromisses.length) {
              _context.next = 12;
              break;
            }

            _context.next = 12;
            return _bluebird2.default.all(dispatchedPromisses);

          case 12:
            return _context.abrupt('return', prefetch(routerContext, prefetchCursor));

          case 13:
            throw _context.t0;

          case 14:
            return _context.abrupt('return', null);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 5]]);
  }));

  return function prefetch(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = serverPrefetch;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _extractDispatchedPromises = require('../libs/extractDispatchedPromises');

var _extractDispatchedPromises2 = _interopRequireDefault(_extractDispatchedPromises);

var _ServerPrefetchProvider = require('./ServerPrefetchProvider');

var _ServerPrefetchProvider2 = _interopRequireDefault(_ServerPrefetchProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resets last prefetch cursor and invoke prefetch
 *
 * @param  {Object} routerContext — component
 * @return {Promise} promise
 */
function serverPrefetch(routerContext) {
  var prefetchCursor = {
    last: -1
  };

  return prefetch(routerContext, prefetchCursor);
}module.exports = exports['default'];