const express = require("express");
const router = express.Router();
const productosController = require ("../controllers/productosController")


// Ruta Categorias (/productos/categorias esto devuelve todas las categorias ) 
//(productos/categorias?categoria=   devuelve todos los productos de una categoria)
router.get('/categorias', productosController.categorias);


// Ruta Guia de talles
router.get('/guia-de-talles', productosController.guiaTalles);

module.exports = router;