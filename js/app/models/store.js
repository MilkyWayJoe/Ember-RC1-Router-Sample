// Defining a Data Store for the application from DS namespace
App.Store = DS.Store.extend({
    // Until Ember reaches 1.0, Ember-Data will use a revisions to 
    // alert developers about breaking changes to the API. At the time I'm 
    // writing this, Ember-Data is on revision 11. To find out more, go to:
    // https://github.com/emberjs/data/blob/master/BREAKING_CHANGES.md
    revision: 11,
    // Define your adapter. The Adapter is responsible to 'translate' the data from
    // your backend API into what Ember-Data needs in order for it to work. Ember-Data
    // comes with a REST Adapter and a Fixture Adapter, the later is very useful for 
    // debugging and for mocking up an application. This example uses the Fixture Adapter
    adapter: 'DS.FixtureAdapter'
    // in a real world application you'd use the RESTAdapter or you'd roll your own adapter.
    // Most notable examples are WebAPIAdapter, DjangoAdapter, TastyPieAdapter
});