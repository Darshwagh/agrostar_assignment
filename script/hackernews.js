
var app = angular.module("mystories", []);
app.controller("topstoriesCtrl", function ($scope, $http) {
	$scope.Stories = [];
	$scope.init = function () {
		$http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function (responseData) {
			story_ids = responseData.data;

			for (var i = 0; i < 15; i++) {
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + story_ids[i] + '.json').then(function (response) {
					$scope.Stories.push(response.data);
					$scope.d = ((new Date(response.data.time)).getHours());
				});
			}
		});

	}

});



var app = angular.module("mystories", []);
app.controller("topstoriesCtrl", function ($scope, $http, $q) {
	$scope.Stories = [];
	$scope.init = function () {
		$http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(function (responseData) {
				story_ids = responseData.data.map(function (id) {
					$http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
						.then(function (response) {
							$scope.Stories.push(response.data);
							$scope.d = ((new Date(response.data.time)).getHours());
						});
				});
			});

	}
	$scope.getCommentsForPost = getCommentsForPost;

	function getCommentsForPost(commentIds) {
		var allCommentsPromise = commentIds.map(function(commentId) {
			return $http.get('https://hacker-news.firebaseio.com/v0/item/' + commentId + '.json');
		});

		$q.all(allCommentsPromise).then(function(allComments) {
			console.log(allComments);
			var allCommentData = allComments.map(function(comment) {
				return comment.data;
			})
			$scope.allComments = allCommentData;
		})
	}

});




