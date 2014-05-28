/*global Ember*/
Yodemo.Index = DS.Model.extend({
	id:DS.attr('number'),
    email: DS.attr('string', {defaultValue:"123123"}),
    password: DS.attr('string', {defaultValue: function(){
    	alert(123);
    	return '';
    }}),
    remember: DS.attr('boolean',{defaultValue: true})


});

// probably should be mixed-in...
// Yodemo.Index.reopen({
//   attributes: function(){
//     var model = this;
//     return Ember.keys(this.get('data')).map(function(key){
//       return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
//     });
//   }.property()
// });

// delete below here if you do not want fixtures
// Yodemo.Index.FIXTURES = [
  
//   {
//     id:0,
//     email:'',
//     password:'',
//     remember: true
    
//   }];