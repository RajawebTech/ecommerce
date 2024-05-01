const { Op } = require("sequelize");
const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

const { orders_products } = require("../models/init-models").initModels(
  sequelize
);


async function ordersProductsController(request, reply) {
  try {
    const orderId = request.params.id;

    const getordersProducts = await orders_products.findAll({
      where: {
        order_id: orderId,
      },
      attributes: ["id", "name"], 
      raw: true,
    });

    return reply.status(200).send(getordersProducts);
  } catch (error) {
    console.log(error);
    return reply.status(400).send({ message: "Something went wrong" });
  }
}



module.exports = { ordersProductsController };
