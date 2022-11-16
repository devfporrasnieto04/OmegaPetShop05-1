const mongoose = require("mongoose");
const miesquema = mongoose.Schema;
const esquemaFacturacion = new miesquema({
        id: String,
        id_detalle: {
                type: mongoose.Types.ObjectId,
                ref: "detalles",
        },
        total: Number,
});

const modeloFacturacion = mongoose.model("facturacion", esquemaFacturacion);
module.exports = modeloFacturacion;
