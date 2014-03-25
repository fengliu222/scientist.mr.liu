'use strict';

angular.module('scientistmrliuApp')
  .service('Localdata', function Localdata() {

    return {
    	checkIfExist : function(data){
    		var data = JSON.stringify(data);
    		var res = store(data);
            console.log(data);
    		if(res) return res;
    		else return false;
    	},
    	saveData : function(key, value){
    		var key = JSON.stringify(key),
    			value = JSON.stringify(value);

    		store(key, value);
    	}
    }
  });
