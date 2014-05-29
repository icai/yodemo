Yodemo.IndexLoginController = Ember.Controller.extend({
    reset: function() {
        this.setProperties({
            username: "",
            password: "",
            remember: "",
            errorMessage: ""
        });
    },
    url: 'api/auth/',
    token: localStorage.token,
    tokenChanged: function() {
        localStorage.token = this.get('token');
    }.observes('token'),
    actions: {
        login: function() {

            var self = this;
            //var   data = this.getProperties('username', 'password');
            // Clear out any error messages.
            this.set('errorMessage', null);
            var data = {
                username: this.get('username'),
                password: this.get('password'),
                remember: this.get('remember')
            };

            Ember.$.ajax({
                type: "POST",
                url: Yodemo.API_HOST + this.url + '?v=' + (new Date()).getTime(),
                data: {
                    'action': 'login'
                },
                dataType: 'json',
                beforeSend: function(req) {
                    req.setRequestHeader('username', data.username);
                    req.setRequestHeader('password', data.password);
                    req.setRequestHeader('remember', data.remember);
                },
                success: function(json) {
                    if (json.result) {} else {};
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.info(textStatus);

                }
            });
            // $.post('/auth.json', data).then(function(response) {
            //     self.set('errorMessage', response.message);
            //     if (response.success) {
            //         alert('Login succeeded!');
            //         self.set('token', response.token);

            //         var attemptedTransition = self.get('attemptedTransition');
            //         if (attemptedTransition) {
            //             attemptedTransition.retry();
            //             self.set('attemptedTransition', null);
            //         } else {
            //             // Redirect to 'articles' by default.
            //             self.transitionToRoute('articles');
            //         }
            //     }
            // });
        }

    }

});