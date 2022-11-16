const express = require("express");
const router = express.Router();
const controladorClientes = require("../controllers/controller_clientes");
const auth = require('../middleware/auth');

router.get("/listar", auth,controladorClientes);
router.get("/cargar/:id", auth,controladorClientes);
router.post("/agregar", auth,controladorClientes);
router.post("/editar/:id", auth,controladorClientes);
router.delete("/borrar/:id", auth,controladorClientes);


module.exports = router;