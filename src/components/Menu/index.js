import React from 'react';
import { Link } from 'react-router-dom';
import peritos from '../../assets/img/peritos.png';
import './menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a to="/">
              <img className="Logo" src={peritos} alt="peritos da pelicula logo" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
               Novo vídeo
            </Button>     
        </nav>
    );
}

export default Menu;