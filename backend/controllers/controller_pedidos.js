const express = require("express");
const modeloCliente = require("../models/model_clientes");
const modeloPedidos = require("../models/model_pedidos");
const router = express.Router();

router.get("/listar", (req, res) => {
    modeloPedidos.find({}, function(docs, err)
    {
        if (!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    });
});

router.get("/cargar/:id", (req, res) => {
    modeloPedidos.find({id:req.params.id}, function(docs, err)
    {
        if (!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    });
});

router.post('/agregar',(req,res)=>{
    modeloCliente.findOne({id: req.body.id_cliente}, function(err, cliente){
        console.log("función nuevo pedido")
        if(!err){
            console.log(cliente)
            const nuevoPedido = new modeloPedidos({
                id : req.body.id,
                id_cliente : cliente._id,
                fecha : req.body.fecha,
                valor : req.body.valor,
                activo : req.body.activo
            });
            nuevoPedido.save(function(err)
            {
                if(!err)
                {
                    res.send("El registro del pedido se agregó exitosamente");
                }
                else
                {
                    res.send(err.stack);
                }
            }
            );
        }else{
            res.send(err.stack)
        }
    })

    
});

router.post('/editar/:id',(req,res)=>{
    modeloPedidos.findOneAndUpdate({id:req.params.id},
        {
            id : req.body.id,
            id_cliente : req.body.id_cliente,
            fecha : req.body.fecha,
            valor : req.body.valor,
            activo : req.body.activo
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
        });
    });

router.delete('/borrar/:id',(req,res)=>{
    modeloPedidos.findOneAndDelete({id:req.params.id},
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