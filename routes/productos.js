const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Ruta: GET /api/productos
router.get("/", productosController.obtenerProductos);

module.exports = router;
