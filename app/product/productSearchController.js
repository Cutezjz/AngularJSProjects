(function(){
	angular.module("productModule").controller("productSearchController", ctrl);
	ctrl.$inject = ["$scope", "productService"];
	function ctrl($scope, productService){
		productService.getAllProducts().then(function(r){
			$scope.products = r.data;
		});
	}
})();