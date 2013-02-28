App.ShopNewProductsRoute = Em.Route.extend({
  model: function() {
    return App.Product.filter(function(product) {
      return product.get('isNewProduct');
    });
  }
});

