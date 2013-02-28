App.CategoriesIndexRoute = Em.Route.extend({
  model: function() {
    return App.Category.find();
  }
});

