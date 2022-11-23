import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ProductosBorrar from './productosborrar';
import { api } from '../../config'
import Encabezado from '../encabezado';
import MenuLateral from '../menulateral';

function ProductosListar()
{
    const[dataProductos, setdataProductos] = useState([]);

    useEffect(()=>{
        axios.get(api.baseURL+'/api/productos/listar').then(res => {
        console.log(res.data)
        setdataProductos(res.data)
        }).catch(err=>{console.log(err.stack)})
    },[])

    return(
    <div className="wrapper">
        <Encabezado/>
        <MenuLateral />
        <div className="content-wrapper">
        <div className="container mt-5">
        <h4>Lista de Productos</h4>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr key={0}>
                            <td colSpan={6} align="right"><Link to={`/productosagregar`}><li className='btn btn-success'>Agregar Producto</li></Link></td>
                        </tr>
                        <tr key={0}>
                            <td align="center">Id</td>
                            <td>Nombre</td>
                            <td>Descripcion</td>
                            <td align="center">Precio</td>
                            <td align="center"></td>
                            <td align="center"></td>
                        </tr>
                    </thead> 
                    <tbody className='dialog'>
                    {
                        dataProductos.map(miproducto => (
                        <tr key={miproducto.id}>
                            <td align="center">{miproducto.id}</td>
                            <td>{miproducto.nombre}</td>
                            <td align="right">{miproducto.descripcion}</td>
                            <td align="center">{miproducto.precio}</td>
                            <td align="center"><Link to={`/productoseditar/${miproducto.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                            <td align="center"><li className='btn btn-danger' onClick={()=>{ProductosBorrar(miproducto.id)}}>Borrar</li></td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
    </div>
    )

};

export default ProductosListar;
    

