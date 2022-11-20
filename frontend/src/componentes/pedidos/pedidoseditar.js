import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { api } from '../../config'


function PedidosEditar()
{
    const parametros = useParams()

    const[id_cliente,setIdCliente] = useState('')
    const[fecha,setFecha] = useState('')
    const[valor,setValor] = useState('')
    const[activo,setActivo] = useState('')
    const navegar = useNavigate()

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

    useEffect(()=>{axios.get(`${api.baseURL}/api/pedidos/cargar/${parametros.id}`,config).then(res=>{
        console.log(res.data[0])
        const dataPedidos = res.data[0]
        setIdCliente(dataPedidos.id_cliente)
        setFecha(dataPedidos.fecha)
        setValor(dataPedidos.valor)
        setActivo(dataPedidos.activo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })},[])

    function pedidosActualizar()
    {
        const pedidoeditar = {
        id: parametros.id,
        id_cliente: id_cliente,
        fecha: fecha,
        valor: valor,
        activo: activo
        }

        console.log(pedidoeditar)

        const config = {
            body: JSON.stringify(pedidoeditar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`${api.baseURL}/api/pedidos/editar/${parametros.id}`,pedidoeditar,config).then(res=> {
            console.log(res.data)

            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/pedidoslistar')
        }).catch(err => {console.log(err.stack)})
        

    }

    function pedidosRegresar()
    {
        navegar('/pedidoslistar')
    }

    return(
    <div className="">
        <section className="pcoded-main-container">
            <div className="pcoded-content">
                <div className="col-sm-12">
                    <div className="card">
                        
                        
                        <div className="card-body">
                            <h5 className="mt-5">Pedidos</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="id_cliente">Id Cliente</label>
                                    <input type="text" className="form-control"id="id_cliente" value={id_cliente} onChange={(e)=>{setIdCliente(e.target.value)}} placeholder="Categoria"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fecha">fecha</label>
                                    <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}} placeholder="fecha"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="precio">Valor</label>
                                    <input type="text" className="form-control" id="precio" value={valor} onChange={(e)=>{setValor(e.target.value)}}  placeholder="Precio"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="activo">Activo</label>
                                    <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}} placeholder="Activo"></input>
                                </div>
                                <button type="button" className="btn btn-info" onClick={pedidosRegresar}>Regresar</button>
                                <button type="button" className="btn btn-success" onClick={pedidosActualizar}>Actualizar</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </div>
    )

}
export default PedidosEditar;