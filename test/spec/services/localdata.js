'use strict';

describe('Service: Localdata', function () {

  // load the service's module
  beforeEach(module('scientistmrliuApp'));

  // instantiate service
  var Localdata;
  beforeEach(inject(function (_Localdata_) {
    Localdata = _Localdata_;
  }));

  it('should do something', function () {
    expect(!!Localdata).toBe(true);
  });

});
