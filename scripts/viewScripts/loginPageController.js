vacationHouseExchangeApp.controller('loginPageController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

	/****
	* Added by Nidhi 
	* Role: forgot Password
	***/
	$scope.forgetPassword=function(){
		
		bootbox.prompt({
		title: "Forgot Password",
		message: "Enter email id :",
		inputType: 'email',
		callback: function (result) {
			var data={
				"emailId": result	
			}
			vacationHouseExchangeAppService.callVHEServer("forgotPassword",data, function(result){
				if(result['STATUS_CODE'] == 0){
					bootbox.alert(result['RESPONSE_STATUS']);
					
					
				}else{
					bootbox.alert(result['FAILURE_REASON']);
					
				}
				

			},function(error){
				bootbox.alert("Could not connect to server!");
			});
		}
	});
		
	};
	
	
	/***Ends***/

	$scope.registerWithUs=function(){
		$location.path('registration_page');
	};
	
	/****
	* Added by Nidhi 
	* Role: validate user
	***/
	
	$scope.login=function(){
		$location.path("viewHouses");
		/*var data={
				"username": $("#username").val(),
				"password" : $("#password").val()
			}
		vacationHouseExchangeAppService.callVHEServer("userendpoints/login",data, function(result){
			bootbox.alert("You are logged in!");
			$location.path("viewHouses");
				

			},function(error){
				bootbox.alert("Could not connect to server!");
			});*/
	};



}]);
