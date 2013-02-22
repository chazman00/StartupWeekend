var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.home = function() {
  this.title = 'Coupons, Discounts and more!'
  this.render();
}

module.exports = PagesController;
