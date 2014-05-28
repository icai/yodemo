Yodemo.IndexController = Ember.ObjectController.extend({
	//needs:['index'],
	//content: {},
	init: function(){
		this._super();
		
		//this.set('model');
	},
	actions:{
	    formSubmit: function(e){





	    	console.info(arguments); // null 



	    	console.info(this); // current controller 

	    	console.info(this.get('model')); // route pass model 
	    	console.info(this.get('email') + ','+ this.get('password'));

	    	console.info( this.get('remember'));



	    }
	}
  // Implement your controller here.
});

