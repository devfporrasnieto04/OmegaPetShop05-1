const express = require("express");
const router = express.Router();

const rutaClientes = require("./router_cliente");
router.use("/clientes", rutaClientes);

const rutaPedidos = require("./router_pedidos");
router.use("/pedidos", rutaPedidos);

const rutaFacturacion = require("./router_facturacion");
router.use("/facturacion", rutaFacturacion);

const rutaUsuarios = require("./router_usuarios");
router.use("/usuarios", rutaUsuarios);

const rutaCategorias = require("./router_categorias");
router.use("/categorias", rutaCategorias);

const rutaProducto = require('./router_Producto');
router.use("/productos",rutaProducto);

const rutaDetallePedido = require("./router_detallePedido");
router.use("/detallepedido", rutaDetallePedido);

const rutaAuth = require("./router_auth");
router.use("/auth", rutaAuth);

module.exports = router;