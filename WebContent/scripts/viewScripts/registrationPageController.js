vacationHouseExchangeApp.controller('registrationPageController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {


var dataForRequest={};
	
	$scope.register=function(){
		//var data={};
		var errorFlag=false;
		$( ".formLabel" ).each(function( index ) {
			if(errorFlag == false){
			var fieldId = $( this ).attr('for');
			if($("#"+fieldId).hasClass('error')){
				errorFlag=true;
				bootbox.alert("Please fill the form correctly!");
				return;
			}else if($("#"+fieldId).hasClass('mandatoryField') && $("#"+fieldId).val()==""){
				errorFlag = true;
				bootbox.alert("Please fill the mandatory field: "+ $("#"+fieldId).attr('labelValue'));
				return;
			}else{
				if(fieldId == "password"){
				dataForRequest[fieldId] = NGCommonUtilities.encryptData($( "#"+ fieldId).val());
				}else{
					dataForRequest[fieldId] = $( "#"+ fieldId).val();
				}
			}
			}
			
			
			
		});
		if(errorFlag == false){
			console.log("Form data for request:"+ dataForRequest);
		
			vacationHouseExchangeAppService.callVHEServer("userendpoints/register",dataForRequest, function(result){
				//bootbox.alert("You are successfully registered!");
				if(result['statusCode'] == 0){
					$location.path("viewHouses");
					$scope.apply();
				}else{
					bootbox.alert("Problem Occurred while registering!");
				}

				},function(error){
					bootbox.alert("Could not connect to server!");
				});
		}
		
	}
	
	$scope.viewHouses = function(){
		$location.path("viewHouses");
	}
}]);
