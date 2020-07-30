import React from 'react';
import gerolamoflix from '../../assets/img/gerolamoflix.png';
import './menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
              <img className="Logo" src={gerolamoflix} alt="Gerolamoflix logo" />
            </a>

            <Button className="ButtonLink" href="/">
               Novo vídeo
            </Button>     
        </nav>
    );
}

export default Menu;