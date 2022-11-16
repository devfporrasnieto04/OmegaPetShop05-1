const express = require('express');
const router = express.Router();
const modeloCategorias = require('../models/model_categorias');

router.get('/listar', (req, res) => {
    modeloCategorias.find({}, function(docs,err)
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
    modeloCategorias.find({id:req.params.id}, function(docs,err)
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
    const nuevaCategoria = new modeloCategorias({
        id : req.body.id,
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        activo : req.body.activo
    });
    nuevaCategoria.save(function(err)
    {
        if(!err)
        {
            res.send("El registro se agregó exitosamente");
        }
        else
        {
            res.send(err.stack);
        }
    }
    );
});

router.post('/editar/:id',(req,res)=>{
modeloCategorias.findOneAndUpdate({id:req.params.id},
    {
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
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
    })
});

router.delete('/borrar/:id',(req,res)=>{
    modeloCategorias.findOneAndDelete({id:req.params.id},
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