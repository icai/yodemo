#yodemo#


based on yeoman [generator-ember](https://github.com/yeoman/generator-ember/ "https://github.com/yeoman/generator-ember/").



## Pre-reqs(!important)

* [npm](http://nodejs.org/)
* [compass](http://compass-style.org/install/)
	* `gem update --system`
	* `gem install compass`
* `npm install -g grunt-contrib-compass`
* Ruby
* gem install compass



## Usage

* `npm install -g generator-ember`
* <del>`mkdir myemberapp && cd myemberapp`(The directory's name is your application's name)</del>
* <del> `yo ember`</del>
* `npm install -g grunt-mocha`
* `grunt serve`

A welcome page should appear in your browser.

## Generators

Add'l generators:

* ember:model
* ember:view
* ember:controller
* ember:component

### ember:model

Creates a model, views, handlebars, controllers, view/edit routes, and some basic fixtures given an arg, as in: 

`yo ember:model User name:string zipcode:number`
(created)

see:

* http://localhost:9000/#/users

see also:

* http://localhost:9000/#/user/1
* http://localhost:9000/#/user/1/edit
 
### ember:view

Creates a view and template given an arg, as in

  `yo ember:view Foo`

__KNOWN ISSUE: IF YOU ADD A NEW VIEW, REGARDLESS OF WITH WHICH GENERATOR, YOU HAVE TO RESTART THE SERVER.__

### ember:controller

Creates a view, handlebar, controller and route given an arg, as in:

  `yo ember:controller Bar`

(and updates router.js, overwrite when prompted)

see:

* http://localhost:9000/#/bar

### ember:component

Creates a component and a template for that component given an arg, as in:

  `yo ember:component x-player`

Which can be used in the application with `{{x-player}}`.



## Grunt cmd


- `grunt serve` // debug server
- `grunt serve:dist` // build server 
- `grunt test` // test
- `grunt build` // build
- `grunt` // default jshint, test, build

 see gruntfile.js





