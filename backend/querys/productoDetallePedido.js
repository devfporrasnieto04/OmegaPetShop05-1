const modeloDetallePedido = require("../models/model_detallePedido");
const modeloProducto = require("../models/model_Producto");
const modeloPedidos = require("../models/model_pedidos");

const miconexion = require("../conexion");

modeloDetallePedido.aggregate([
    {
        $lookup: {
            localField: "id",
            from: "productos",
            foreignField: "id",
            from: "pedidos",
            foreignField: "id",
            as: "detalle_pedidos",
        },
    },
    { $unwind: "$detalle_pedidos" }])
    .then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)});