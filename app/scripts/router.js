Yodemo.Router.map(function () {
  
  // this.resource('indices', function(){

  //   this.route('create');
  // });


  this.route('index', { path: '/'});



  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
