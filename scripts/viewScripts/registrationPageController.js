vacationHouseExchangeApp.controller('registrationPageController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {


var dataForRequest={};
	
	$scope.register=function(){
		//var data={};
		$( ".formId" ).each(function( index ) {
			dataForRequest[$( this ).attr('for')] = $( this ).next().find('.formValue').val();
		});
		console.log("Form data for request:"+ dataForRequest);
		
		vacationHouseExchangeAppService.callVHEServer("",dataForRequest, function(result){
			bootbox.alert("You are successfully registered!");
				

			},function(error){
				bootbox.alert("Could not connect to server!");
			});
	}
	
	$scope.viewHouses = function(){
		$location.path("viewHouses");
	}
}]);
