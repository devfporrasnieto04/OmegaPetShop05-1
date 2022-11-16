const express = require('express');
const router = express.Router();
const controladorFacturacion = require('../controllers/controller_facturacion');
const auth = require("../middleware/auth");

router.get("/listar", auth,controladorFacturacion);
router.get("/cargar/:id", auth,controladorFacturacion);
router.post("/agregar", auth,controladorFacturacion);
router.post("/editar/:id", auth,controladorFacturacion);
router.delete("/borrar/:id", auth,controladorFacturacion);

module.exports = router;