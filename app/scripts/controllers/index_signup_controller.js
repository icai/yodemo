Yodemo.IsignupController = Ember.ObjectController.extend({

    init: function(){
        this._super();
        this.reset();
    },
    reset: function() {
        this.setProperties({
            username: "",
            password: "",
            remember: false,
            errorMessage: ""
        });
    },
    url: 'api/auth/',
    // token: localStorage.token,
    // tokenChanged: function() {
    //     localStorage.token = this.get('token');
    // }.observes('token'),
    actions: {
        signup: function() {

            // var self = this;
            // //var   data = this.getProperties('username', 'password');
            // // Clear out any error messages.
            // this.set('errorMessage', null);
            // this.reset();
            // var data = {
            //     username: this.get('username'),
            //     password: this.get('password'),
            //     remember: this.get('remember')
            // };
            // Ember.$.ajax({
            //     type: "POST",
            //     url: Yodemo.API_HOST + this.url + '?v=' + (new Date()).getTime(),
            //     data: {
            //         'action': 'login'
            //     },
            //     dataType: 'json',
            //     beforeSend: function(req) {
            //         req.setRequestHeader('username', data.username);
            //         req.setRequestHeader('password', data.password);
            //         req.setRequestHeader('remember', data.remember);
            //     },
            //     success: function(json) {
            //         if (json.result) {
            //             self.set('token', json.data.token);
            //         } else {
            //             self.set('errorMessage',json.errors.join(',<br/>'))

            //         };
            //     },
            //     error: function(XMLHttpRequest, textStatus, errorThrown) {
            //         console.info(textStatus);

            //     }
            // });
        }

    }

});