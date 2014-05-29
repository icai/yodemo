Yodemo.IndexController = Ember.ObjectController.extend({
	//needs:['index'],
	//content: {},
	init: function(){
		this._super();
	},
	url: 'api/auth/',
	actions:{
	    formSubmit: function(params){
	      	var data = {
	      		username: this.get('username'),
	      		password: this.get('password'),
	      		remember: this.get('remember')
	      	};	

	      	console.info(this.get('username'))
			// for(var key in data){
			// 	if(!data[key]) delete data[key];
			// }
			console.info(data);
	        Ember.$.ajax({
	            type: "POST",
	            url: Yodemo.API_HOST + this.url + '?v=' + (new Date()).getTime(),
	            data: {'action':'login'},
	            dataType : 'json',
	            beforeSend : function(req) {
	                req.setRequestHeader('username', data.username);
	                req.setRequestHeader('password', data.password);
	                req.setRequestHeader('remember', data.remember);
	            },
	            success: function(json){
	                if(json.result){
	                }else{
	                };
	            },
	            error: function(XMLHttpRequest, textStatus, errorThrown) {
	            	console.info(textStatus);

	            }
	        });
	    }
	}
  // Implement your controller here.
});

