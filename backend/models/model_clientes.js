const mongoose = require("mongoose");
const miesquema = mongoose.Schema;
const esquemaCliente = new miesquema({
    id: String,
    id_tipodedocumento: String,
    nombre: String,
    telefono: String,
    direccion: String,
    email: String,
    activo: Boolean,
    pedidos: [
        {
            ref: "pedidos",
            type: mongoose.Types.ObjectId,
        },
    ],
});

const modeloCliente = mongoose.model("clientes", esquemaCliente);

module.exports = modeloCliente;
