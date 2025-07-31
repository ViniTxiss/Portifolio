import React from 'react';
import './Footer.css'; // Importando estilos específicos para o Footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Desenvolvido por [Seu Nome]</p>
                <p>Contato: <a href="mailto:seuemail@example.com">seuemail@example.com</a></p>
                <div className="social-links">
                    <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;