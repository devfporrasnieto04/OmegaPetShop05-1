const mongoose = require("mongoose");
const miesquema = mongoose.Schema;
const esquemaPedidos = new miesquema({
    id: String,
    id_cliente: String,
    fecha: String,
    valor: Number,
    activo: Boolean,
    id_cliente: {
        type: mongoose.Types.ObjectId,
        ref: 'clientes'
    }
},
    {
        timestamps: true,
    });

const modeloPedidos = mongoose.model("pedidos", esquemaPedidos);

module.exports = modeloPedidos;