App.Router.map(function() {

  this.resource("shop", function() {

    this.resource("categories", function() {
      this.route("category", { path: '/:category_id' });
    });

    this.route("index", { path: '/' });
  	this.route("product", { path: 'product/:product_id' });
    this.route("newProducts", { path: 'latest' });
  	this.route("sale");
  });

});