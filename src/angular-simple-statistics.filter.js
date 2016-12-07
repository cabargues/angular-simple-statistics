/**
 * Created by cabargues on 7/12/16.
 */
/**
 * Created by cabargues on 7/12/16.
 *
 * Factory to wrap and expose simple-statistics library as an injectable factory.
 *
 */
(function() {
  'use strict';

  angular
    .module('cabargues.angularSimpleStatistics')
    .filter('ss', function(ss) {
      return function(array, method) {
        // Simply call the specified method passing the array as argument
        return ss[method](array);
      };
    });
})();