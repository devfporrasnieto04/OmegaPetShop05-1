function Encabezado() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark static-top" >
            <div className="container">
                <a className="navbar-brand" href="page">
                    <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height={36} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="page">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="page">Action</a></li>
                                <li><a className="dropdown-item" href="page">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="page">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
}
export default Encabezado;

