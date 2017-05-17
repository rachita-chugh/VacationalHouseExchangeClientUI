vacationHouseExchangeApp.controller('bookingacceptController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

	var data={
			"ownerEmailId": loggedInUser
	}
	vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/viewHouseRequest",data, function(result){
		if(result['statusCode'] == 0){
			if(result['username'] == 'not found'){
				$("#username").val('No request has been made');
			}
			else{
				$('#arbutton').css('display', 'block');
				$("#username").val('Requested By :' + result['username']);
			}
		}else{
			bootbox.alert("There was some error. Please try again!")
		}
		},function(error){
			bootbox.alert("Could not connect to server!");
	});
	
	$scope.accept=function(){
			vacationHouseExchangeAppService.callVHEServer("bookHouseEndPoints/acceptHouseRequest",data, function(result){
				if(result['statusCode'] == 0){
					bootbox.alert("Accepted Successfully")
				}else{
					bootbox.alert("There was some error. Please try again!")
				}
				},function(error){
					bootbox.alert("Could not connect to server!");
				});
				
		};
		
		
		$scope.reject=function(){
			vacationHouseExchangeAppService.callVHEServer("reviewnandrating/addreviewnandrating",data, function(result){
				if(result['statusCode'] == 0){
					bootbox.alert("Rejected Successfully")
				}else{
					bootbox.alert("There was some error. Please try again!")
				}
				},function(error){
					bootbox.alert("Could not connect to server!");
				});
		};
}]);
