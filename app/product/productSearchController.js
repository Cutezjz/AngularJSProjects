(function(){
	angular.module("productModule").controller("productSearchController", ctrl);
	ctrl.$inject = ["$scope", "productService"];
	function ctrl($scope, productService){
		$scope.products = productService.getAllProducts();
	}
})();