function MenuLateral()
{

    return(
            <aside className="main-sidebar hidden-print ">
                <section className="sidebar" id="sidebar-scroll">
                    <ul className="sidebar-menu">
                        <li className="nav-level">Principal</li>
                        <li className="treeview">
                            <a className="waves-effect waves-dark" href="/Home">
                                <i className="icon-speedometer"></i><span>Inicio</span>
                            </a>                
                        </li>
                        <li className="nav-level">Procesos</li>
                        <li className="treeview"><a className="waves-effect waves-dark" href="/productoslistar"><i className="icon-briefcase"></i><span>Productos</span><i className="icon-arrow-down"></i></a>
                            <ul className="treeview-menu">
                                <li><a className="waves-effect waves-dark" href="/productoslistar"><i className="icon-arrow-right"></i>Listar Productos</a></li>
                                <li><a className="waves-effect waves-dark" href="/productosagregar"><i className="icon-arrow-right"></i>Agregar Productos</a></li>
                            </ul>
                        </li>

                        <li className="nav-level">Clientes</li>
                        <li className="treeview"><a className="waves-effect waves-dark" href="/clienteslistar"><i className="icon-docs"></i><span>Clientes</span><i className="icon-arrow-down"></i></a>
                            <ul className="treeview-menu">
                                <li><a className="waves-effect waves-dark" href="/clienteslistar"><i className="icon-arrow-right"></i>Listar Clientes</a></li>
                                <li><a className="waves-effect waves-dark" href="/clientesagregar"><i className="icon-arrow-right"></i>Agregar Clientes</a></li>
                            </ul>
                        </li>
                </ul>
                </section>
            </aside>

    )

}

export default MenuLateral;
