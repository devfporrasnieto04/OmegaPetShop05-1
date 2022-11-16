const mongoose = require('mongoose');

const esquemaDetallePedidos = mongoose.Schema({
    id_productos: {
        type: mongoose.Types.ObjectId,
        ref: 'productos',
    },
    id_pedido: {
        type: mongoose.Types.ObjectId,
        ref: 'pedidos',
    },
    cantidad: Number,
});

const modeloDetallePedidos = mongoose.model('detallepedidos', esquemaDetallePedidos);
module.exports = modeloDetallePedidos;