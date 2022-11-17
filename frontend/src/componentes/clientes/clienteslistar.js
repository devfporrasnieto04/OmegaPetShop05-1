import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ClientesBorrar from './clientesborrar';
import { api } from '../../config';

function ClientesListar()
{
    const[dataClientes, setdataClientes] = useState([]);

    const token = localStorage.getItem("token");
    let bearer;
    if(token===""){bearer="";}else{bearer=`${token}`;}
    const config={headers:{'Content-Type': 'application/json','x-auth-token': bearer}}

    useEffect(()=>{
        axios.get( api.baseURL +'/api/clientes/listar').then(res => {
        console.log(res.data)
        setdataClientes(res.data)
        }).catch(err=>{console.log(err.stack)})
    },[])

    const tabla = document.getElementsByTagName("tr");
    //tabla[i].style.backgroundColor = "#888888";
    let i, j=0, fila=[], color=[], inicio=0;
    color[0]="bg-info";color[1]="";color[2]="bg-success";color[3]="";color[4]="bg-danger";color[5]="";color[6]="bg-warning";color[7]="";color[8]="bg-active";color[9]="";
    for(i=0;i<tabla.length;i++)
    {
        fila[i]=color[j];
        j++;
        if(j===10){j=0;}
    }

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
    