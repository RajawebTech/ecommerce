const { Op } = require('sequelize')
const sequelize = require('sequelize')
const { orders } = require('../models/init-models').initModels(sequelize)

async function OrdersController(request, reply) {
   
    try {

        const getorders = await orders.findAll({
            raw: true,
           
        })
        console.log(getorders)

        
        return reply.status(200).send(getorders)


    } catch (error) {
        console.log(error)
        return reply.status(400).send({ message: "Something went wrong" })
    }
}

module.exports = { OrdersController }