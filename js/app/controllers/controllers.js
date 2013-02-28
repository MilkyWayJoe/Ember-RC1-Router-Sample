// Ember auto generates the controllers, but since we need 
// Array controllers, we have implement them manually.
// Since this sample follows the conventions, there is no 
// need to implement the controller other than simple create it's
// class within the App. 
// To keep it small, and because these controllers are "one-liners" I'm 
// putting them together in the same file
App.ShopIndexController = Em.ArrayController.extend();
App.ShopNewProductsController = Em.ArrayController.extend();
App.ShopCategoriesController = Em.ArrayController.extend();
App.ShopSaleController = Em.ArrayController.extend();