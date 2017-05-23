vacationHouseExchangeApp.controller('viewHousesController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {


	$scope.repeatData=[];
	var data = null;
	$scope.fetchHouseList = function(){

		var dialog = bootbox.dialog({
			message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>',
			closeButton: false
		});
		// do something in the background

		vacationHouseExchangeAppService.callVHEServer("viewHouseEndPoints/viewHouse","", function(result){
			$rootScope.$apply(function() {
				$scope.repeatData = result['house_key'];
				dialog.modal('hide');
			});									
		},function(error){
			dialog.modal('hide');
			bootbox.alert("Could not connect to server!");
		});
	}				
	$scope.fetchHouseList();



	$scope.viewreview=function($event, data){
		$location.path("reviewandrating");
		$state.go("State", {ViewReviewOfUser : data.emailId});
		$scope.$apply();
	};		
	$scope.bookHouse=function($event, data){


		var requestData = {
				"ownerEmailId" : data.emailId,
				"requesterEmailId" : loggedInUser
		}

		vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/bookHouse",requestData, function(result){
			if(result['statusCode'] == 0){
				bootbox.alert("You request for booking this house is successfully made !");
			}else{
				bootbox.alert("Error in booking request ");
			}		
		},function(error){
			bootbox.alert("Could not connect to server!");
		});
	};		
}]);
