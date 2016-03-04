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
			products.then(function(r){
				for (var d = 0; d < r.data.length; d++) {
					console.log("product:"+r.data[d]);
					if (r.data[d].productID == productID) {
						return r.data[d];
					}
				}
			});
		}
	}
})();