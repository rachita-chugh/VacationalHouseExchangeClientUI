vacationHouseExchangeApp.controller('lettingTheHouseController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

var dataForRequest={};

	$scope.letHouse=function(){
		dataForRequest['loggedInEmail'] = loggedInUser;
		$( ".formId" ).each(function( index ) {
			dataForRequest[$( this ).attr('for')] = $( this ).next().find('.formValue').val();
		});
		console.log("Form data for request:"+ dataForRequest);
		
		vacationHouseExchangeAppService.callVHEServer("lettinghouseendpoints/lettingHouse",dataForRequest, function(result){
			if(result['statusCode'] == 0){
				$rootScope.$apply(function() {
					$location.path("viewHouses");
				});								
				
				
			}else{
				bootbox.alert(result['error_message']);
			}
				

			},function(error){
				bootbox.alert("Could not connect to server!");
			});
	}
	
	$scope.viewHouses = function(){
		$location.path("viewHouses");
	}
	$scope.editProfile = function(){
		$location.path("editDetails");
	}


}]);
