'use strict';

//var VHEServer="http://172.20.10.6:8081/VacationalHouseExchange/vhe/";
//var VHEServer = "http://vacationalhouseexchangewsenv.9nsft9whya.ap-southeast-2.elasticbeanstalk.com/vhe/";
var VHEServer = "http://localhost:8082/VacationalHouseExchange/vhe/";
var loggedInUser="";

var vacationHouseExchangeApp = angular.module("vacationHouseExchangeApp", ['ngRoute']);

vacationHouseExchangeApp.config(function ($routeProvider) {
	$routeProvider.
	when('/',
			{
		templateUrl: 'partials/home.html',
		controller: 'homeController',
			}).when('/home',
					{
				templateUrl: 'partials/home.html',
				controller: 'homeController',

					}).when('/loginPage',
					{
				templateUrl: 'partials/loginPage.html',
				controller: 'loginPageController',

					}).when('/menu',
									{
								templateUrl: 'partials/menu.html',
								controller: 'menuController'
									}).when('/registration_page',
										{
											templateUrl: 'partials/registration_page.html',
											controller: 'registrationPageController'
									}).when('/viewHousesNonMember',
											{
										templateUrl: 'partials/viewHousesNonMember.html',
										controller: 'viewHousesNonMemberController',

											})
									.when('/viewHouses',
										{
											templateUrl: 'partials/viewHouses.html',
											controller: 'viewHousesController'
									}).when('/lettingTheHouse',
										{
											templateUrl: 'partials/lettingTheHouse.html',
											controller: 'lettingTheHouseController'
									}).when('/editDetails',
										{
											templateUrl: 'partials/editDetails.html',
											controller: 'editDetailsController'
									}).otherwise({
										redirectTo: 'home.html'
										});

});


vacationHouseExchangeApp.factory('vacationHouseExchangeAppService', ['$http', '$window','$location', function ($http, $window,$location) {

	var callVHEServer = function (url, data, success_callback, fail_callback) {
		url = VHEServer  + url;
		if (data == null){
			data = "";
		}else{
			var objjson=JSON.stringify(data);
		}
		
		console.log('url',url)
		console.log('Request Data',data);
		$.ajax({
			 dataType: 'json',
			  type:'POST',
			url: url, 
			data: objjson,
			success: function(result){
			console.log("success"+result);
			if (success_callback) {
				//var res = result['STATUS_CODE'];
				//idleService.resetTimer();
				success_callback(result);
				}
			},
			error: function(result){
				//var res = result['STATUS_CODE'];
				fail_callback(result);
			}
		});

	};
	
	var callHttpGet = function (url,success_callback, fail_callback) {
		url = VHEServer + "/" + url;
		url= encodeURI(url);
		$http({
			method: 'GET',
			url: url
		}).then(success_callback, fail_callback);

	};

	return {
		callVHEServer: callVHEServer,
		callHttpGet: callHttpGet,
		
	};
}]);



