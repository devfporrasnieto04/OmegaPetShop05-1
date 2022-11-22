import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PedidosBorrar from './pedidosborrar'
import { api } from '../../config'

function PedidosListar()
{
    const[dataPedidos, setdataPedidos] = useState([]);

    const token = localStorage.getItem("token");
    let bearer;
    if(token===""){bearer="";}else{bearer=`${token}`;}
    const config={headers:{'Content-Type': 'application/json','x-auth-token': bearer}}

    useEffect(()=>{
        axios.get(api.baseURL+'/api/pedidos/listar', config).then(res => {
        console.log(res.data)
        setdataPedidos(res.data)
        }).catch(err=>{console.log(err.stack)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className="container mt-5">
        <h4>Lista de Pedidos</h4>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr key={0}>
                            <td colSpan={6} align="right"><Link to={`/pedidosagregar`}><li className='btn btn-success'>Agregar Producto</li></Link></td>
                        </tr>
                        <tr key={0}>
                            <td align="center">Id</td>
                            <td>Id Cliente</td>
                            <td>Fecha</td>
                            <td>Valor</td>
                            <td align="center">Activo</td>
                            <td align="center"></td>
                            <td align="center"></td>
                        </tr>
                    </thead> 
                    <tbody className='dialog'>
                    {
                        dataPedidos.map(mipedido => (
                        <tr key={mipedido.id}>
                            <td align="center">{mipedido.id}</td>
                            <td>{mipedido.id_cliente}</td>
                            <td align="right">{mipedido.fecha}</td>
                            <td align="center">{mipedido.valor}</td>
                            <td align="center">{mipedido.activo}</td>
                            <td align="center"><Link to={`/pedidoseditar/${mipedido.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                            <td align="center"><li className='btn btn-danger' onClick={()=>{PedidosBorrar(mipedido.id)}}>Borrar</li></td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )

};

export default PedidosListar;

