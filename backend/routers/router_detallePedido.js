const express = require('express');
const router = express.Router();
const controladorDetallePedidos = require('../controllers/controller_detallePedido');
const auth = require("../middleware/auth");

router.get("/listar", auth,controladorDetallePedidos);
router.get("/cargar/:id", auth,controladorDetallePedidos);
router.post("/agregar", auth,controladorDetallePedidos);
router.post("/editar/:id", auth,controladorDetallePedidos);
router.delete("/borrar/:id", auth,controladorDetallePedidos);

module.exports = router;