const modeloClientes = require("../models/model_clientes");
const modeloPedidos = require("../models/model_pedidos");

const miconexion = require("../conexion");

modeloClientes.aggregate([
    {
        $lookup: {
            localField: "id",
            from: "pedidos",
            foreignField: "id_cliente",
            as: "pedidos_clientes",
        },
    },
    { $unwind: "$pedidos_clientes" }])
    .then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)});

/*
var dataClientes = [];
modeloClientes.find({id : "1015393381"}).then(data => {
    console.log("Cliente:");
    console.log(data);
    data.map((d, k) => {dataClientes.push(d.id);});
    modeloPedidos.find({id_cliente: {$in : dataClientes }})
    .then(data => {
        console.log("Pedidos: del cliente:");
        console.log(data);
    })
    .catch((error) =>{console.log(error)});
});
*/