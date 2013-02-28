// Definition of the "Product" model
// this model has a relationship with "Category" via DS.belongsTo("App.Category")
App.Product = DS.Model.extend({
    name: DS.attr('string'),
    imageUrl: DS.attr('string'),
    description: DS.attr('string'),
    price: DS.attr('number'),
    isOnSale: DS.attr('boolean'),
    isNewProduct: DS.attr('boolean'),
    category: DS.belongsTo('App.Category')
});

// notice that by convetion, the model doesn't have a 
// definition for the "id" property, but its data should
// have an Id. 

// The fixtures below will be used to test the application. Note that each hash has an Id property.
// Ember data expects that both ends of a relationship to have the Id of the record(s) it's linked to
// In a relational database, the Category would not have the Id of any Product, only the product would
// have the Id of the categories. 
App.Product.FIXTURES = [
    {
        id: 201,
        name: 'Pirelli P4 Four Seasons',
        category: 2,
        description: 'Bacon ipsum dolor sit amet shoulder shank pork ground round ball tip shankle biltong doner andouille short loin beef ribs strip steak kielbasa pork chop boudin. Pig tri-tip sausage capicola biltong filet mignon turkey frankfurter corned beef ball tip chicken kielbasa pork belly. Ham chuck biltong ham hock pastrami fatback capicola ground round chicken swine shoulder ribeye shank pork belly. Cow bresaola beef ribs drumstick pork belly, brisket prosciutto meatloaf pastrami sirloin. Ground round chicken jowl, meatloaf filet mignon shankle capicola shoulder pork belly. Meatball rump frankfurter, spare ribs doner ham jowl drumstick tenderloin ham hock biltong chuck meatloaf boudin. Chuck short loin tenderloin pastrami.',
        price: 69,
        imageUrl: 'img/shop/products/201.jpg',
        isOnSale: false,
        isNewProduct: false
    },
    {
        id: 202,
        name: 'MotoMaster AW',
        category: 2,
        description: 'Bacon ipsum dolor sit amet shoulder shank pork ground round ball tip shankle biltong doner andouille short loin beef ribs strip steak kielbasa pork chop boudin. Pig tri-tip sausage capicola biltong filet mignon turkey frankfurter corned beef ball tip chicken kielbasa pork belly. Ham chuck biltong ham hock pastrami fatback capicola ground round chicken swine shoulder ribeye shank pork belly. Cow bresaola beef ribs drumstick pork belly, brisket prosciutto meatloaf pastrami sirloin. Ground round chicken jowl, meatloaf filet mignon shankle capicola shoulder pork belly. Meatball rump frankfurter, spare ribs doner ham jowl drumstick tenderloin ham hock biltong chuck meatloaf boudin. Chuck short loin tenderloin pastrami.',
        price: 39,
        imageUrl: 'img/shop/products/202.jpg',
        isOnSale: true,
        isNewProduct: true
    },
    {
        id: 701, 
        name: 'Tomtom Start 4.3" GPS (45TM)', 
        category: 7,
        description: 'Bacon ipsum dolor sit amet shoulder shank pork ground round ball tip shankle biltong doner andouille short loin beef ribs strip steak kielbasa pork chop boudin. Pig tri-tip sausage capicola biltong filet mignon turkey frankfurter corned beef ball tip chicken kielbasa pork belly. Ham chuck biltong ham hock pastrami fatback capicola ground round chicken swine shoulder ribeye shank pork belly. Cow bresaola beef ribs drumstick pork belly, brisket prosciutto meatloaf pastrami sirloin. Ground round chicken jowl, meatloaf filet mignon shankle capicola shoulder pork belly. Meatball rump frankfurter, spare ribs doner ham jowl drumstick tenderloin ham hock biltong chuck meatloaf boudin. Chuck short loin tenderloin pastrami.', 
        price: 129, 
        imageUrl: 'img/shop/products/701.jpg',
        isOnSale: true,
        isNewProduct: true
    },
    {
        id: 702, 
        name: 'Garmin nüvi 4.3" GPS (40)', 
        category: 7,
        description: 'Bacon ipsum dolor sit amet shoulder shank pork ground round ball tip shankle biltong doner andouille short loin beef ribs strip steak kielbasa pork chop boudin. Pig tri-tip sausage capicola biltong filet mignon turkey frankfurter corned beef ball tip chicken kielbasa pork belly. Ham chuck biltong ham hock pastrami fatback capicola ground round chicken swine shoulder ribeye shank pork belly. Cow bresaola beef ribs drumstick pork belly, brisket prosciutto meatloaf pastrami sirloin. Ground round chicken jowl, meatloaf filet mignon shankle capicola shoulder pork belly. Meatball rump frankfurter, spare ribs doner ham jowl drumstick tenderloin ham hock biltong chuck meatloaf boudin. Chuck short loin tenderloin pastrami.',
        price: 119.5, 
        imageUrl: 'img/shop/products/702.jpg',
        isOnSale: true,
        isNewProduct: false
    },
    {
        id: 703, 
        name: 'Magellan RoadMate 2230T 4.3" GPS ', 
        category: 7, 
        description: 'Bacon ipsum dolor sit amet shoulder shank pork ground round ball tip shankle biltong doner andouille short loin beef ribs strip steak kielbasa pork chop boudin. Pig tri-tip sausage capicola biltong filet mignon turkey frankfurter corned beef ball tip chicken kielbasa pork belly. Ham chuck biltong ham hock pastrami fatback capicola ground round chicken swine shoulder ribeye shank pork belly. Cow bresaola beef ribs drumstick pork belly, brisket prosciutto meatloaf pastrami sirloin. Ground round chicken jowl, meatloaf filet mignon shankle capicola shoulder pork belly. Meatball rump frankfurter, spare ribs doner ham jowl drumstick tenderloin ham hock biltong chuck meatloaf boudin. Chuck short loin tenderloin pastrami.',
        price: 143.5, 
        imageUrl: 'img/shop/products/703.jpg',
        isOnSale: false,
        isNewProduct: true
    },
    {
        id: 801,
        name: 'Sony CDX-GT270MP In-Dash Car Stereo',
        category: 8,
        description: 'Description Not Available',
        price: '80',
        imageUrl: 'img/shop/products/801.jpg',
        isOnSale: false,
        isNewProduct: true
    }
];