import React from 'react';
import peritos from '../../assets/img/peritos.png';
import './menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
              <img className="Logo" src={peritos} alt="peritos da pelicula logo" />
            </a>

            <Button className="ButtonLink" href="/">
               Novo vídeo
            </Button>     
        </nav>
    );
}

export default Menu;