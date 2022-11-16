import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ClientesBorrar from './clientesborrar';

function ClientesListar()
{
    const[dataClientes, setdataClientes] = useState([]);

    useEffect(()=>{
        axios.get('/api/clientes/listar').then(res => {
        console.log(res.data)
        setdataClientes(res.data)
        }).catch(err=>{console.log(err.stack)})
    },[])

    return(
        <div className="container mt-5">
        <h4>Listado Clientes</h4>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr key={0}>
                            <td align="right" colSpan = {8}><Link to={`/clientesagregar`}><li className='btn btn-success'>Agregar Cliente</li></Link></td>
                        </tr>
                        <tr key={0}>
                            <td align="center">Id</td>
                            <td>Tipo de documento</td>
                            <td>Nombre</td>
                            <td align="center">Telefono</td>
                            <td align="center">direccion</td>
                            <td align="center">email</td>
                        </tr>
                    </thead> 
                    <tbody className='dialog'>
                    {
                        dataClientes.map(micliente => (
                        <tr key={micliente.id}>
                            <td align ="center">{micliente.id}</td>
                            <td aling = "center">{micliente.id_tipodedocumento}</td>
                            <td aling = "center">{micliente.nombre}</td>
                            <td align = "right">{micliente.telefono}</td>
                            <td>{micliente.direccion}</td>
                            <td>{micliente.email}</td>
                            <td align = "right"><Link to={`/clienteseditar/${micliente.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                            <td align = "right"><li className='btn btn-danger' onClick={()=>{ClientesBorrar(micliente.id)}}>Borrar</li></td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )

}

export default ClientesListar;
    