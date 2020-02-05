import React, {Component} from 'react';



const imgUrls = [

  {
    id:1,
    src:'http://soyangelica.com/images/marvel.jpg', 
    link: 'http://soyangelica.com/archives/panini-heroes', 
    name: 'Marvel - Panini Colection'
  },

  {
    id:2,
    src: 'http://soyangelica.com/images/duracell.jpg', 
    link: 'http://duracellauto.com.mx/',
    name: 'Duracell México'
  },   
  {
    id:3,
    src:'http://soyangelica.com/images/ferrari.jpg',
    link:'http://soyangelica.com/archives/panini-ferrari', 
    name:'Ferrari  - Panini Colection'
  },
  
  {
    id:4,
    src:'http://soyangelica.com/images/rushing.jpg', 
    link: 'https://therushinghour.com/pages/give-back', 
    name:'The Rushing hour'
  },
  {
    id:5,
    src:'http://soyangelica.com/images/manada.jpg', 
    link: 'http://architecturalboundaries.com/', 
    name: 'Manada'
  },
  {
    id:6,
    src: 'http://soyangelica.com/images/tresor.jpg', 
    link: 'https://www.tresordezoe.com/', 
    name: 'Tresor de Zoe'
  },
  {
    id:7,
    src:'http://soyangelica.com/images/ilce.jpg',   
    link: 'https://ilcexperiences.com/index.html', 
    name: 'ILCE Experiences'
  },
 
  {
    id:8,
    src:'http://soyangelica.com/images/landmark.jpg', 
    link: 'https://lm-pedregal.com/', 
    name: 'LM Pedregal'
  },
  {
    id:9,
    src:'http://soyangelica.com/images/inmobar.jpg', 
    link: 'http://inmobar.mx/', 
    name: 'Inmobar'
  },
  
  
];
  

  

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
  }
 

  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
        <ul className="row">
          {imgUrls.map(p =>
              <li className="col-lg-4 col-md-6 col-sx-12" key={p.id}>
                <a href={p.link} target="_blank">
                  <img src={p.src} />
                  <h3>{p.name}</h3>
                </a>
              </li>
            )}
        </ul>
        </div>
      </div>
    )
  }



}



export default Gallery