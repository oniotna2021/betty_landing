
function Youtube() {

    return (
        <div className="App">

            {/* <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a> */}

            <header class="header">
                <div class="container">
                    <ul class="social-icons pt-3">
                        <li class="social-item"><a rel="noreferrer" class="social-link text-light" target="_blank" href="https://www.facebook.com/bettymariacuher?mibextid=ZbWKwL"><i class="ti-facebook" aria-hidden="true"></i></a></li>Mi perfil
                        <li class="social-item"><a rel="noreferrer" class="social-link text-light" target="_blank" href="https://www.facebook.com/profile.php?id=100063615606110&mibextid=ZbWKwL"><i class="ti-facebook" aria-hidden="true"></i></a></li>Celebrando mis raices
                        {/* <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li> */}
                    </ul>
                    <div class="header-content">
                        <h4 class="header-subtitle" >Bienvenidos a mi pagina</h4>
                        <h1 class="header-title">Betty Cuadrado</h1>
                        <h6 class="header-mono" >Escritora | Docente | Músico</h6>
                    </div>
                </div>
            </header>

            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
                <div class="container">
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a href="/" class="nav-link">Home</a>
                            </li>
                            {/* <li class="nav-item">
                                <a href="#about" class="nav-link">Acerca de</a>
                            </li>
                            <li class="nav-item">
                                <a href="#resume" class="nav-link">Resumen</a>
                            </li> */}
                        </ul>
                        <ul class="navbar-nav brand">
                            <img src="assets/imgs/avatar.jpg" alt="" class="brand-img" />
                            <li class="brand-txt">
                                <h5 class="brand-title">Betty Cuadrado</h5>
                                <div class="brand-subtitle">Docente | Escritora | Musico</div>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="/youtube" class="nav-link">Youtube</a>
                            </li>
                            <li class="nav-item">
                                <a href="/galeria" class="nav-link">Galeria</a>
                            </li>
                            <li class="nav-item last-item">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="section" id="service">
                <div class="container">
                    <h2 class="mb-5 pb-4"><span class="text-danger">Mi trabajo en </span>YOUTUBE</h2>
                    <div class="row">

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El Burriquito</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/Jr5459Gvlnc">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Al son de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/-0_4S4gMP44">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/FcGLynPNsKw">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Norella Prada</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/yctfsOL3Z6o">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Celebrando mis raices: Opiniones</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/CMUTg4IneyM">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El Capitan CC animado</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/Zt3JXpOE6-Q">
                                    </iframe>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El cuidado de los animales</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/xUHEV4HA1kY">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El manejo de las basuras</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/2BASE29OoJY">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El cuidado de los niños</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/evu9ZHoIUbQ">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El cuidado de los ancianos</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/Jn02siLNPbs">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El cuidado de los ancianos</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/h7qKI9--39Y">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El Capitan CC en las Palmeras</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src=" https://www.youtube.com/embed/4f5zm3dlWE4">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El uso correcto de las canecas</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/Y-_X_Hv6Onc">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/C6jnP2CSDuU">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La Chambrana radio</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/AgqulQFVmBI">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La Ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/-zsJgkQvAts">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/Fz8ryblZsj0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/oz1BUmkWqMU">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">La ronda de los peques</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/TDJ7iK-IJb0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Los amiguitos del pollito Yellow</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/TeHbJ2WgmQ0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Alzo mi voz y canto</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/kWAOwkt7noM">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Feria latinoamericana del libro</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/zwcvk4eAc94">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Tengo un gato negro</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/mD1WIZakLiE">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El Capitan CC en Sahagun</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/hQpY92omZ8Y">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Enseñanzas del capitan</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/yD2sdoWbJ6s">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">El Capitan CC en Armenia</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/buJC2G5Ls_M">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Mas alla de los colores</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src=" https://www.youtube.com/embed/z1tAdgYJDWI">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Socializacion Mas alla de los colores</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src=" https://www.youtube.com/embed/z1tAdgYJDWI">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Niños y Niñas Mas alla de los colores</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/eptHN2mqyf0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-5">
                                <div class="card-header has-icon">
                                    <i class="ti-camera text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="card-body px-4 py-3">
                                    <h5 class="mb-3 card-title text-dark">Asi es mi pelo</h5>
                                    <iframe title="Betty Cuadrado en Youtube" width="100%" height="220"
                                        src="https://www.youtube.com/embed/za_6fi-4xbI">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer class="footer py-3">
                <div class="container">
                    <p class="small mb-0 text-light">
                        &copy; <script>document.write(new Date().getFullYear())</script> Todos los derechos Betty Cuadrado / Diseño Antonio Mogollon <a href="http://servicioinformatico.co" target="_blank"><span class="text-danger" title="Bootstrap 4 Themes and Dashboards">servicioinformatico.co</span></a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Youtube;