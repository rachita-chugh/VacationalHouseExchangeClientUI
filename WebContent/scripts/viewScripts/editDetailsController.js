vacationHouseExchangeApp.controller('editDetailsController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

	$scope.viewHouses = function(){
		$location.path("viewHouses");
	}


}]);
