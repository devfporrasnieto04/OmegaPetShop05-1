const express = require("express");
const router = express.Router();
const controladorPedidos = require("../controllers/controller_pedidos");
const auth = require("../middleware/auth");

router.get("/listar", auth,controladorPedidos);
router.get("/cargar/:id", auth,controladorPedidos);
router.post("/agregar", auth,controladorPedidos);
router.post("/editar/:id", auth,controladorPedidos);
router.delete("/borrar:id", auth,controladorPedidos);



module.exports = router;