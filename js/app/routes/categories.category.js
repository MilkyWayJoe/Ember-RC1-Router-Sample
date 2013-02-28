App.CategoriesCategoryRoute = Em.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
  }
});

