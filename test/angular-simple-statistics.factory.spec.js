/**
 * Created by cabargues on 5/12/16.
 */
'use strict';

describe('Module', function() {
  var ss;
  beforeEach(module('cabargues.angularSimpleStatistics'));

  beforeEach(inject(function(_ss_){
    ss = _ss_;
  }));

  describe('Simple Statistics factory', function () {
    it ('is defined', function (){
      expect(ss).toBeDefined();
    });
  });


  describe('Performs basic descriptive statistics', function() {

    var testData = [1, 2, 3, 4, 5];

    it ('should calculate the min', function() {
      expect(ss.min(testData)).toBe(1);
    });

    it ('should calculate the max', function() {
      expect(ss.max(testData)).toBe(5);
    });

  });

});