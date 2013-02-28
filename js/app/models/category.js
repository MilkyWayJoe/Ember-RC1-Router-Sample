// Definition of the "Category" model
// this model has a relationship with "Product" via DS.hasMany("App.Product")
App.Category = DS.Model.extend({
    name: DS.attr('string'),    
    imageUrl: DS.attr('string'),
    products: DS.hasMany('App.Product')
});

// notice that by convetion, the model doesn't have a 
// definition for the "id" property, but its data should
// have an Id. 

// The fixtures below will be used to test the application. Note that each hash has an Id property.
// Ember data expects that both ends of a relationship to have the Id of the record(s) it's linked to
// In a relational database, the Category would not have the Id of any Product, only the product would
// have the Id of the categories. 
App.Category.FIXTURES = [
    {
        id: 1, 
        name: 'Air Conditioners', 
        imageUrl: 'img/shop/categories/ac.jpg', 
        products: []
    },
    {    
        id: 2,
        name: 'Tires', 
        imageUrl: 'img/shop/categories/tires.jpg', 
        products: [201, 202]
    },
    {
        id: 3, 
        name: 'Brakes', 
        imageUrl: 'img/shop/categories/brakes.jpg', 
        products: []
    },
    {
        id: 4,
        name: 'Exhausts', 
        imageUrl: 'img/shop/categories/exhaust.jpg', 
        products: []
    },
    {
        id: 5, 
        name: 'Batteries', 
        imageUrl: 'img/shop/categories/battery.jpg', 
        products: []
    },
    {
        id: 6,
        name: 'Wipers', 
        imageUrl: 'img/shop/categories/wiper_blade.jpg', 
        products: []
    },
    {
        id: 7, 
        name: 'GPS', 
        imageUrl: 'img/shop/categories/gps.jpg',
        products: [701,702,703]
    }, 
    {
        id: 8,
        name: 'Car Radio',
        imageUrl: 'img/shop/categories/radio.jpg',
        products: [801]
    }
];