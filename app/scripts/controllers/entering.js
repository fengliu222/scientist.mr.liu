'use strict';

angular.module('scientistmrliuApp')
  .controller('EnteringCtrl', function ($scope,Localdata) {
  	$scope.pageNumber = 1;
    function dataInit(){
      $scope.start = {
        freq: null,
        order: null,
        slope: null
      };

      $scope.inflect = {
        freq:null,
        order: null
      };

      $scope.end = {
        freq:null,
        order:null
      };

      $scope.pre = null;

      $scope.last = {
        bobHeight: null,
        cushion: null,
        wool: null,
        weight: null
      };
    }

    dataInit();
  	$scope.btnMsg = "查询";
    var preData = null;

   	$scope.queryData = function(){
      preData = {
        start : $scope.start,
        inflect : $scope.inflect,
        end : $scope.end
      }
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
   		Localdata.saveData(preData,val);
   		$scope.success = true;
      dataInit();
   		$scope.pageNumber = 1;
   		 
      $scope.last.bobHeight=null;
      $scope.last.cushion=null;
      $scope.last.wool=null;
      $scope.last.weight=null;
 
   	}

   	$scope.saveCancel = function(){
      $scope.success = false;
   		$scope.pageNumber = 1;
   		 
   		$scope.last = {};
      $scope.last.bobHeight=null;
      $scope.last.cushion=null;
      $scope.last.wool=null;
      $scope.last.weight=null;
   	}
  });
