vacationHouseExchangeApp.controller('bookingacceptController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

	vacationHouseExchangeAppService.callVHEServer("viewHouseEndPoints/viewHouse","", function(result){
		if(result['statusCode'] == 0){
			$("#username").val('Requested By :' + result['username']);
		}else{
			bootbox.alert("There was some error. Please try again!")
		}
		},function(error){
			bootbox.alert("Could not connect to server!");
	});
	
	$scope.accept=function(){
			vacationHouseExchangeAppService.callVHEServer("reviewnandrating/addreviewnandrating",data, function(result){
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
