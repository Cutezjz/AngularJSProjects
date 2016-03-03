// JavaScript Document
(function(){
	angular.module("productModule").controller("productListController", ctrl);
	ctrl.$inject = ["$scope"];
	function ctrl($scope){
		$scope.categories = [
		  {
			"CategoryID" : 2,
			"CategoryName" : "Condiments",
			"Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
		  },
		  {
			"CategoryID" : 4,
			"CategoryName" : "Dairy Products",
			"Description" : "Cheeses"
		  },
		  {
			"CategoryID" : 1,
			"CategoryName" : "Beverages",
			"Description" : "Soft drinks, coffees, teas, beers, and ales"
		  },
		  {
			"CategoryID" : 5,
			"CategoryName" : "Grains/Cereals",
			"Description" : "Breads, crackers, pasta, and cereal"
		  },
		  {
			"CategoryID" : 7,
			"CategoryName" : "Produce",
			"Description" : "Dried fruit and bean curd"
		  },
		  {
			"CategoryID" : 6,
			"CategoryName" : "Meat/Poultry",
			"Description" : "Prepared meats"
		  },
		  {
			"CategoryID" : 8,
			"CategoryName" : "Seafood",
			"Description" : "Seaweed and fish"
		  },
		  {
			"CategoryID" : 3,
			"CategoryName" : "Confections",
			"Description" : "Desserts, candies, and sweet breads"
		  }
		];
		$scope.products = [
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
			"productID" : 79,
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
			"productID" : 97,
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
			"productID" : 85,
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
			"productID" : 01,
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

	}
})();