function Home(){
    return(
          <div className="Menu">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/Home">Omega Pet Shop</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/productoslistar">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/clienteslistar">Clientes</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="/categoriaslistar">Categorias</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="mt-5 mb-5">
            <div align="center">
                Copyright (c) 2022 - MisionTIC - Grupo U9 - Equipo X
            </div> 
          </section>
          </div>
        );
        }
    


export default Home;

