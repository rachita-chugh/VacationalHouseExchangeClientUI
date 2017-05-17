vacationHouseExchangeApp.controller('viewHousesController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {


	$scope.repeatData=[];
	var data = null;
			$scope.fetchHouseList = function(){
				vacationHouseExchangeAppService.callVHEServer("viewHouseEndPoints/viewHouse","", function(result){
					$rootScope.$apply(function() {
						$scope.repeatData = result['house_key'];
				      });									
					},function(error){
					bootbox.alert("Could not connect to server!");
				});
			}				
		$scope.fetchHouseList();
		
		
		
		$scope.viewreview=function(){
			$location.path("reviewandrating");
			$scope.$apply();
		};		
}]);
