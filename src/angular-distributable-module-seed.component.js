/**
 * Created by cabargues on 29/11/16.
 *
 * Description
 *
 */
(function () {
  'use strict';

  var myComponentCtrl = function () {
    var vm = this;

  };

  angular
    .module('cabargues.angularDistributableModuleSeed')
    .component('myComponent', {
      bindings: {
        data: '<'
      },
      template: '',
      controller: myComponentCtrl
    });

})();
