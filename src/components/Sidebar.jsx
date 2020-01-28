import React, { Component } from 'react';
import logo from '../images/logo-350px.png';
import {Link} from 'react-router-dom';

import * as translationEN from '../translations/en';
import * as translationES from '../translations/es';



export const MyContext = React.createContext();


class MyProvider extends Component {
  state = {
    isNavOpen: true,
    language: 'es'
  }

  changeLanguage = (e) => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      language: e.target.dataset.language
    })

    document.body.classList.toggle('nav-is-open')
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })

    document.body.classList.toggle('nav-is-open')
  }

  render() {
    return (
      <MyContext.Provider value={{
        isNavOpen: true,
        language: 'es',
        state: this.state,
        changeLanguage: this.changeLanguage,
        toggleNav: this.toggleNav
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


export default class Sidebar extends Component {


  render() {
    return (

      <MyContext.Consumer>
      {(context) => (


        
        <MyProvider>
        <header className="header" context={context}>
        <div className="container-fluid">
          <nav className="nav-wrapper nav-is-open">
            {
            
              this.props.context.state.isNavOpen && <div className="js-nav nav">
              <ul className="nav-list">
                <li>
                  <Link className='link' to="/" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.home
                        } else if (this.props.context.state.language === 'en') {
                          return translationEN.nav.home
                        } 
                      })()
                    }
                  </Link>
                </li>

                <li>
                  <Link className='link' to="/portfolio" onClick={this.props.context.toggleNav}>
                  {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.portfolio
                        } else if (this.props.context.state.language === 'en') {
                          return translationEN.nav.portfolio
                        }
                      })()
                    }
                  </Link>
                </li>

                <li>
                  <Link className='link' to="/about" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.about
                        } else if (this.props.context.state.language === 'en') {
                          return translationEN.nav.about
                        } 
                      })()
                    }
                  </Link>
                </li>

                <li className="nav-languages">
                  <a
                    className="link"
                    onClick={this.props.context.changeLanguage}
                    data-language="en"
                  >
                    EN
                  </a>

                  <span className="nav-divider">/</span>

                  <a
                    className="link"
                    onClick={this.props.context.changeLanguage}
                    data-language="es"
                  >
                    ES
                  </a>

                  <span className="nav-divider">/</span>

                </li>
              </ul>
            </div>}

            {<button className={this.props.context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={this.props.context.toggleNav}>
              <span />
              <span />
              <span />
            </button>}
          </nav>
        </div>
      </header>
      </MyProvider>
    
      )}

      </MyContext.Consumer>



    )
  }






















  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
  //         <aside id="colorlib-aside" className="border js-fullheight">
  //           <div className="text-center">
  //             <div className="author-img  no-mobile" style={{backgroundImage: 'url(images/IMG_6728P.jpg)'}} />              
  //             <h1 id="colorlib-logo">
  //               <a href="index.html">
  //                 <img src={logo}  alt="" width="140" />
  //                 <br></br>Soy Angélica
  //               </a>
  //             </h1>
  //           </div>
  //           <nav id="colorlib-main-menu" role="navigation" className="navbar">
  //             <div id="navbar" className="collapse">
               
  //                 <ul>
  //                   <li className="nav-languages">
  //                     <a
  //                       className="link"
  //                       onClick={this.props.context.changeLanguage}
  //                       data-language="en"
  //                     >
  //                       EN
  //                     </a>
  //                     <span className="nav-divider">/</span>
  //                     <a
  //                       className="link"
  //                       onClick={this.props.context.changeLanguage}
  //                       data-language="es"
  //                     >
  //                       ES
  //                     </a>
  //                 </li>
  //               </ul>
  //                 <ul>
  //                   <li className="active">
  //                     <a href="#home" data-nav-section="home">
  //                       {
  //                         (() => {
  //                           if (this.props.context.state.language === 'es') {
  //                             return translationES.nav.home
  //                           } else if (this.props.context.state.language === 'en') {
  //                             return translationEN.nav.home
  //                           } 
  //                         })()
  //                       }
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a href="#skills" data-nav-section="skills">
  //                       {
  //                         (() => {
  //                           if (this.props.context.state.language === 'es') {
  //                             return translationES.nav.skills
  //                           } else if (this.props.context.state.language === 'en') {
  //                             return translationEN.nav.skills
  //                           } 
  //                         })()
  //                       }
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a href="#projects" data-nav-section="freelancer">
  //                       {
  //                         (() => {
  //                           if (this.props.context.state.language === 'es') {
  //                             return translationES.nav.freelancer
  //                           } else if (this.props.context.state.language === 'en') {
  //                             return translationEN.nav.freelancer
  //                           } 
  //                         })()
  //                       }
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a href="#contact" data-nav-section="projects">
  //                       {
  //                         (() => {
  //                           if (this.props.context.state.language === 'es') {
  //                             return translationES.nav.projects
  //                           } else if (this.props.context.state.language === 'en') {
  //                             return translationEN.nav.projects
  //                           } 
  //                         })()
  //                       }
  //                     </a>
  //                   </li>                 
  //                 </ul>
                
  //             </div>
  //           </nav>
  //           <nav id="colorlib-main-menu">
  //             <div className="contact">
  //               <h3 id="contact_h">
  //                 ¡Hablemos!
  //               </h3>
  //               <p>+52 55 6972-7405<br></br>
  //               hola@soyangelica.com</p>
  //             </div>
  //             <ul id="social">
  //               <li><a href="https://twitter.com/sisoyangelica" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
  //               <li><a href="https://github.com/soyAngelica/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
  //               <li><a href="https://www.instagram.com/angelica.colores/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
  //               {/* <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li> */}
  //             </ul>
  //           </nav>
  //           <div className="colorlib-footer">
  //             <p><small>
  //                 {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> */}
  //                 {/* Theme Inspired on <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> */}
  //             </small></p>
  //             <p><small>
  //             </small></p>
  //           </div>
  //         </aside>
  //       </div>
  //     </div>
  //   )
  // }
}