(function(){
	angular.module("productModule").controller("productDetailController", ctrl);
	ctrl.$inject=["$scope", "productService"];
	function ctrl($scope, productService){
		$scope.product = productService.getProduct(5);
		console.log($scope.product);
		/*productService.getProduct(1).then(function(r){
			$scope.products = r.data;
		})*/
	}
})();