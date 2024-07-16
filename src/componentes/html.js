
function Home() {

    return (
        <div className="App">

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
                                <h5 class="brand-title">Betty Cuadrado</h5>
                                <div class="brand-subtitle">Docente | Escritora | Musico</div>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="/youtube" class="nav-link">Youtube</a>
                            </li>
                            <li class="nav-item">
                                <a href="/galeria.html" class="nav-link">Galeria</a>
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
                                        <h4>Experiencia</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h6 class="title text-danger">2019</h6>
                                    <p>CONVOCATORIA ESTIMULO Y CONCERTACIÓN 2019 DEL IPCC
                                        Con el proyecto CELEBRANDO MIS RAÍCES, MI IDENTIDAD</p>
                                    <p class="subtitle">proyecto CELEBRANDO MIS RAÍCES, MI IDENTIDAD, donde se desarrolla la
                                        autoestima, el Autoconcepto y la autoimagen en niños y niñas afro, de 4 a 12 años, a través
                                        de actividades de reflexión, utilizando como herramientas la música y la literatura infantil.
                                        Todo esto condensado en una cartilla y una producción musical de 5 canciones.</p>
                                    <hr />
                                </div>

                                <div class="card-body">
                                    <h6 class="title text-danger">2020</h6>
                                    <p>CONVOCATORIA ESTIMULALTE 2020 DEL IPCC Con el proyecto
                                        CELEBRANDO MIS RAÍCES, MI IDENTIDAD</p>
                                    <p class="subtitle">Premio por canción inédita</p>
                                    <a href="https://www.facebook.com/1032694866926611/videos/479147516135116 " target="_blank" rel="nonreferers" >facebook video</a>
                                    <p>  Aparece en la antología URDIMBRES: LAS MUJERES DEL CARIBE NARRAN SU
                                        TERRITORIO, del Ministerio de Cultura. – Siendo escogida para mostrar poesías infantiles,
                                        entre muchas mujeres que se presentaron. </p>
                                    <a href="https://mincultura.gov.co/prensa/noticias/Paginas/MinCultura-lanza-%E2%80%98Urdimbres%E2%80%99-en-Cartagena.aspx?fbclid=IwAR1_Bd3isCQSDu8Jz5DXuVJx_aDedE4fdEHHBKVKloDzUrcbgjQygheZcvw " target="_blank" rel="nonreferers" >Enlace Mincultura</a>
                                    <hr />
                                </div>


                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">

                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Experiencia</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h6 class="title text-danger">2021</h6>
                                    <p>Ganadora de la convocatotia de Circulacion Cultural de IPCC con el
                                        proyecto APRENDIENDO CULTURA CIUDADANA CON EL CAPITAN CC Y SUS AMIGOS</p>
                                    <p class="subtitle">Utilizando los títeres, canciones, anecdotas cotidiana y cuentos como herramientas
                                        didacticas para enseñar y reflexionar con niños/as y padres de familia sobre la cultura
                                        ciudadana y la sana convivencia.
                                        En este mismo año, recibió una mención de honor del concejo de Cartagena, como miembro
                                        honorable de la comunidad cartagenero</p>
                                    <p class="subtitle"> Es productora del programa infantil que se presenta en redes sociales: facebook y youtube,
                                        en el canal de LA CHAMBRANA RADIO, con Judith Cartagena Ospina, Llamado LA
                                        RONDA DE LOS PEQUES. Es un espacio de reflexión y aprendizaje, donde niños y niñas
                                        presentan sus talentos, su amor por la lectura, la escritura, las artes en general y a la
                                        naturaleza. Esto utilizando los títeres.</p>
                                    <hr />
                                </div>

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">

                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Experiencia</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h6 class="title text-danger">2022</h6>
                                    <p class="subtitle">Lanza su
                                        obra de literatura infantil llamada MÁS ALLÁ DE LOS COLORES, un compilado de poesías
                                        para niños/as en donde pone de manifiesto las emociones y los sentires de los más
                                        pequeños, para ayudarlos a reflexionar en temas como la identidad, la autoestima, el
                                        desarrollo de la libre personalidad, entre otros. Cada poesía tiene una imagen para colorear.
                                        Este mismo año, gana la convocatoria de circulación 2022 con esta obra literaria, dándola
                                        a conocer los municipios del departamento del Atlántico, ciudades como Bogotá,
                                        Facatativá, Salento, Armenia y Pereira.</p>
                                    <p> Ganadora de la convocatoria IMPULSO 2022, con la propuesta
                                        llamada ALZO MI VOZ Y CANTO, donde niños y niñas de bibliotecas y centros culturales
                                        pudieron alzar su voz al son de canciones interpretadas por ellos mismos. </p>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Educacion</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h6 class="title text-danger">2012</h6>
                                    <p>UNIVERSITARIA</p>
                                    <p class="subtitle">fundación Universitaria Los Libertadores, Cartagena.
                                        Pedagogía de la Lúdica y Desarrollo Cultural</p>
                                    <hr />
                                    <h6 class="title text-danger">1993</h6>
                                    <p>UNIVERSITARIA</p>
                                    <p class="subtitle">Universidad San Buenaventura, Cartagena.
                                        Licenciatura en educación Preescolar</p>
                                    <hr />
                                    <h6 class="title text-danger">1989</h6>
                                    <p>UNIVERSITARIA</p>
                                    <p class="subtitle">Colegio Mayor de Bolívar, Cartagena.
                                        Tecnóloga en Educación Preescolar</p>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Talleres, diplomados, seminarios y cursos</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>- Curso de solfeo y dirección coral, ESCUELA MUSICAL DON BOSCO, 1990.
                                        Cartagena.
                                    </p>
                                    <p>- Seminario-taller: construcción de un sistema de evaluación. Departamento de
                                        bienestar y vivienda división colegios Navales, 1996. Cartagena.
                                    </p>
                                    <p>- Proyecto de capacitación en Pedagogía Especial, Universidad de Cartagena,
                                        facultad de ciencias sociales y educación, 1998. Cartagena.
                                    </p>
                                    <p>- Diplomado en educación y desarrollo psicoafectivo, Universidad del Norte, 2003.
                                        Cartagena.
                                    </p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <div class="mt-2">
                                        <h4>Talleres, diplomados, seminarios y cursos</h4>
                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                    <p>- Lorem</p>
                                    <p>- Diploma</p>
                                    <p>- Lorem</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
export default Home;