var app = angular.module('ecommerce',[]);

app.service('productService',function(){
    var products = [
        {'id':1,'name':'Todo App','price':'8000.00','rating_count':432,'rating':2.5,'desc':'This is an Todo App'},
        {'id':2,'name':'Poll App','price':'4000.00','rating_count':1023,'rating':3.5,'desc':'This is an Polling Application'},
        {'id':3,'name':'Clinic Software','price':'12000.00','rating_count':797,'rating':1.5,'desc':'This is an Clinic Management Software'},
        {'id':4,'name':'Mailing App','price':'3000.00','rating_count':103,'rating':2.5,'desc':'This is an Mailing App'},
        {'id':5,'name':'Stock Market Analyzer','price':'4000.00','rating_count':59,'rating':4,'desc':'This is Stock market analyzer'}
    ]

    var selected_product; 

    this.set_product = function(id){
        products.forEach(product => {
            if(product['id'] == id){
                return product
            }
        });
    }

    this.get_products = function(){
        return products
    }

    this.get_product = function(id){
        return selected_product
    }

})


app.controller('productController',function($scope,productService){
    $scope.products = productService.get_products();

    $scope.set_product = function (id) {
        $scope.id=id
        productService.set_product(id);
    }
});

app.controller('cartController',function($scope,productService){
    $scope.quantity = 1;
    $scope.incrementquantity = function(){
        $scope.quantity+=1
    }

    $scope.incrementquantity = function(){
        $scope.quantity-=1
    }
})

app.directive("productCard",function(){
    return {
        templateUrl:"product-card.html"
    }
})