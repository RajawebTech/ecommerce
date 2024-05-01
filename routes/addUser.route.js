const { addUserController } = require('../controllers/addUser.controller')
const { addStoresController } = require('../controllers/addStoresController')
const { OrdersController } = require('../controllers/OrdersController')
const { ordersProductsController } = require('../controllers/ordersProductsController')
const { productsdetailsController } = require('../controllers/productsdetailsController')
const { CartListController } = require('../controllers/CartListController')
const { orderDetailsController } = require('../controllers/orderDetailsController')
const { pdfOrdersExportController } = require('../controllers/pdfOrdersExportController')




async function routes(fastify, opts) {
    fastify.post('/addUser', addUserController)
    fastify.get('/addStores', addStoresController)
    fastify.get('/orders', OrdersController)
    fastify.get('/orders_products/:id', ordersProductsController)
    fastify.get('/product_details/:id', productsdetailsController)
    fastify.get('/getCartLists', CartListController)
    fastify.get('/orderDetails', orderDetailsController)
    fastify.get('/pdf', pdfOrdersExportController)

}

module.exports = routes