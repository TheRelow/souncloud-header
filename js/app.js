var ang = angular.module('app', ['ngRoute']);

ang.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/cart', {
        templateUrl: 'views/cart.html'
    })
    .when('/shop', {
        templateUrl: 'views/shop.html'
    })
    .when('/index', {
        templateUrl: 'views/index.html'
    })
    .when('/', {
        templateUrl: 'views/index.html'
    })
    .otherwise({
        redirectTo: 'views/index.html'
    });
    $locationProvider.hashPrefix('');
});

ang.directive('cart', function() {
    return {
        template: '<div ng-repeat="items in myItems" class="item" id="{{items.id}}"> <div class="img"> <img src="{{items.img}}"> </div> <span>{{items.name}}</span> <h3>{{items.price.toLocaleString()}} Р</h3> <button catalog-btn>Добавить в корзину</button> </div>',
        link: function(scope, element, attrs) {
            scope.myItems = JSON.parse(localStorage.getItem("cart"));
        }
    };
});

ang.directive('catalog', function() {
    return {
        template: '<div ng-repeat="items in myItems" class="item" id="{{items.id}}"> <div class="img"> <img src="{{items.img}}"> </div> <span>{{items.name}}</span> <h3>{{items.price.toLocaleString()}} Р</h3> <button catalog-btn>Добавить в корзину</button> </div>',
        link: function(scope, element, attrs) {
            scope.myItems = catalog;
        }
    };
});

ang.directive('catalogBtn', function() {
    return {
        link: function(scope, element, attrs) {
            lsCart = localStorage.getItem("cart");
                cart = [];
                if (lsCart !== null) {
                    cart = JSON.parse(lsCart)
                };
            i = cart.some(function(el) {
                    return el.id === scope.items.id
                });
            if (i === true) {
                element[0].className = "active";
                element[0].innerHTML = "Убрать из корзины" 
            } else {
                element[0].className = "";
                element[0].innerHTML = "Добавить в корзину"
            };
            element.on('click', function () {
                i = cart.some(function(el) {
                    return el.id === scope.items.id
                });
                if (i === false) {
                    cart.push(scope.items);    
                    element[0].className = "active";
                    element[0].innerHTML = "Убрать из корзины"               
                } else {
                    const index = cart.findIndex(n => n.id === scope.items.id);
                    if (index !== -1) {
                      cart.splice(index, 1);
                    element[0].className = "";
                    element[0].innerHTML = "Добавить в корзину" 
                  }
              };
              localStorage.setItem('cart', JSON.stringify(cart));
          })
        }
    }
})