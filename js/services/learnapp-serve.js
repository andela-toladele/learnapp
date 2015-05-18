'use-strict'

angular.module('learnServe', [])
  .factory('JsonDetails', ['$http', function($http) {
    return {
    	get: function(success, error) {
    		$http.get('js/learnapp.json').success(success).error(error);
    	},
      
      create_user: function(data, success, error) {
        $http.post('js/learnapp.json', data).success(success).error(error);
      }
    }
  }]);