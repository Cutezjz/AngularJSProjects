// JavaScript Document
(function(){
	angular.module("sharedModule").service("productService", serv);
	serv.$inject = ["$http"];
	function serv($http){
		var products = [
		  {
			"productID" : 56,
			"productName" : "A fake product",
			"supplierID" : 8,
			"categoryID" : 1,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 12,
			"productName" : "Another fake product",
			"supplierID" : 8,
			"categoryID" : 3,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 11.23,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 20,
			"productName" : "Yet another fake product",
			"supplierID" : 8,
			"categoryID" : 2,
			"quantityPerUnit" : "6 pack",
			"unitPrice" : 85.44,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 25,
			"productName" : "A fourth fake product",
			"supplierID" : 8,
			"categoryID" : 4,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81.34,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 7,
			"productName" : "An awesome product",
			"supplierID" : 8,
			"categoryID" : 1,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 9,
			"productName" : "Another awesome product",
			"supplierID" : 8,
			"categoryID" : 3,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 11.23,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 69,
			"productName" : "Yet another awesome product",
			"supplierID" : 8,
			"categoryID" : 2,
			"quantityPerUnit" : "6 pack",
			"unitPrice" : 85.44,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 68,
			"productName" : "A fourth awesome product",
			"supplierID" : 8,
			"categoryID" : 4,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81.34,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 58,
			"productName" : "A catchup",
			"supplierID" : 8,
			"categoryID" : 1,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 70,
			"productName" : "Another catchup product",
			"supplierID" : 8,
			"categoryID" : 3,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 11.23,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 10,
			"productName" : "Yet another catchup product",
			"supplierID" : 8,
			"categoryID" : 2,
			"quantityPerUnit" : "6 pack",
			"unitPrice" : 85.44,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  },
		  {
			"productID" : 40,
			"productName" : "A fourth catchup product",
			"supplierID" : 8,
			"categoryID" : 4,
			"quantityPerUnit" : "Box of 12",
			"unitPrice" : 81.34,
			"unitsInStock" : 40,
			"unitsOnOrder" : 0,
			"reorderLevel" : 0,
			"discontinued" : 0,
			"featured" : true
		  }
		];
		
		this.getAllProducts = function(){
			return products;
		}
		this.getFeaturedProducts = function(){
			return products;
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