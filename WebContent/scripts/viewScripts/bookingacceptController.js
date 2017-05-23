vacationHouseExchangeApp.controller('bookingacceptController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

	var data={
			"ownerEmailId": loggedInUser
	}
	vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/viewHouseRequest",data, function(result){
		if(result['statusCode'] == 0){
			
				$('#arbutton').css('display', 'block');
				$('#arbutton1').css('display', 'block');
				$("#username").text('Requested By :' + result['requesterEmailId']);
			
		}else if(result['statusCode'] == 2){
			$("#username").text('No request has been made');
		}else{
			bootbox.alert("There was some error. Please try again!")
		}
		},function(error){
			bootbox.alert("Could not connect to server!");
	});
	
	$scope.accept=function(){
			vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/acceptHouseRequest",data, function(result){
				if(result['statusCode'] == 0){
					bootbox.alert("Accepted Successfully");
					$location.path("viewHouses");
				}else{
					bootbox.alert("There was some error. Please try again!");
				}
				},function(error){
					bootbox.alert("Could not connect to server!");
				});
				
		};
		
		
		$scope.reject=function(){
			vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/rejectBookRequest",data, function(result){
				if(result['statusCode'] == 0){
					bootbox.alert("Rejected Successfully");
					$location.path("viewHouses");
				}else{
					bootbox.alert("There was some error. Please try again!")
				}
				},function(error){
					bootbox.alert("Could not connect to server!");
				});
		};
}]);
