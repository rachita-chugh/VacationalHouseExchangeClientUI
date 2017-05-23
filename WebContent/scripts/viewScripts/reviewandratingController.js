/*vacationHouseExchangeApp.controller('reviewandratingController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $stateParams, $location, $window, vacationHouseExchangeAppService ) {*/
vacationHouseExchangeApp.controller('reviewandratingController', ['$scope','$rootScope', '$location', '$window', 'vacationHouseExchangeAppService', function ($scope,$rootScope, $location, $window, vacationHouseExchangeAppService ) {
	$scope.repeatData=[];
	$scope.responseData = null;
	var data = null;
	console.log("review for: "+$rootScope.reviewEmail);
	$scope.viewReviewRating = function(){
		var requestdata= {
				"emailId":$rootScope.reviewEmail
		}
		
		vacationHouseExchangeAppService.callVHEServer("reviewnandrating/viewRatingsAndReviews",requestdata, function(result){
			$rootScope.$apply(function() {
				$scope.responseData = result['averageRating'];
				$scope.repeatData =  result['house_key'];
			});	
			
			},function(error){
				bootbox.alert("Could not connect to server!");
			});
	};
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
			
			var requestdata={
					"review": $("#review").val(),
					"rating" : $("#rating").val(),
					"emailId":$rootScope.reviewEmail
			}		
			
			vacationHouseExchangeAppService.callVHEServer("reviewnandrating/addreviewnandrating",requestdata, function(result){
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
