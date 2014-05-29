Yodemo.RESTAdapter = DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'https://c.com/'
});

Ember.$.ajaxPrefilter(function(e, t, r) {
		return Yodemo.CSRF_TOKEN ? r.setRequestHeader("X-CSRF-Token", Yodemo.CSRF_TOKEN) : void 0
})






