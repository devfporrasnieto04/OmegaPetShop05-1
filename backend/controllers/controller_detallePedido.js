const express = require("express");
const router = express.Router();
const modeloDetallePedido = require("../models/model_detallePedido");

router.get("/listar", (req, res) => {
    modeloDetallePedido.find({}, function (docs, err) {
        if (!err) {
            res.json(docs);
        }
        else {
            res.send(err);
        }
    }).populate('pedidos');
});

router.get("/cargar/:id", (req, res) => {
    modeloDetallePedido.find({ id: req.params.id }, function (docs, err) {
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err);
        }
    });
});

router.post("/agregar", (req, res) => {

    const nuevoDetallePedido = new modeloDetallePedido({
    id : req.body.id,
    id_tipodedocumento : req.body.id_tipodedocumento,
    nombre : req.body.nombre,
    telefono : req.body.telefono,
    direccion : req.body.direccion,
    email : req.body.email,
    activo : req.body.activo
     });
    nuevoDetallePedido.save(function (err, docs) {
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err.stack);
        }
    });
});

router.post("/editar/:id", (req, res) => {
    modeloDetallePedido.findOneAndUpdate({ id: req.params.id },
        {
            id: req.body.id_tipodedocumento,
            id_productos: req.body.nombre,
            id_pedidos: req.body.telefono,
        }, (err) => {
        if (!err) {
            res.send("la actualzacion del detalle del pedido se registro exitosamente")
        }
        else {
            res.send(err.stack);
        }
    }
    );
});

router.delete("/borrar/:id", (req, res) => {
    modeloDetallePedido.findOneAndDelete({ id: req.params.id }
        , (err) => {
            if (!err) {
                res.send("la actualzacion se registro exitosamente")
            }
            else {
                res.send(err.stack);
            }
        }
    );
});

module.exports = router;