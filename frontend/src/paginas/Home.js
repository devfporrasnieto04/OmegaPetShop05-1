/*import Encabezado from './encabezado';*/
import MenuLateral from '../componentes/menulateral';
//import ProductosListar from '../componentes/productos/productoslistar';
import Encabezado from "../componentes/encabezado"


function Home()
{
    return(
        <div className="sidebar-mini fixed">
            <div className="wrapper">
                <Encabezado/>
                <MenuLateral/>
            </div>
        </div>
    )
}

export default Home