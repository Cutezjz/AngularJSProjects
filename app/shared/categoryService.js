// JavaScript Document
(function(){
	angular.module("sharedModule").service("categoryService", serv);
	serv.$inject = ["$http"];
	function serv($http){
		var allCategories = $http.get("/api/category");
		this.getAllCategories = function(){
			return allCategories;
		}
	}
})();