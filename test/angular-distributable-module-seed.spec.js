/**
 * Created by cabargues on 5/12/16.
 */
'use strict';

describe('My tests', function() {
  beforeEach(module('cabargues.angularDistributableModuleSeed'));

  var testData = {

  };


  describe('component renders', function() {
    var elm, scope;

    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element('<my-component data="data"></my-component>');
      scope = $rootScope;
      scope.data = testData;
      $compile(elm)(scope);
      scope.$digest();
    }));


    it ('should render data', inject(function($compile, $rootScope) {
      expect(1).toBe(1);
    }));


    it ('should bind the content', function(){
      var newData = {
      };

      scope.$apply(function() {
        scope.data = newData;
      });

      expect(1).toBe(1);

    });

  });

  describe('component controller', function() {
    var controller;
    var scope;
    beforeEach(inject(function($rootScope, $componentController){
      scope = $rootScope.$new();
      controller = $componentController('myComponent', { $scope: scope }, { data: testData })
    }));

    it('should expose my data', function() {
      expect(controller).toBeDefined();
      expect(controller.data).toBeDefined();
    });
  });



});