import React, { Component } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Gallery from './Gallery';

import logo1 from '../images/iconos/html5.png';
import logo2 from '../images/iconos/css3.png';
import logo3 from '../images/iconos/javascript.png';
import logo4 from '../images/iconos/angularjs.png';
import logo5 from '../images/iconos/bootstrap.png';
import logo6 from '../images/iconos/php.png';
import logo7 from '../images/iconos/mysql-logo.png';
import logo13 from '../images/iconos/OJS.png';
import logo14 from '../images/iconos/jquery.png';
import logo8 from '../images/iconos/wordpress.png';
import logo9 from '../images/iconos/shopify.png';
import logo10 from '../images/iconos/prestashop-logo.png';
import logo11 from '../images/iconos/ps.png';
import logo12 from '../images/iconos/illustrator.jpg';


import logo101 from '../images/iconos/nodejs.png'; 
import logo102 from '../images/iconos/react.png'; 
import logo103 from '../images/iconos/express-min.png'; 
import logo104 from '../images/iconos/sass.png'; 


import logo201 from '../images/iconos/mongodb.png';
import logo202 from '../images/iconos/next_logo.png'; 
import logo203 from '../images/iconos/logo-redux.png'; 
import logo204 from '../images/iconos/typeScript.png';

 
import logo205 from '../images/iconos/graphql-logo.png';
import logo206 from '../images/iconos/gastby-logo.png'; 
import logo207 from '../images/iconos/MaterialUILogo.png'; 





export default class Intro extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          
            <div className="overlay">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1><br />Acerca de mi</h1>
                          <blockquote>
                            <p>¡Hola! Gracias por visitar mi sitio.</p>
                            <p>Hace 8 años empecé como maquetadora, desde el 2014 soy mentor en cursos y talleres de desarrollo web e introducción a programación.
                             A lo largo de este tiempo, he trabajado construyendo diversos proyectos como freelancer.                        
                            </p>
                            <p>En 2017 emprendí junto a <a href="https://gustavomerckel.com/" target="_blank" rel="noopener noreferrer">Gustavo Merckel</a>, una caravana educativa llamada <a href="https://mentesambulantes.org/" target="_blank" rel="noopener noreferrer">Mentes ambulantes</a>.
                            <br></br>
                            Con ayuda de una campaña de crowfunding, impartimos talleres de uso sustentable de tecnología y programación, a más de 120 niños alrededor de 9 comunidades
                            en la región maya del Sur de México y el Norte de Guatemala. </p>
                            <p id="navbar">Este 2020, estoy continuando el arduo camino para ser Full Stack. <a href="#projects" data-nav-section="projects">¡Sigue mi progreso!</a> </p>
                            <p>Me encanta viajar, andar en bici, instagram, la música y el té <span>🍵</span></p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>      
            </div>
        </section>
        <section id="colorlib-hero" className="extra-bottom" data-section="skills" >          
            <div className="overlay">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                            <div>
                              <h1>Skills</h1>
                              <div className="bloques col-md-7">
                                <h2>Frontend</h2>
                                <ul className="Logos">
                                  <li ><img src={logo1} title="HTML5" alt="html5" width="68" /></li>
                                  <li ><img src={logo2} title="CSS3" alt="css3" width="68" /></li>
                                  <li ><img src={logo3} title="JavaScript" alt="javascript" width="60" /></li>
                                  <li ><img src={logo14} title="Jquery" alt="" width="84" /></li>
                                  <li ><img src={logo4} title="Angular JS" alt="" width="74" /></li>
                                  <li ><img src={logo5} title="Bootstrap" alt="" width="68" /></li> 
                                </ul>                             
                              </div>
                              <div className="bloques col-md-5">
                                <h2>Backend</h2>
                                <ul className="Logos">  
                                  <li ><img src={logo6} title="PHP" alt="" width="98" /></li> 
                                  <li ><img src={logo7} title="MySQL" alt="" width="98" /></li> 
                                </ul>
                              </div>
                              <div className="bloques col-md-6">
                                <h2>CMS & Ecommerce</h2>
                                <ul className="Logos">
                                  <li ><img src={logo13} title="Open Journal System" alt="" width="90" /></li>
                                  <li ><img src={logo8} title="Wordpress" alt="" width="68" /></li> 
                                  <li ><img src={logo9} title="Shopify" alt="" width="65" /></li> 
                                  <li ><img src={logo10} title="Prestashop" alt="" width="70" /></li>
                                  
                                </ul>
                              </div>
                              <div className="bloques col-md-6">
                              <h2>Gráficos</h2>
                              <ul className="Logos">
                                <li ><img src={logo11} title="Photoshop" alt="" width="68" /></li> 
                                <li ><img src={logo12} title="Illustrator" alt="" width="68" /></li> 
                              </ul>
                            </div>
                            </div>

                            <div>
                              <h1>Aprendiendo</h1>
                              <ul className="Logos mediogray">
                                <li ><img src={logo101} alt="" title="Node.js" width="78" /></li>
                                <li ><img src={logo102} alt="" title="React.js" width="78" /></li>
                                <li ><img src={logo103} alt="" title="Express.js" width="108" /></li>
                                <li ><img src={logo104} alt="" title="Sass" width="108" /></li>
                                
                              </ul>
                            </div>

                            <div>
                              <h1>Proximamente</h1>
                              <ul className="Logos gray">
                                <li ><img src={logo201} alt="" title="Mongo DB" width="98" /></li>  
                                <li ><img src={logo202} alt="" title="Next.js" width="88" /></li>
                                <li ><img src={logo203} alt="" title="Redux" width="98" /></li>
                                <li ><img src={logo207} alt="" title="Material UI" width="98" /></li>                                                         
                                <li ><img src={logo204} alt="" title="TypeScript" width="98" /></li>
                                <li ><img src={logo205} alt="" title="GraphQL" width="98" /></li>                                                         
                                <li ><img src={logo206} alt="" title="Gatsby" width="128" /></li>                                                         
                              </ul>
                            </div>
                            <div className="extra-top">
                              <h1>Mi Tracking</h1>
                              <GitHubCalendar username="soyAngelica" blockSize={17} color="#d8747f"
                               fontSize={17} fullYear={false} years={[2019, 2020]}>
                                <ReactTooltip delayShow={50} html />
                              </GitHubCalendar>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>      
            </div>
        </section>
        
        <section id="colorlib-hero" className="extra-bottom" data-section="freelancer">          
            <div className="overlay">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Mis favoritos como freelancer<br /></h1>
                          <blockquote>
                          </blockquote>
                          <Gallery />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>      
            </div>
        </section>
        <section id="colorlib-hero" className="js-fullheight" data-section="projects">          
            <div className="overlay">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Mis Proyectos<br /></h1>
                          <blockquote>
                            <p><b>Proyectos desarrollados en mi Full Stack Trainning</b></p>
                            <p><b>¡Muy pronto!</b></p>

                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>      
            </div>
        </section>
      </div>
    )
  }
}