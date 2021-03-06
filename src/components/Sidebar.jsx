import React, { Component } from 'react';
import logo from '../images/logo-350px.png';
import reactL from '../images/logo512.png';
import LanguagePicker from "./LanguagePicker";
import  Translate  from './Translate';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img  no-mobile" style={{backgroundImage: 'url(images/IMG_6728P.jpg)'}} />              
              <h1 id="colorlib-logo">
                <a href="index.html">
                  <img src={logo}  alt="" width="140" />
                  <br></br>Soy Angélica
                </a>
              </h1>
              <LanguagePicker changeLanguage={this.props.changeLanguage} />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home"><Translate string={'home.h1'}/></a></li>
                  <li><a href="#skills" data-nav-section="skills"> Skills</a></li>
                  <li><a href="#projects" data-nav-section="freelancer"><Translate string={'nav.freelancer'}/></a></li>
                  <li><a href="#contact" data-nav-section="projects"><Translate string={'nav.projects'}/></a></li>                 
                  {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li> */}
                  
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <div className="contact">
                <h3 id="contact_h">
                  <Translate string={'contact'}/>
                </h3>
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
                Made with <img src={reactL}  alt="" width="32" /><br></br>
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