import React, { Component } from 'react';
import logo from '../images/logo-350px.png';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/IMG_6728P.jpg)'}} />
              <h1 id="colorlib-logo">
                <a href="index.html">
                  <img src={logo}  alt="" width="140" />
                  <br></br>Soy Angélica
                </a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Acerca de mi</a></li>
                  <li><a href="#skills" data-nav-section="skills"> Full Stack </a></li>
                  <li><a href="#contact" data-nav-section="projects">Mis Proyectos</a></li>                 
                  <li><a href="#projects" data-nav-section="freelancer">Trabajo Freelancer</a></li>
                  {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li> */}
                  
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <div className="contact">
                <p>+52 55 6972-7405<br></br>
                hola@soyangelica.com</p>
              </div>
              <ul id="social">
                <li><a href="https://twitter.com/sisoyangelica" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://github.com/soyAngelica/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/angelica.colores/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                {/* <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> */}
                  {/* Theme Inspired on <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> */}
              </small></p>
              <p><small>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}