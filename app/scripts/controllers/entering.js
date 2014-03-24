'use strict';

angular.module('scientistmrliuApp')
  .controller('EnteringCtrl', function ($scope,Localdata) {
  	$scope.pageNumber = 1;

  	$scope.start = {};
  	$scope.inflect = {};
  	$scope.end = {};
  	$scope.pre = null;

  	$scope.last = {};
  	$scope.btnMsg = "查询";

  	var preData = {
  		start : $scope.start,
  		inflect : $scope.inflect,
  		end : $scope.end
  	}

   	$scope.queryData = function(){
   		var res = Localdata.checkIfExist(preData);
   		$scope.pageNumber = 2;
   		if(res){
   			var res = JSON.parse(res);
   			$scope.empty = false;
   			$scope.last.bobHeight = res.bobHeight;
			$scope.last.cushion = res.cushion;
			$scope.last.wool = res.wool;
			$scope.last.weight = res.weight;

   		}else{
   			$scope.empty = true;
   		}
   	}

   	$scope.saveData = function(){
   		var val = {
   			bobHeight:$scope.last.bobHeight,
			cushion:$scope.last.cushion,
			wool:$scope.last.wool,
			weight:$scope.last.weight
   		};
   		console.log(val);
   		Localdata.saveData(preData,val);
   		$scope.success = true;

   		$scope.pageNumber = 1;
   		delete $scope.last;
   		$scope.last = {};

   		$scope.start = {};
	  	$scope.inflect = {};
	  	$scope.end = {};
   	}

   	$scope.saveCancel = function(){
   		$scope.pageNumber = 1;
   		delete $scope.last;
   		$scope.last = {};
   	}
  });
