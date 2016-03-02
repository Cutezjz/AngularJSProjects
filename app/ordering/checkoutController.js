(function(){
	angular.module('orderingModule').controller('checkoutController', ctrl);
	ctrl.$inject=['$scope'];
	function ctrl($scope){
		$scope.total = 0;
		$scope.userInfo = {
			"shipName": $scope.shipName,
			"address": $scope.address,
			"city": $scope.city,
			"region": $scope.region,
			"postalCode": $scope.postalCode,
			"country": $scope.country,
			"shipVia": $scope.shipVia,
			"creditCardNumber": $scope.creditCardNumber,
			"expiryMonth": $scope.expiryMonth,
			"expiryYear": $scope.expiryYear
		};
		$scope.checkOut = [
			{
			"productID" : 56,
			"product": "A fake product",
			"quantity": 3,
			"unitPrice" : 81
			},
			
			{
			"productID" : 25,
			"product": "Another fake product",
			"quantity": 2,
			"unitPrice" : 11.23
			},
			{
			"productID" : 12,
			"product": "Yet Another fake product",
			"quantity": 7,
			"unitPrice" : 85.44
			}
		];
		//calculate the total
		getCartTotal = function (checkOut) {
			total = 0;
			if(checkOut==null)
				return;
			checkOut.forEach(function(data)
			{
			  total+=data.quantity*data.unitPrice;
			});
			//console.log(total);
			return total;
		}
		//watchs
		$scope.$watch('checkOut', watchFunction, true);
		function watchFunction(){
			$scope.total = getCartTotal($scope.checkOut);
		}
		//remove the data
		$scope.removeFromCart = function(product){
			//remove the data
			console.log($scope.checkOut);
			$scope.checkOut.splice($scope.checkOut.indexOf(product),1);
			console.log($scope.checkOut);
		}
		//process the Order
		$scope.processOrder = function(){
			console.log($scope.checkOut);	
			$scope.checkOut = null;
		}
	}
})();