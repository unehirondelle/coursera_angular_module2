(function () {
    "use strict";

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];

    function ToBuyController(ShoppingListCheckOffService) {
        let toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        let alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        let service = this;
        let toBuyItems = [
            {name: "beef", quantity: "5 lbs"},
            {name: "red wine", quantity: "1 bottle"},
            {name: "parsley", quantity: "1 bunch"},
            {name: "onions", quantity: "1 lb"},
            {name: "carrots", quantity: "5 ea"}
        ];

        let alreadyBoughtItems = [];

        service.buyItem = function (index) {
            alreadyBoughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;
        };
    }
})();