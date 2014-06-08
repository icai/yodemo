Yodemo.Router.map(function () {
  
  this.resource('index',{path:'/'}, function(){
    this.route('login',{path:'/login'});
    this.route('signup',{path: '/signup'});

  })

});

// Yodemo.Router.reopen({
// 	location: 'auto' 
// });
