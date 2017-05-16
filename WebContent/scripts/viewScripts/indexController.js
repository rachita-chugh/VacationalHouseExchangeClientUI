vacationHouseExchangeApp.controller('indexController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ){
	$('#home').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#home').addClass('active');
			$location.path("home");
		});
	});
	$('#login').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#login').addClass('active');
			$location.path("loginPage");
		});
	});
	$('#register').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#register').addClass('active');
			$location.path("registration_page");
		});
	});
	$('#viewHouses').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#viewHouses').addClass('active');
			$location.path("viewHouses");
		});
	});

	$scope.editProfile = function(){
		
			$location.path("editDetails");
		
	}

	$('#logout').click(function(){
		var data={
				"emailId": loggedInUser	
		}
		vacationHouseExchangeAppService.callVHEServer("userendpoints/login",data, function(result){
			if(result['statusCode'] == 0){
				$('.menuClass').removeClass('active');
				$('#home').addClass('active');
				$('#logout').css('display', 'none');
				$('#register').css('display', 'block');
				$('#login').css('display', 'block');
				$location.path("home");
				$scope.$apply();
			}else{
				bootbox.alert("There was some error in logout. Please try again!")
			}
		},function(error){
			bootbox.alert("Could not connect to server!");
		});
	});
}]);