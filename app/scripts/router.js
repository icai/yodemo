Yodemo.Router.map(function () {
  


  this.resource('index',{path:'/'}, function(){
    this.route('login',{path:'/login'});
    this.route('signup',{path: '/signup'});

  })



  
});
