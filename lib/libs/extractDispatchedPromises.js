'use strict';

exports.__esModule = true;

var _lodash = require('lodash.isarray');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extract dispatched promises
 *
 * @param  {Array|Object|Function} dispatchedActions - dispatched actions
 * @return {Array} - extracted promises
 */
function extractDispatchedPromises(dispatchedActions) {
  var arrrayOfdispatchedActions = (0, _lodash2.default)(dispatchedActions) ? dispatchedActions : [dispatchedActions];

  return arrrayOfdispatchedActions.reduce(function (result, action) {
    if (!action) {
      return result;
    } else if (typeof action.then === 'function') {
      result.push(action);
    } else if (action.payload) {
      if (typeof action.payload.then === 'function') {
        result.push(action.payload);
      } else if (action.payload.promise && typeof action.payload.promise.then === 'function') {
        result.push(action.payload.promise);
      }
    }
    return result;
  }, []);
}

exports.default = extractDispatchedPromises;
module.exports = exports['default'];