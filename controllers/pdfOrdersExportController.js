const { Op } = require("sequelize");
const sequelize = require("sequelize");

const PDFDocument = require("pdfkit");
const fs = require("fs");

const { orders_details } = require("../models/init-models").initModels(
  sequelize
);


async function pdfOrdersExportController(request, reply) {
  try {
    const getorderDetails = await orders_details.findAll({
      raw: true,
    });

    // Create a new PDF document
    const doc = new PDFDocument();
    const pdfPath = 'order_details.pdf';

    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    doc.fontSize(12);
    doc.text('Orders List Details\n\n');

    getorderDetails.forEach((order) => {
      doc.text(`Order ID: ${order.id}`);
      doc.text(`Name: ${order.name}`);
      doc.text(`Price: ${order.price}`);
      doc.text('\n');
    });

  
    doc.end();

    const message = "Orders List Details.";
    const response = {
      message: message,
      pdfPath: pdfPath 
    };

    return reply.status(200).send(response);
  } catch (error) {
    console.log(error);
    return reply.status(400).send({ message: "Something went wrong" });
  }
}


module.exports = { pdfOrdersExportController };
