const mongoose = require('mongoose');

const miesquema = mongoose.Schema;

const esquemaCategorias = new miesquema({
    id : String,
    nombre : String,
    descripcion : String,
    activo : Boolean
})

const modeloCategorias = mongoose.model('categorias',esquemaCategorias);

module.exports = modeloCategorias;