
function Home() {

    return (
        <div className="App">

            <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>

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
                                <a href="#home" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" class="nav-link">Acerca de</a>
                            </li>
                            <li class="nav-item">
                                <a href="#resume" class="nav-link">Resumen</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav brand">
                            <img src="assets/imgs/avatar.jpg" alt="" class="brand-img" />
                            <li class="brand-txt">
                                <h5 class="brand-title">John Doe</h5>
                                <div class="brand-subtitle">Web Designer | Developer</div>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="#service" class="nav-link">Youtube</a>
                            </li>
                            <li class="nav-item">
                                <a href="#blog" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item last-item">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container-fluid">
                <div id="about" class="row about-section">
                    <div class="col-lg-4 about-card">
                        <h3 class="font-weight-light">Mi BIO</h3>
                        <span class="line mb-5"></span>
                        <h5 class="mb-3">Docente / Musico / Escritor en Cartagena de Indias Colombia</h5>
                        <p class="mt-20">Música de corazón y Docente de profesión, con más de 30 años de
                            experiencia, licenciada en educación preescolar de la Universidad San
                            Buenaventura, con una especialización en Pedagogía de la Lúdica de la
                            Universidad Los Libertadores de Bogotá.
                        </p>
                        <a target="_blank" rel="noreferrer" href="./BettyCuadradoHV2023.pdf" class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Descargar mi HV</a>
                    </div>
                    <div class="col-lg-4 about-card">
                        <h3 class="font-weight-light">Informacion de contacto</h3>
                        <span class="line mb-5"></span>
                        <ul class="mt40 info list-unstyled">
                            <li><span>Fecha de Nacimiento</span> : septiembre 18 de 1968.</li>
                            <li><span>Email</span> : becuher@hotmail.com
                            </li>
                            <li><span>Email</span> : becuher@gmail.com
                            </li>
                            <li><span>Celular</span> : + (57) 317-2349222
                            </li>
                            <li><span>Direccion</span> :   Socorro m: 45, L: 6, P: 332 “A”. Cartagena - Colombia</li>
                        </ul>
                        <ul class="social-icons pt-3">
                            <li class="social-item"><a rel="noreferrer" class="social-link" target="_blank" href="https://www.facebook.com/bettymariacuher?mibextid=ZbWKwL"><i class="ti-facebook" aria-hidden="true"></i></a></li>Mi perfil
                            <li class="social-item"><a rel="noreferrer" class="social-link" target="_blank" href="https://www.facebook.com/profile.php?id=100063615606110&mibextid=ZbWKwL"><i class="ti-facebook" aria-hidden="true"></i></a></li>Celebrando mis raices
                            {/* <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li> */}
                        </ul>
                    </div>
                    <div class="col-lg-4 about-card">
                        <h3 class="font-weight-light">Competencias</h3>
                        <span class="line mb-5"></span>
                        <div class="row">
                            <div class="col-1 text-danger pt-1"><i class="ti-pencil-alt icon-lg"></i></div>
                            <div class="col-10 ml-auto mr-3">
                                <h6>Ambientes creativos</h6>
                                <p class="subtitle"> Manejo diversas estrategias metodológicas que satisfacen las necesidades de todos
                                    los niños y niñas en un ambiente estimulante.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 text-danger pt-1"><i class="ti-bookmark icon-lg"></i></div>
                            <div class="col-10 ml-auto mr-3">
                                <h6>Recursos</h6>
                                <p class="subtitle">Considera los saberes de los chicos y jóvenes como recursos para movilizar.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 text-danger pt-1"><i class="ti-medall-alt icon-lg"></i></div>
                            <div class="col-10 ml-auto mr-3">
                                <h6>Proyectos lúdicos</h6>
                                <p class="subtitle">trabaja a través de proyectos lúdico-pedagógicos flexibles y con objetivos claros,
                                    utilizando la literatura como herramienta pedagógica.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="resume">
                <div class="container">
                    <h2 class="mb-5"><span class="text-danger">HV</span> Resumen</h2>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Expertise</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">2017 - Present</h6>
                                    <p>UX Developer</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                                    <hr />
                                    <h6 class="title text-danger">2016 - 2017</h6>
                                    <p>Front-end Developer</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                                    <hr />
                                    <h6 class="title text-danger">2015 - 2016</h6>
                                    <p>UX Designer</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Education</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">2017 - Present</h6>
                                    <p>B.E Computer Engineering</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error corrupti recusandae obcaecati odit repellat ducimus cum, minus tempora aperiam at.</p>
                                    <hr />
                                    <h6 class="title text-danger">2016 - 2017</h6>
                                    <p>Diploma in Computer Engineering</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.</p>
                                    <hr />
                                    <h6 class="title text-danger">2015 - 2016</h6>
                                    <p>High School Degree</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Education</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">2017 - Present</h6>
                                    <p>B.E Computer Engineering</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error corrupti recusandae obcaecati odit repellat ducimus cum, minus tempora aperiam at.</p>
                                    <hr />
                                    <h6 class="title text-danger">2016 - 2017</h6>
                                    <p>Diploma in Computer Engineering</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.</p>
                                    <hr />
                                    <h6 class="title text-danger">2015 - 2016</h6>
                                    <p>High School Degree</p>
                                    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
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
                                    <iframe width="100%" height="220"
                                        src="https://www.youtube.com/embed/TDJ7iK-IJb0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;