(function () {
	var app = angular.module('BlogApp', ['ngRoute']);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
			controller : 'MainController',
			templateUrl : 'templates/post.html'
		})
		.when('/api/post/:id', {
			controller : 'PostController',
			templateUrl : 'templates/postdetail.html'
		})
		.when('/api/postByCategory/:id', {
			controller : 'PostByCategoryController',
			templateUrl : 'templates/post.html'
		})
		.when('/api/postByPublisher/:id',{
			controller 	: 'PostByPublisherController',
			templateUrl	: 'templates/post.html'
		})
		.when('/api/postByGroup/:id',{
			controller 	: 'PostByGroupController',
			templateUrl	: 'templates/post.html'
		})
		.when('/page/:page',{
			controller 	: 'StaticController',
			templateUrl	: 'templates/about.html'
		})
		.when('/api/postByYear/:year',{
			controller 	: 'PostByYearController',
			templateUrl	: 'templates/post.html'
		})
		.when('/api/postByDate/:month',{
			controller 	: 'PostByDateController',
			templateUrl	: 'templates/post.html'
		})
		.otherwise({
			redirectTo : '/'

		});
	}]);

	//#/year/:year/month/:month

	app.controller('MainController',['$scope', 'ApiService', function($scope, ApiService) {
		$scope.posts = [];

		ApiService.fetchPosts().then(function(response) {
			console.log(response);
			$scope.posts = response.data;
		})
	}]);
	app.controller('PostController',['$scope', 'ApiService','$routeParams', function($scope, ApiService, $routeParams){
		$scope.postdetails = [];

		var id = $routeParams.id;
		ApiService.fetchPostDetails(id).then(function(response){
			console.log(response);
			$scope.postdetails = response.data;
		})
	}]);
	app.controller('PostByCategoryController',['$scope', 'ApiService','$routeParams', function($scope, ApiService, $routeParams){
		$scope.posts = [];

		var id = $routeParams.id;
		ApiService.fetchPostByCategory(id).then(function(response){
			console.log(response);
			$scope.posts = response.data;
		});
	}]);
	app.controller('PostByPublisherController',['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams){
		$scope.posts = [];

		var id = $routeParams.id;
		ApiService.fetchPostByPublisher(id).then(function(response){
			console.log(response);
			$scope.posts = response.data;
		});
	}]);
	app.controller('PostByGroupController',['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams){
		$scope.posts = [];

		var id = $routeParams.id;
		ApiService.fetchPostByGroup(id).then(function(response){
			console.log(response);
			$scope.posts = response.data;
		});
	}]);
	app.controller('AboutController',['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams){
		$scope.about = [];

		var id = $routeParams.id;
		ApiService.fetchAbout(id).then(function(response){
			console.log(response);
			$scope.about = response.data;
		});
	}]);
	app.controller('postByYearController',['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams){
		$scope.posts = [];

		var id = $routeParams.year;
		ApiService.fetchPostByYear(id).then(function(response){
			console.log(response);
			$scope.posts = response.data;
		});
	}]);
	app.controller('postByDateController',['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams){
		$scope.posts = [];

		var id = $routeParams.id;
		ApiService.fetchPostByDate(id).then(function(response){
			console.log(response);
			$scope.posts = response.data;
		});
	}]);

	app.service('ApiService', ['$http', function ($http) {
		this.fetchPosts = function () {
			return $http.get('/api/post');
		};

		this.fetchPostDetails = function(id){
			return $http.get('/api/post/'+id);
		}

		this.fetchPostByCategory = function(id){
			return $http.get('/api/postByCategory/'+id);
		}
		this.fetchPostByPublisher = function(id){
			return $http.get('/api/postByPublisher/'+id);
		}
		this.fetchPostByGroup = function(id){
			return $http.get('/api/postByGroup/'+id);
		}
		this.fetchAbout = function(){
			return $http.get('/api/about');
		}
		this.fetchPostByYear = function(){
			return $http.get('/api/postByYear/'+id);
		}
		this.fetchPostByDate = function(){
			return $http.get('/api/postByDate/'+id);
		}
	}]);

})();