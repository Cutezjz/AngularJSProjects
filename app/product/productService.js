// JavaScript Document
(function(){
	angular.module("sharedModule").service("productService", serv);
	serv.$inject = ["$http"];
	function serv($http){
		var products = $http.get("/api/product");
		var deaturedProducts = $http.get("/api/product/featured");
		this.getAllProducts = function(){
			return products;
		}
		this.getFeaturedProducts = function(){
			return deaturedProducts;
		}
		this.getProduct = function(productID){
			angular.forEach(products, function(value, key) {
				if (key === productID) {
					return key.Owner;
				}
			});
		}
	}
})();