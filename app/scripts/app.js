var Yodemo = window.Yodemo = Ember.Application.create({
	API_HOST:'http://c.com/',
	API_VER:'api/',
    LOG_TRANSITIONS: true
});



/* Order and include as you please. */
require('scripts/controllers/*');
//require('scripts/store');
require('scripts/adopter/*');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
