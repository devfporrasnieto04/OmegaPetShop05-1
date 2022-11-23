import axios from 'axios';
import uniquid from 'uniqid';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Swal from 'sweetalert2';
import { api } from '../../config'

const token = localStorage.getItem("token");
    let bearer;
    if (token === "") {
        bearer = "";
    } else {
        bearer = `${token}`;
    }
    const config = {
        headers: {'Content-Type': 'application/json', 
        'x-auth-token': bearer}
    }

function PedidosAgregar()
{
    const[id_cliente,setIdCliente] = useState('')
    const[valor,setValor] = useState('')
    const[fecha,setFecha] = useState('')
    const[activo,setActivo] = useState('')
    const navegar = useNavigate()

    function pedidosInsertar()
    {
        const pedidoinsertar = {
        id: uniquid(),
        id_cliente: id_cliente,
        fecha: fecha,
        valor: valor,
        activo: activo
        }
    
        console.log(pedidoinsertar)

        axios.post(`${api.baseURL}/api/pedidos/agregar`,pedidoinsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/pedidoslistar')
        }).catch(err => {console.log(err.stack)})

    }

    function pedidosRegresar()
    {
        navegar('/pedidoslistar')
    }

return(
    <div className='container mt-5'>
        <h4>Pedido</h4>
        <div className='row'>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="id_cliente" className="form-label">Id Cliente</label>
                    <input type="text" className="form-control" id="id_cliente" value={id_cliente} onChange={(e)=>{setIdCliente(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">fecha</label>
                    <input type="date" className="form-control" id="Fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Valor" className="form-label">Valor</label>
                    <input type="text" className="form-control" id="Valor" value={valor} onChange={(e)=>{setValor(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="activo" className="form-label">Activo</label>
                    <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                </div>

                <button type="button" className="btn btn-info" onClick={pedidosRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={pedidosInsertar}>Actualizar</button>
            </div>
        </div>
    </div>
)

}

export default PedidosAgregar;