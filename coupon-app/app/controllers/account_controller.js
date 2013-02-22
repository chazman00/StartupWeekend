var locomotive = require('locomotive')
  , passport = require('passport')
  , Controller = locomotive.Controller;

var AccountController = new Controller();

AccountController.loginForm = function() {
  this.render('login');
}

AccountController.login = function() {
	console.log('in login');
	passport.authenticate('local', { successRedirect: '/',
										failureRedirect: '/login' })(this.req, this.res);
}

AccountController.logout = function() {
  this.req.logout();
  this.redirect('/');
}

													 
module.exports = AccountController;
