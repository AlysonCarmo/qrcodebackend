const express = require('express');
const multerConfig  =  require('../src/config/multer');
const multer =  require('multer');

const routes =  express.Router();

const ProductController = require("./controllers/ProductController");
const FileController = require("./controllers/FileController");

routes.get("/product/:id", ProductController.show);
routes.post("/product", ProductController.store);
routes.post("/products", ProductController.aggregate);

routes.post("/product/:id/files", multer(multerConfig).single("file"), FileController.store );


module.exports = routes;

