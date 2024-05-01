const { Op } = require("sequelize");
const sequelize = require("sequelize");

const { cart_list } = require("../models/init-models").initModels(
  sequelize
);


async function CartListController(request, reply) {
  try {

    const getorderDetails = await cart_list.findAll({
      raw: true,
    });

    const message = "Orders Details.";

    return reply.status(200).send({ message: message, data: getorderDetails });
} catch (error) {
    console.log(error);
    return reply.status(400).send({ message: "Something went wrong" });
  }
}



module.exports = { CartListController };
