const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controller_Producto');

router.get("/listar",controllerProducto);
router.get("/listar/:id",controllerProducto);
router.post("/agregar",controllerProducto);
router.put("/editar/:id",controllerProducto);
router.delete("/borrar/:id",controllerProducto);


module.exports = router;
