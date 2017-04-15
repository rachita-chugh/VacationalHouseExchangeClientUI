vacationHouseExchangeApp.controller('viewHousesController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {

$scope.repeatData=[];
var data = null;
var result = {"house_key":[{"airConditioning":"Yes","address":"jjj","city":"lmlk","fullName":"test","emailId":"test@bjbj.mjk","numberOfRooms":"jj","availabilityPublicTransport":"Yes","swimmingPool":"Yes","availableFrom":"","phoneNo":"123345676","distanceCityCenter":"09","availableTo":"","longStayDiscount":"mk","minOccupierRating":"","suburb":"p;pklom","pointNeededWeek":"jbjn"},{"airConditioning":"Yes","address":"jmk","city":"njn","fullName":"nkjn","emailId":"nmjnbjn","numberOfRooms":"88","availabilityPublicTransport":"Yes","swimmingPool":"Yes","availableFrom":"","phoneNo":"34545455","distanceCityCenter":"mknk","availableTo":"","longStayDiscount":"jmnjn","minOccupierRating":"","suburb":"kjk","pointNeededWeek":"jnjjjhj"},{"airConditioning":"Yes","address":"Unit 2 26 Edger Street","city":"jinbhuy","fullName":"nkjn","emailId":"nchawl94@gmail.com","numberOfRooms":"ihji","availabilityPublicTransport":"Yes","swimmingPool":"Yes","availableFrom":"","phoneNo":"gftfgyy","distanceCityCenter":"jiio","availableTo":"","longStayDiscount":"juhuu","minOccupierRating":"","suburb":"huui","pointNeededWeek":"kk"},{"airConditioning":"YES","address":"38 Wests Road","city":"Melbourne","fullName":"rachita","emailId":"1491819827990@y.com","numberOfRooms":"6","availabilityPublicTransport":"bus, train, tram","swimmingPool":"YES","availableFrom":"","phoneNo":"0416857086","distanceCityCenter":"10km","availableTo":"","longStayDiscount":"10","minOccupierRating":"","suburb":"10km","pointNeededWeek":"50"},{"airConditioning":"YES","address":"38 Wests Road","city":"Melbourne","fullName":"rachita","emailId":"1491820003679@y.com","numberOfRooms":"6","availabilityPublicTransport":"bus, train, tram","swimmingPool":"YES","availableFrom":"","phoneNo":"0416857086","distanceCityCenter":"10km","availableTo":"","longStayDiscount":"10","minOccupierRating":"","suburb":"Maribyrnong","pointNeededWeek":"50"},{"airConditioning":"YES","address":"38 Wests Road","city":"Melbourne","fullName":"rachita","emailId":"1491834917696@y.com","numberOfRooms":"6","availabilityPublicTransport":"bus, train, tram","swimmingPool":"YES","availableFrom":"","phoneNo":"0416857086","distanceCityCenter":"10km","availableTo":"","longStayDiscount":"10","minOccupierRating":"","suburb":"Maribyrnong","pointNeededWeek":"50"},{"airConditioning":"YES","address":"38 Wests Road","city":"Melbourne","fullName":"rachita","emailId":"1491834947269@y.com","numberOfRooms":"6","availabilityPublicTransport":"bus, train, tram","swimmingPool":"YES","availableFrom":"","phoneNo":"0416857086","distanceCityCenter":"10km","availableTo":"","longStayDiscount":"10","minOccupierRating":"","suburb":"Maribyrnong","pointNeededWeek":"50"}],"statusCode":"0"};
						$scope.repeatData = result['house_key'];
						
/*vacationHouseExchangeAppService.callVHEServer("viewHouseEndPoints/viewHouse","", function(result){
						$scope.repeatData = result['house_key'];
				},function(error){
				bootbox.alert("Could not connect to server!");
			});*/

	
	
	$scope.editProfile = function(){
		$location.path("editDetails");
	}
	$scope.letHouse = function(){
		$location.path('lettingTheHouse');
	}

}]);
