
const express = require("express");
const router = express.Router();

// Controller
const mainController = require("../controllers/mainController");

// Ruta pagina principal
router.get('/', mainController.index);

// Ruta Locales
router.get('/locales', mainController.locales);




// Ruta Quienes somos
router.get('/quienes-somos', mainController.quienesSomos);



module.exports = router;