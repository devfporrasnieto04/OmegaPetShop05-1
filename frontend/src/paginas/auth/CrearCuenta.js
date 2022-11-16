
import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const CrearCuenta = () => {
	const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const crearCuenta = async () => {
        if (password !== confirmar) {
            const msg = "Las contraseñas son diferentes.";
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
        }
		if (password.length < 6) {
            const msg = "La contraseña deber ser al menos de 6 caracteres.";
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
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST('/api/usuarios', data);
            const mensaje = response.msg;
				

            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
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
                const msg = "El usuario fue creado correctamente.";
				navigate("/")
                swal({
                    title: 'Información',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                }
			);
                setUsuario({
                    nombre: '',
                    email: '',
                    password: '',
                    confirmar: ''
                })

				
            }
        }
    }



    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }


	return (

		<div className="CrearCuenta">

			<section className="login common-img-bg">

				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<div className="login-card card-block bg-white">
								<form onSubmit={onSubmit}>
									<div className="text-center">
										<img src="assets/images/logoPetshop.jpg" alt="logo"></img>
									</div>
									<h3 className="text-center txt-primary">Crear una cuenta </h3>
									<div className="row">
										<div className="col-md-12">
											<div className="md-input-wrapper">
												<input type="text"
													className="md-form-control"
													id="nombre"
													name="nombre"
													value={nombre}
													onChange={onChange}
													required=""></input>
												<label htmlFor="nombre">Nombre completo</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="md-input-wrapper">
												<input type="email"
													className="md-form-control"
													id="email"
													name="email"
													value={email}
													onChange={onChange}
													required=""></input>
												<label htmlFor="email">Email</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="md-input-wrapper">
												<input type="password"
													className="md-form-control"
													id="password"
													name="password"
													value={password}
													onChange={onChange}
													required="required"></input>
												<label htmlFor="password">Password</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="md-input-wrapper">
												<input type="password"
													id="confirmar" 
													name="confirmar"
													value={confirmar}
													onChange={onChange}
													className="md-form-control"
													required="required"></input>
												<label htmlFor="confirmar">Confirmar Password</label>
											</div>
										</div>
									</div>

									<div className="rkmd-checkbox checkbox-rotate checkbox-ripple b-none m-b-20">
										<label className="input-checkbox checkbox-primary">
											<input type="checkbox" id="checkbox"></input>
											<span className="checkbox"></span>
										</label>
										<div className="captions">Recordarme</div>
									</div>
									<div className="col-xs-10 offset-xs-1">
										<button type="submit" className="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20">Registro
										</button>
									</div>
									<div className="row">
										<div className="col-xs-12 text-center">
											<span className="text-muted">¿Ya tienes cuenta?</span>
											<Link to={"/"} className="f-w-600 p-l-5">
												ingresa
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
	)

}

export default CrearCuenta;