'use strict';

exports.__esModule = true;
/**
 * Get React component display name
 *
 * @param  {Object} Component - React component
 * @return {String} - component name
 */
function getDisplayName(Component) {
  return Component && (Component.displayName || Component.name) || 'Component';
}

exports.default = getDisplayName;
module.exports = exports['default'];