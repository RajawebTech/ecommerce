const { Op } = require("sequelize");
const sequelize = require("sequelize");

const { orders_details } = require("../models/init-models").initModels(
  sequelize
);

async function orderDetailsController(request, reply) {
  try {
    const getorderDetails = await orders_details.findAll({
      raw: true,
    });

    const message = "Orders List Details.";

    return reply
      .status(200)
      .send({ message: message, data: getorderDetails });
  } catch (error) {
    console.log(error);
    return reply.status(400).send({ message: "Something went wrong" });
  }
}

module.exports = { orderDetailsController };
