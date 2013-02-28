// Ultra simple, unbound, handlebars helper
Handlebars.registerHelper("money", function(path) {
  var value = Ember.getPath(this, path);
  return parseFloat(value).toFixed(2);
});