





Yodemo.IndexRoute = Ember.Route.extend({
   beforeModel: function(transition) {
     this.transitionTo('index.index');
   }

});







Yodemo.IndexIndexRoute = Ember.Route.extend({
   beforeModel: function(transition) {
     this.transitionTo('index.login');
   }

  // renderTemplate: function() {
  //   this.render('index/login');
  // }

});


Yodemo.IndexLoginRoute = Ember.Route.extend({

});


Yodemo.IndexSignupRoute = Ember.Route.extend({

});


