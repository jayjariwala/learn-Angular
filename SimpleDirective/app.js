angular.module('myApp',[])
	.controller('mainCtrl',function($scope){
		$scope.user1 ={
			name: 'Luke skywalker',
			address: {
				house_no: "583",
				street: "Paulison Ave",
				city: "Clifton",
				state: "New Jersey"
			},
			friends : [
			"Gopal",
			"rahul",
			"suraj"
			]
		}
		$scope.user2 ={
			name: 'Jay Jariwala',
			address: {
				house_no: "583",
				street: "Paulison Ave",
				city: "Clifton",
				state: "New Jersey"
			},
			friends : [
			"Gopal",
			"rahul",
			"suraj"
			]
		}

		console.log($scope)
	})

	.directive('userInfoCard', function(){
		
		return{
			templateUrl: "userInfoCard.html",
			restrict: "E",
			replace:true,
			scope:{
				user: "="
			},
			controller: function($scope)
			{
				$scope.collepsed = false;
				$scope.knightMe = function(user)
				{
				user.rank = "knight";
				}

				$scope.collepse = function()
				{
					$scope.collepsed = !$scope.collepsed;
				}

				console.log($scope)
			}
		}

	})

	.directive('myDirective', function(){
		return{
				controller : function()
				{
				console.log("some other scope")
				}
		}
	})


	.directive('userAddress', function(){
		
		return{
			templateUrl: "userAddress.html",
			restrict: "E",
			replace:true,
			scope:true,	
			controller: function($scope)
			{
				$scope.collepse =  function()
				{
					$scope.collepsed = !$scope.collepsed;
				}
			}
		}

	})



	