(function () {
	var app = angular.module('BlogApp', ['ngRoute']);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
			controller : 'MainController',
			templateUrl : 'templates/post.html'
		})
		.when('/post/:id', {
			controller : 'PostController',
			templateUrl : 'templates/postdetail.html'
		})
		.otherwise({
			redirectTo : '/'
		});
	}]);

	app.controller('MainController',['$scope', 'ApiService', function($scope, ApiService) {
		$scope.posts = [];

		ApiService.fetchPosts().then(function(response) {
			console.log(response);
			$scope.posts = response.data;
		})

	}]);

	app.service('ApiService', ['$http', function ($http) {
		this.fetchPosts = function () {
			return $http.get('/api/post');
		}
	}])

})();