


Yodemo.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});



// Yodemo.ApplicationRoute = Yodemo.BaseRoute.extend({
// 	beforeModel: function() {
// 		return Em.$.ajaxPrefilter(function(e) {
// 			return function(t, r, n) {
// 				return n.fail(function(t) {
// 					return Em.run.next(function() {
// 						return "Invalid CSRF token" === t.responseText ? (e.notifier.info("Your session has been reset"), e.send("resetSession")) : void 0
// 					})
// 				})
// 			}
// 		}(this))
// 	},
// 	model: function() {
// 		return this.store.find("session", "current")
// 	},
// 	setupController: function(e, t) {
// 		var r, n;
// 		return App.CSRF_TOKEN = t.get("csrfToken"), this.controllerFor("session").set("model", t), n = t.get("user.organizations"), this.controllerFor("organizations").set("model", n), r = null != n ? n.get("firstObject") : void 0, null != r ? this.controllerFor("organization").set("content", r) : void 0
// 	},
// 	actions: {
// 		resetSession: function() {
// 			return this.currentModel.reload().then(function(e) {
// 				return function(t) {
// 					return App.CSRF_TOKEN = t.get("csrfToken"), e.transitionTo("index")
// 				}
// 			}(this))
// 		},
// 		logout: function() {
// 			return this.currentModel.set("user", null).save().then(function(e) {
// 				return function() {
// 					return e.notifier.success("You have been logged out"), e.send("resetSession")
// 				}
// 			}(this))
// 		},
// 		switchOrganization: function(e) {
// 			return this.controllerFor("organization").set("content", e)
// 		}
// 	}
// })