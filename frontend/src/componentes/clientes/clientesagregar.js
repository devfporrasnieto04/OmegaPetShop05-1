import axios from 'axios';
import uniquid from 'uniqid';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Swal from 'sweetalert2';

function ClientesAgregar()
{
    
    const[id_tipodedocumento, setId_tipodedocumento] = useState('')
    const[nombre,setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[email, setEmail] = useState('')
    const[activo,setActivo] = useState('')
    const navegar = useNavigate()

    function clientesInsertar()
    {
        const clienteinsertar = {
        id: uniquid(),
        id_tipodedocumento: id_tipodedocumento,
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        email: email,
        activo: activo
        }
    
        console.log(clienteinsertar)

        axios.post(`/api/clientes/agregar`,clienteinsertar).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/clienteslistar')
        }).catch(err => {console.log(err.stack)})

    }

    function clientesRegresar()
    {
        navegar('/clienteslistar')
    }

return(
    <div className='container mt-5'>
        <h4>Cliente</h4>
        <div className='row'>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="id_categoria" className="form-label">Tipo de Documento</label>
                    <input type="text" className="form-control" id="id_categoria" value={id_tipodedocumento} onChange={(e)=>{setId_tipodedocumento(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="precio" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="precio" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Email</label>
                    <input type="text" className="form-control" id="precio" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="activo" className="form-label">Activo</label>
                    <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                </div>

                <button type="button" className="btn btn-info" onClick={clientesRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={clientesInsertar}>Actualizar</button>
            </div>
        </div>
    </div>
)

}

export default ClientesAgregar;