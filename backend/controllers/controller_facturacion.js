const express = require ('express');
const modeloFacturacion = require('../models/model_facturacion');
const router = express.Router();

router.get('/listar', (req, res) => {
    modeloFacturacion.find({}, function(docs,err)
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    })
});

router.get('/cargar/:id', (req, res) => {
    modeloFacturacion.find({id:req.params.id}, function(docs,err)
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    })
});

router.post('/agregar',(req,res)=>{
    const nuevaFactura = new modeloFacturacion({
        id : req.body.id,
        id_clientes : req.body.id_clientes,
        id_pedidos: req.body.id_pedidos,
        total:req.body.total
    });
    nuevaFactura.save(function(err)
    {
        if(!err)
        {
            res.send("El registro de factura se agregó exitosamente");
        }
        else
        {
            res.send(err.stack);
        }
    }
    );
});

router.post('/editar/:id',(req,res)=>{
modeloFacturacion.findOneAndUpdate({id:req.params.id},
    {
        id : req.body.id,
        id_clientes : req.body.id_clientes,
        id_pedidos: req.body.id_pedidos,
        total:req.body.total
    },(err) =>
    {
        if(!err)
        {
            res.send("El registro se editó exitosamente");
        }
        else
        {
            res.send(err.stack);
        }
    })
});

router.delete('/borrar/:id',(req,res)=>{
    modeloFacturacion.findOneAndDelete({id:req.params.id},
        (err) =>
        {
            if(!err)
            {
                res.send("El registro se borró exitosamente");
            }
            else
            {
                res.send(err.stack);
            }
        })
    });

module.exports = router;