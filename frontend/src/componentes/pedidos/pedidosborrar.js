import axios from 'axios';
import Swal from 'sweetalert2';
import { api } from '../../config';
//import {useNavigate} from 'react-router'
function PedidosBorrar(id)
{    

    function pedidosRefrescar()
    {
        //navegar('/')
        window.location.href="/pedidoslistar";
        //navegar("/pedidoslistar")
    }
    axios.delete(`${api.baseURL}/api/pedidos/borrar/${id}`)
    .then((response) => this.setState({ status: 'Borrado Exitoso' }));

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({title: '¿Realmente desea eliminar este registro?',
        text: "No es posible revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
        }).then((result) => {
        if (result.isConfirmed) {
            const token = localStorage.getItem("token");
            let bearer;
            if (token === "") {
                bearer = "";
            } else {
                bearer = `${token}`;
            }
            const config = {
                headers: {
                "Content-Type": "application/json",
                "x-auth-token": bearer,
                },
            };
        
        pedidosRefrescar()

        swalWithBootstrapButtons.fire(
            '¡Operación Exitosa!',
            'El registro ha sido eliminado exitosamente',
            'success'
        )


    } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            '¡ERROR!',
            'El registro no pudo ser eliminado',
            'error'
            )
        }
    })
    
}

export default PedidosBorrar;