var DataTypes = require("sequelize").DataTypes;
var _users = require("./users");
var _stores = require("./stores");
var _orders = require("./orders");
var _orders_products = require("./orders_products");
var _cart_list = require("./cart_list");
var _orders_details = require("./orders_details");

function initModels() {
  var sequelize = require('../db/db').sequelize
  var users = _users(sequelize, DataTypes);
  var stores = _stores(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var orders_products = _orders_products(sequelize, DataTypes);
  var cart_list = _cart_list(sequelize, DataTypes);
  var orders_details = _orders_details(sequelize, DataTypes);


  return {
    users,
    stores,
    orders,
    orders_products,
    cart_list,
    orders_details
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
