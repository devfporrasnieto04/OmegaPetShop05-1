const express = require("express");
const router = express.Router();
const modeloCliente = require("../models/model_clientes");

router.get("/listar", (req, res) => {
    modeloCliente.find({}, function (docs, err) {
        if (!err) {
            res.json(docs);
        }
        else {
            res.send(err);
        }
    }).populate('pedidos');
});

router.get("/cargar/:id", (req, res) => {
    modeloCliente.find({ id: req.params.id }, function (docs, err) {
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err);
        }
    });
});

router.post("/agregar", (req, res) => {

    const nuevoCliente = new modeloCliente({
    id : req.body.id,
    id_tipodedocumento : req.body.id_tipodedocumento,
    nombre : req.body.nombre,
    telefono : req.body.telefono,
    direccion : req.body.direccion,
    email : req.body.email,
    activo : req.body.activo
    });
    ;
    nuevoCliente.save(function (err, docs) {
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err.stack);
        }
    });
});

router.post("/editar/:id", (req, res) => {
    modeloCliente.findOneAndUpdate({ id: req.params.id },
        {
            id_tipodedocumento: req.body.id_tipodedocumento,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            email: req.body.email,
            activo: req.body.activo
        }, (err) => {
        if (!err) {
            res.send("la actualzacion se registro exitosamente")
        }
        else {
            res.send(err.stack);
        }
    }
    );
});

router.delete("/borrar/:id", (req, res) => {
    modeloCliente.findOneAndDelete({ id: req.params.id }
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