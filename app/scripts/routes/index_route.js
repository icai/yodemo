Yodemo.IndexRoute = Ember.Route.extend({
	renderTemplate: function(){
		 this._super(this, arguments);
		 this.renderSubTemplate();

	},
	renderSubTemplate: function(){
		 this.render('IndexLogin',{
		 	into:'index',
		 	outlet:'form',
		 	controller:'indexLogin'
		 })
	}
});


Yodemo.IndexLoginRoute =  Ember.Route.extend({
	renderTemplate: function(){
		 this._super(this, arguments);

		 //this.renderSubTemplate();
	},
	renderSubTemplate: function(){

		 this.render('IndexLogin',{
		 	into:'index',
		 	outlet:'form',
		 	controller:'indexLogin'
		 })
	}

});


Yodemo.IndexSignupRoute = Ember.Route.extend({
	renderTemplate: function(){
		this._super(this, arguments);
		//this.renderSubTemplate();
	},
	renderSubTemplate: function(){
		 this.render('IndexSignup',{
		 	into:'signup',
		 	outlet:'formx',
		 	controller:'indexSignup'
		 })
	}

});


