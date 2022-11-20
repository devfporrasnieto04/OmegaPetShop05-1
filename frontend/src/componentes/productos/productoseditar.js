import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { api } from '../../config'

function ProductosEditar()
{
    const parametros = useParams()

    const[id_categoria,setIdCategoria] = useState('')
    const[nombre,setNombre] = useState('')
    const[precio,setPrecio] = useState('')
    const[activo,setActivo] = useState('')
    const navegar = useNavigate()

    
    useEffect(()=>{axios.get(`/api/productos/cargar/${parametros.id}`).then(res=>{
        console.log(res.data[0])
        const dataProductos = res.data[0]
        setIdCategoria(dataProductos.id_categoria)
        setNombre(dataProductos.nombre)
        setPrecio(dataProductos.precio)
        setActivo(dataProductos.activo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        })},[]);
    
    
    function productosActualizar()
    {
        const productoeditar = {
        id: parametros.id,
        id_categoria: id_categoria,
        nombre: nombre,
        precio: precio,
        activo: activo
        }
    
        console.log(productoeditar)

        axios.put(`${api.baseURL}/api/productos/editar/${parametros.id}`,productoeditar).then(res=> {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/productoslistar')
        }).catch(err => {console.log(err.stack)})

    }

    function productosRegresar()
    {
        navegar('/productoslistar')
    }

return(
    <div className='container mt-5'>
        <h4>Producto</h4>
        <div className='row'>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="id_categoria" className="form-label">Categoria</label>
                    <input type="text" className="form-control" id="id_categoria" value={id_categoria} onChange={(e)=>{setIdCategoria(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="activo" className="form-label">Activo</label>
                    <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                </div>
                <button type="button" className="btn btn-info" onClick={productosRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={productosActualizar}>Actualizar</button>
            </div>
        </div>
    </div>
)

}

export default ProductosEditar;