const { Op } = require('sequelize')
const sequelize = require('sequelize')
const { users } = require('../models/init-models').initModels(sequelize)

async function addUserController(request, reply) {
    const { username, email, phone_number, password, country, address } = request.body
    try {

        const getusers = await users.findAll({
            raw: true,
            where: {
               [Op.or] : [{
                username: username,
                email: email
               }] 
            }
        })
        console.log(getusers)
        if (getusers.length > 0) return reply.status(200).send({ message: "Username or email already exists" })

        await users.create({
            username,
            email,
            phone_number,
            password,
            country,
            address: JSON.stringify(address)
        })
        return reply.status(200).send({ message: "User Created Successfully" })


    } catch (error) {
        console.log(error)
        return reply.status(400).send({ message: "Something went wrong" })
    }
}

module.exports = { addUserController }