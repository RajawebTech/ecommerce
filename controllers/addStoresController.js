const { Op } = require('sequelize')
const sequelize = require('sequelize')
const { stores } = require('../models/init-models').initModels(sequelize)

async function addStoresController(request, reply) {
   
    try {

        const getusers = await stores.findAll({
            raw: true,
           
        })
        console.log(getusers)

        const message = "Stores Details.";

        return reply.status(200).send({ message: message, data: getusers });
        


    } catch (error) {
        console.log(error)
        return reply.status(400).send({ message: "Something went wrong" })
    }
}

module.exports = { addStoresController }