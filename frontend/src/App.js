import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ProductosListar from "./componentes/productos/productoslistar"
import ProductosBorrar from "./componentes/productos/productosborrar"
import ProductosEditar from "./componentes/productos/productoseditar"
import ProductosAgregar from "./componentes/productos/productosagregar"

import ClientesListar from "./componentes/clientes/clienteslistar"
import ClientesBorrar from "./componentes/clientes/clientesborrar"
import ClientesEditar from "./componentes/clientes/clienteseditar"
import ClientesAgregar from "./componentes/clientes/clientesagregar"

import PedidosListar from "./componentes/pedidos/pedidoslistar"
import PedidosBorrar from './componentes/pedidos/pedidosborrar';
import PedidosEditar from "./componentes/pedidos/pedidoseditar"
import PedidosAgregar from "./componentes/pedidos/pedidosagregar"



import Login from './paginas/auth/Login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Home from './paginas/Home';

function App()
{
  return (
    <main className='App'>
      
      <Fragment>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}exact/>
          <Route path="/Registro" element={<CrearCuenta/>}exact/>
          <Route path="/Home" element={<Home/>}exact/>
          <Route path="/productoslistar" element={<ProductosListar/>}exact/>
          <Route path="/productosborrar" element={<ProductosBorrar/>}exact/>
          <Route path="/productoseditar/:id" element={<ProductosEditar/>}exact/>
          <Route path="/productosagregar" element={<ProductosAgregar/>}exact/>
          <Route path="/clienteslistar" element={<ClientesListar/>}exact/>
          <Route path="/clientesborrar" element={<ClientesBorrar/>}exact/>
          <Route path="/clienteseditar/:id" element={<ClientesEditar/>}exact/>
          <Route path="/clientesagregar" element={<ClientesAgregar/>}exact/>
          <Route path="/pedidoslistar" element={<PedidosListar/>}exact/>
          <Route path="/pedidosborrar" element={<PedidosBorrar/>}exact/>
          <Route path="/pedidoseditar/:id" element={<PedidosEditar/>}exact/>
          <Route path="/pedidosagregar" element={<PedidosAgregar/>}exact/>
        </Routes>
        </BrowserRouter>
      </Fragment>

    </main>
  );
}


export default App;
