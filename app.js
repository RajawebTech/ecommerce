const fastify = require('fastify')
const { sequelize } = require('./db/db')
const cors = require('@fastify/cors')

const app = fastify({
    logger: true
})
const PORT = 5000

app.register(cors)
app.register(require('./routes/addUser.route'))

app.get('/',(request, reply) => {
    return reply.status(200).send({ message: "Hello World"})
})

async function startServer() {
    try {

        //Database Connection

        await sequelize.authenticate()
        console.log("DB connected Successfully")

        app.listen({ port: PORT })

        
    } catch (error) {
        console.log("Cannot connect to DB")
    }
}

startServer()

