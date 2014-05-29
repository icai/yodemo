Yodemo.BaseRoute = Ember.Route.extend({
	currentUser: function() {
		return this.modelFor("application").get("user")
	},
	currentOrganization: function() {
		return this.currentUser() ? this.controllerFor("organization").get("model") || this.currentUser().get("organizations.firstObject") : void 0
	}
})