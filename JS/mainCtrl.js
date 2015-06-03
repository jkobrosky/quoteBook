var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

	$scope.isVisibleAdd = false;
	$scope.addBtn = true;
	$scope.isVisibleRemove = false;
	$scope.removeBtn = true;
	$scope.isVisibleFilter = false;
	$scope.filterBtn = true;

	$scope.getData = function() {
		$scope.quotes = dataService.getData();
	};

	$scope.addData = function(data) {
		$scope.newQuotes = dataService.addData({ text: $scope.addQuote, author: $scope.addAuthor });
		$scope.addQuote = '';
		$scope.addAuthor = '';
	}

	$scope.removeData = function(searchText) {
		$scope.textToRemove = dataService.removeData($scope.removeQuote);
		$scope.removeQuote = '';
	}

	$scope.filter = function() {
		$scope.searchText = '';
	}

	$scope.toggleAdd = function() {
		$scope.isVisibleAdd = !$scope.isVisibleAdd;
	}

	$scope.toggleRemove = function() {
		$scope.isVisibleRemove = !$scope.isVisibleRemove;
	}

	$scope.toggleFilter = function() {
		$scope.isVisibleFilter = !$scope.isVisibleFilter;
	}

	$scope.getData();

});