const express = require('express');
const router = express.Router();
const controladorCategorias = require('../controllers/controller_categorias');

router.get("/listar",controladorCategorias);
router.get("/cargar/:id",controladorCategorias);
router.post("/agregar",controladorCategorias);
router.post("/editar/:id",controladorCategorias);
router.delete("/borrar/:id",controladorCategorias);

module.exports = router;