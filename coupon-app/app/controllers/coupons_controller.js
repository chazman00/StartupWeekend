var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var CouponsController = new Controller();

CouponsController.index = function() {
  this.title = 'Show all coupons';
  this.render();
}

CouponsController.new = function() {
  this.title = 'New coupon created';
  this.render('index');
}

CouponsController.show = function() {
  this.title = 'Show coupon';
  this.couponId = this.param('id');
  this.render();
}

module.exports = CouponsController;
