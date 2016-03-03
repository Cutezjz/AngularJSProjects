(function(){
	angular.module("productModule").controller("productListController", ctrl);
	ctrl.$inject = ["$scope","categoryService", "productService"];
	function ctrl($scope, categoryService, productService){
		categoryService.getAllCategories().then(function(r){
			$scope.categories = r.data;
		});
		productService.getAllProducts().then(function(r){
			console.log(r);
			$scope.products = r.data;
		});
	}
})();