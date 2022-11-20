import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PedidosBorrar from './pedidosborrar';
import { api } from '../../config'

function PedidosListar()
{

    const[dataPedidos, setdataPedidos] = useState([])

    const token = localStorage.getItem("token");
    let bearer;
    if(token===""){bearer="";}else{bearer=`${token}`;}
    const config={headers:{'Content-Type': 'application/json','x-auth-token': bearer}}


    useEffect(()=>{
        axios.get(api.baseURL+'/api/pedidos/listar',config).then(res => {
        console.log(res.data)
        setdataPedidos(res.data)
        }).catch(err=>{console.log(err.stack)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    
    //Estructura para dibujar fondos de diversos colores en la tabla
    const tabla = document.getElementsByTagName("tr");
    //tabla[i].style.backgroundColor = "#888888";
    let i, j=0, fila=[], color=[], inicio=0;
    color[0]="bg-info";color[1]="";color[2]="bg-success";color[3]="";color[4]="bg-danger";color[5]="";color[6]="bg-warning";color[7]="";color[8]="bg-active";color[9]="";
    for(i=0;i<tabla.length;i++)
    {
        fila[i]=color[j];
        j++;
        if(j==10){j=0;}
    }

    return (
    <div className="content-wrapper">
    <div className="container-fluid">
        <div className="row">
        <div className="col-sm-12 p-0">
            <div className="main-header">
                <h4>Pedidos</h4>
                <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                    <li className="breadcrumb-item">
                    <a href="index.html">
                        <i className="icofont icofont-home"></i>
                    </a>
                    </li>
                    <li className="breadcrumb-item"><a href="/pedidoslistar">Pedidos</a>
                    </li>
                    <li className="breadcrumb-item"><a href="/pedidoslistar">Listado de Pedidos</a>
                    </li>
                </ol>
            </div>
        </div>
        </div>


        <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-header-text">LISTADO DE PEDIDOS</h5>
                </div>
                <div className="card-block">
                    <div className="row">
                    <div className="col-sm-12 table-responsive">
                        <table className="table table-inverse">
                            <thead>
                            <tr key={0} className="bg-active">
                                <td colSpan={6} align="right">
                                    <Link to={`/pedidosagregar`} className="btn btn-success btn-icon waves-effect waves-light">
                                    <i className="icofont icofont-ui-add"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr key={0}>
                                <td align="center">Id</td>
                                <td>id_cliente</td>
                                <td>Valor</td>
                                <td align="center">Estado</td>
                                <td align="center"></td>
                                <td align="center"></td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                dataPedidos.map((mipedido,indice) => (
                                <tr className={`${fila[indice]}`} key={mipedido.id}>
                                    <td align="center">{mipedido.id}</td>
                                    <td>{mipedido.id_cliente}</td>
                                    <td align="right">{mipedido.valor}</td>
                                    <td align="center">{mipedido.activo ? 'Activo' : 'Inactivo'}</td>
                                    <td align="center"><Link to={`/pedidoseditar/${mipedido.id}`} className="btn btn-primary btn-icon waves-effect waves-light"><i className="icofont icofont-edit"></i></Link></td>
                                    <td align="center">
                                    <button type="button" onClick={()=>{PedidosBorrar(mipedido.id)}} className="btn btn-danger btn-icon waves-effect waves-light" data-toggle="tooltip" data-placement="top" title=".icofont-code-alt">
                                    <i className="icofont icofont-trash"></i>
                                    </button>
                                    </td>
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
        </div>


        </div>
    </div>
    )

}

/*
bg-success
bg-primary
bg-warning
bg-danger
bg-info
*/

export default PedidosListar;

/*
const listapedidos = dataPedidos.map(mipedido => {
return(
    <div>
        <PedidosDetalle mipedido={mipedido}/>
    </div>
)
})
return(
<div>
    <h1>Lista de Pedidos</h1>
    {listapedidos}
</div>
)
*/

/*
function PedidosDetalle({mipedido})
{
return(
<div className="container">
<table className="table">
<tbody id="tablapedidos">
<tr>
<th scope="row">{mipedido.id}</th>
<td>{mipedido.fecha}</td>
<td>{mipedido.valor}</td>
<td>{mipedido.activo}</td>
</tr>
</tbody>
</table>
</div>

)
}
export default PedidosDetalle;
*/

