import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import APIInvoke from '../../utils/APIInvoke'


function Login(){
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;


  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const login = async () => {
    if (password.length < 6) {
      const msg = "La contraseña debe ser al menos de 6 caracteres.";
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    } else {
      const data = {
        email: usuario.email,
        password: usuario.password
      }
      const response = await APIInvoke.invokePOST('/api/auth/', data);
      const mensaje = response.msg;

      if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
        const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
        swal({
          title: 'Error',
          text: msg,
          icon: 'error',
          buttons: {
            confirm: {
              text: 'Ok',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        });
      } else {
        //obtenemos el token de acceso jwt
        const jwt = response.token;

        //guardamos el token en el localstorage
        localStorage.setItem('token', jwt);

        //redireccionamos al home la pagina principal
        navigate("/Home");
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  }


  return (
    <div className="Login">
      <section class="login p-fixed d-flex text-center bg-primary common-img-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="login-card card-block">
                <form onSubmit={onSubmit}>
                  <div className="text-center">
                    <img src="assets/images/logoPetshop.jpg" alt="logo"></img>
                  </div>
                  <h3 className="text-center txt-primary">Iniciar sección</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-input-wrapper">
                        <input
                          type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                          className="md-form-control"
                          required="required"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="md-input-wrapper">
                        <input
                          type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                          className="md-form-control"
                          required="required"
                        />
                        <label httmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="rkmd-checkbox checkbox-rotate checkbox-ripple m-b-25">
                        <label className="input-checkbox checkbox-primary">
                          <input type="checkbox" id="checkbox"></input>
                          <span className="checkbox"></span>
                        </label>
                        <div className="captions">Recordarme</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12 forgot-phone text-right">
                      <a
                        href="forgot-password.html"
                        className="text-right f-w-600"
                      >
                        {" "}
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-10 offset-xs-1">
                      <button
                        type="onSubmit"
                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">INICIAR
                        <Link to={"/Home"} className="f-w-600 p-l-5">
											</Link>
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-10 offset-xs-1 text-center ">
                      <span className="text-muted">¿Aun no tienes cuenta?</span>
                      <Link
                        to={"/Registro"}
                        className="btn btn-md btn-block btn-success waves-effect m-b-20">CREAR CUENTA
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
