var app = angular.module("jsonData",[]);

app.controller("dataController",function($scope, $http){

		$http({
			method:'GET',
			url:'data/person.json'
		}).then(function successCallback(data){
			console.log(data);
		},function error(err){
			console.log(err);
		})

});
