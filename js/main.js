'use strict'

/* App Module */
angular.module('learnapp', ['ui.router', 'learnControl', 'learnServe'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('loggedOut', {
      	url: '/',
      	views: {
      		'': {
      			templateUrl: 'partials/nav-loggedOut.html'
      		},
          'theView@loggedOut': {
          	templateUrl: 'partials/landing.html',
          	controller: 'WelcomeCtrl'
          }
      	}
      })

      .state('loggedOut.signUp', {
      	url: 'signup',
      	views: {
      		'theView': {
      			templateUrl: 'partials/signUp.html',
      			controller: 'SignUpCtrl'
      		}
      	}
      })

      .state('loggedOut.signIn', {
      	url: 'signin',
      	views: {
      		'theView': {
      			templateUrl: 'partials/signIn.html',
      			controller: 'SignInCtrl'
      		}
      	}
      })

      .state('loggedIn', {
      	url: '/courses',
      	views: {
      		'': {
      			templateUrl: 'partials/nav-loggedIn.html'
      		},
      		'theView@loggedIn': {
      			templateUrl: 'partials/courses.html',
      			controller: 'CoursesCtrl'
      		}
      	}
      })

      .state('loggedIn.technologies', {
      	url: '/{course}',
      	views: {
      		'theView': {
            templateUrl: 'partials/course.html',
            controller: 'CourseCtrl'
      		}
      	}
      })

      .state('loggedIn.videos', {
        url: '/{video}',
        views: {
          'theView': {
            templateUrl: 'partials/video.html',
            controller: 'VideoCtrl'
          }
        }
      })

      .state('loggedIn.technologies.videos', {
        controller: 'ToLoggedInVideosCtrl'
      })

      .state('signOut', {
      	controller: 'SignOutCtrl'
      })
  }]);