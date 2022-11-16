const modeloProducto = require('../models/model_Producto');
const express = require('express');

const router = express.Router();


router.get('/listar', (req, res) => {
    modeloProducto.find({}, function(docs, err)
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
})

router.get('/cargar/:id', (req, res) => {
    modeloProducto.find({id:req.params.id}, function(docs, err)
    {
        if(!err)
        {
            res.send(docs)
        }
        else
        {
            res.send(err)
        }
    })
})


router.post('/agregar',(req, res)=>{

    const nuevoProducto = new modeloProducto({
        id: req.body.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    })

    nuevoProducto.save(function(err){
        if(!err)
        {
            
            res.send("The register added successfuly");
        }
        else
        {
            res.send(err.stack);
        }
    });
}
)

router.put('/editar/:id',(req, res)=>{
    modeloProducto.findOneAndUpdate({id:req.params.id},{
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        },(err)=>
        {
            if(!err)
            {
                res.send("Register updated");
            }
            else
            {
                res.send(err.stack);
            }  
        })
    }
    )   
    
router.delete('/borrar/:id', (req, res) => {
        modeloProducto.findOneAndDelete(
            {id:req.params.id},
            (err) =>
            {
                if(!err)
                {
                    res.send("product deleted")
                }
                else
                {
                    res.send(err)
                }
            })
    })
    



module.exports = router;