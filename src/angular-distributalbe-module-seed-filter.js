/**
 * Created by cabargues on 6/12/16.
 *
 * Description
 *
 */
(function() {
  'use strict';

  angular
    .module('cabargues.angularDistributableModuleSeed')
    .filter('myFilter', function() {
      return function (data) {
        return data;
      }
    })
})();