'use strict';

describe('Controller: EnteringCtrl', function () {

  // load the controller's module
  beforeEach(module('scientistmrliuApp'));

  var EnteringCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnteringCtrl = $controller('EnteringCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
