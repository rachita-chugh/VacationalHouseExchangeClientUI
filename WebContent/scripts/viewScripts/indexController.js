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
			if(loggedInUser == "")
				$location.path("viewHousesNM");
			else
				$location.path("viewHouses");
		});
	});

	$scope.editProfile = function(){
		
			$location.path("editDetails");
		
	}
	
	$('#account').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#account').addClass('active');
			$location.path("editDetails");
		});
	});

	$('#acceptBookingHouses').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#acceptBookingHouses').addClass('active');
			$location.path("bookingaccept");
		});
	});
	
	$('#letHouse').click(function(){
		$rootScope.$apply(function() {
			$('.menuClass').removeClass('active');
			$('#letHouse').addClass('active');
			$location.path("lettingTheHouse");
		});
	});
	
	
	$('#logout').click(function(){
		var data={
				"emailId": loggedInUser	
		}
		vacationHouseExchangeAppService.callVHEServer("userendpoints/logout",data, function(result){
			if(result['statusCode'] == 0){
				loggedInUser = "";
				$('.menuClass').removeClass('active');
				$('#home').addClass('active');
				$('#logout').css('display', 'none');
				$('#account').css('display', 'none');
				$('#register').css('display', 'block');
				$('#acceptBookingHouses').css('display', 'none');
				$('#letHouse').css('display', 'none');
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