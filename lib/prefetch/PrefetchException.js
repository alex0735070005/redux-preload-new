'use strict';

exports.__esModule = true;
exports.default = PrefetchException;
/**
 * @constructor
 *
 * @param {Array} dispatchedActions — array of dispatched actions
 */
function PrefetchException(dispatchedActions) {
  this.type = 'prefetch';
  this.dispatchedActions = dispatchedActions;
}
module.exports = exports['default'];