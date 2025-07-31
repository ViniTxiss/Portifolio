import React from 'react';
import './Header.css'; // Importando estilos específicos do cabeçalho

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Meu Portfólio</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;