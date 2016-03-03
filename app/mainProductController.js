(function(){
	angular.module('mainModule').controller('mainProductController', ctrl);
	ctrl.$inject = ['$scope', '$http', 'productService'];
	function ctrl($scope, $http, productService){
		productService.getAllProducts().then(function(r){
			$scope.topProducts = r.data;
		});
		productService.getFeaturedProducts().then(function(r){
			$scope.featuredProducts = r.data;
		});
	}
})();
