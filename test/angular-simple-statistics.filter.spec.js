/**
 * Created by cabargues on 5/12/16.
 */
'use strict';

describe('Module', function () {
  var ss;
  var ssFilter;
  beforeEach(module('cabargues.angularSimpleStatistics'));

  // beforeEach(inject(function(_ss_){
  //   ss = _ss_;
  // }));

  beforeEach(inject(function (_ssFilter_) {
    ssFilter = _ssFilter_;
  }));

  describe('Filter', function () {

    it('works with arrays', function () {
      expect(ssFilter([1, 2, 3, 4], 'min')).toBe(1);
    });

    it('works with matrix', function () {
      var expectedResult = { m: 1, b: 0 };
      expect(ssFilter([[0, 0], [1, 1]], 'linearRegression')).toEqual(expectedResult);
    });

    it('works with numbers', function () {
      var expectedResult = { '0': 0.5, '1': 0.5 };
      expect(ssFilter(0.5, 'bernoulliDistribution')).toEqual(expectedResult);
    })

  });

});