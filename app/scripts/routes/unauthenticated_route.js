Yodemo.UnauthenticatedRoute = Yodemo.BaseRoute.extend({
	beforeModel: function() {
		return null != this.currentUser() ? this.transitionTo("index") : void 0
	}
});