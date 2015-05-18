'use-strict'

angular.module('learnControl', [])
  .controller('WelcomeCtrl', ['$scope', 'JsonDetails', function($scope, JsonDetails) {
    JsonDetails.get(function(response) {
    	console.log(response);
    	$scope.icons = response.imgs;
    });
  }])

  .controller('CoursesCtrl', ['$scope', 'JsonDetails', function($scope, JsonDetails) {
  	JsonDetails.get(function(response) {
      $scope.technologies = response.technologies;
  	});
  }])

  .controller('CourseCtrl', ['$scope', '$http', '$stateParams', 'JsonDetails', function($scope, $http, $stateParams, JsonDetails) {
    JsonDetails.get(function(response) {
      var course = $scope.course = $stateParams.course;
      var header = $scope.header = response.technologies['header'];
      console.log(header, 'headers');
      var tech = $scope.technology = response.technologies[course];
      console.log(tech, 'tech');
    
      $scope.videos = tech.videos;
      console.log($scope.videos, 'videos');
    });
  }])

  .controller('VideoCtrl', ['$scope', '$http', '$stateParams', 'JsonDetails', function($scope, $http, $stateParams, JsonDetails) {
    console.log('inside video controller');
  }])

  .controller('ToLoggedInVideosCtrl', ['$scope', '$state', function($scope, $state) {
    console.log('redirecting...')
    $state.go('loggedOut');
  }])

  .controller('SignUpCtrl', ['$scope', 'JsonDetails', function($scope, JsonDetails) {
    console.log('inside signup ctrl')
    $scope.signUp = function() {
    	console.log('inside function')
    	$scope.formData = {
    		username: $scope.username,
    		password: $scope.password 
    	};

    	JsonDetails.create_user($scope.formData, function(response) {
        if(response.type == false) {
        	alert(response.data);
        	console.log('false');
        } else {
          console.log('true');
        }
    	});
    };
  }])

  .controller('SignInCtrl', ['$scope', '$state', 'JsonDetails', function($scope, $state, JsonDetails) {
    $scope.submit = function() {
    	JsonDetails.get(function(response) {
        var users = response.users;
        console.log(users)
        var unauth_user = $scope.username;
        var unauth_pass = $scope.password;
        for (user in users) {
        	console.log(user);
        	console.log(users[user]);
        	if (user === unauth_user && users[user] === unauth_pass) {

        		$state.go('loggedIn');
        	}

        	$scope.username = $scope.password = '';
          $scope.message = 'Incorrect login credentials'
        }
    	});
    };
  }])

  .controller('SignOutCtrl', ['$scope', '$state', function($scope, $state) {
    $state.go('loggedOut');
  }]);