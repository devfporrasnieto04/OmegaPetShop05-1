const express = require("express");
const router = express.Router();
const controladorClientes = require("../controllers/controller_clientes");
const auth = require('../middleware/auth');

router.get("/listar", controladorClientes);
router.get("/cargar/:id", controladorClientes);
router.post("/agregar", controladorClientes);
router.post("/editar/:id", controladorClientes);
router.delete("/borrar/:id", controladorClientes);


module.exports = router;