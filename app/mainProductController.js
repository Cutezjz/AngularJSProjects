(function(){
	angular.module('mainModule').controller('mainProductController', ctrl);
	ctrl.$inject = ['$scope', '$http', 'productService'];
	function ctrl($scope, $http, productService){
		$scope.topProducts = productService.getAllProducts();
	}
})();
