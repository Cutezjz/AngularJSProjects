(function(){
	angular.module('mainModule').controller("aboutUsController", ctrl);
	ctrl.$inject =['$scope', '$http'];
	function ctrl($scope, $http){
		$scope.data = {
		"CompanyName": "Walmart",
		"CompanyAddress": "805 Moberly Ln, Bentonville, AR, 72716",
		"CompanyPhoneNumber": "479-555-7381",
		"CompanyEmail": "walmart@walmart.com",
		"CompanySNS": "facebook.com/walmart",
		}
		$scope.data.today = new Date();
	}
})();



