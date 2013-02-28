App.ShopIndexRoute = Em.Route.extend({
  model: function() {
    return App.Product.find();
  }
});

