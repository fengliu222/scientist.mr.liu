'use strict';

describe('Directive: ngNumber', function () {

  // load the directive's module
  beforeEach(module('scientistmrliuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-number></ng-number>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngNumber directive');
  }));
});
