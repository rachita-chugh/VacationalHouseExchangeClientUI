vacationHouseExchangeApp.controller('reviewandratingController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {
	$scope.repeatData=[];
	$scope.responseData;
	$scope.viewReviewRating = function(){
		
		var data={
				"emailId":loggedInUser
		}
		
		vacationHouseExchangeAppService.callVHEServer("reviewnandrating/viewRatingsAndReviews",data, function(result){
			responseData = result['averageRating'];
			repeatData =  result['house_key'];
			},function(error){
				bootbox.alert("Could not connect to server!");
			});
	}
	$scope.viewReviewRating();
	$scope.reviewandratingform=function(){
		//	$location.path("viewHouses");
			var success=false;
			if($("#review").val() == null || $("#review").val() == "" || $("#review").hasClass('review')){
				bootbox.alert("Please enter review");
				return;
			}
			if($("#rating").val() == null || $("#rating").val() == ""){
				bootbox.alert("Please enter rating");
				return;
			}
			
			var data={
					"review": $("#review").val(),
					"rating" : $("#rating").val(),
					"emailId":loggedInUser
			}		
			
			vacationHouseExchangeAppService.callVHEServer("reviewnandrating/addreviewnandrating",data, function(result){
				if(result['statusCode'] == 0){
					bootbox.alert("Review and Rating added successfully.")
				}else{
					bootbox.alert("There was some error. Please try again!")
				}
				},function(error){
					bootbox.alert("Could not connect to server!");
				});
				
		};
	
	


}]);
