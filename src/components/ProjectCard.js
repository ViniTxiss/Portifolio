import React from 'react';

const ProjectCard = ({ title, description, liveLink, repoLink }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Ver Projeto</a>}
                {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">Repositório</a>}
            </div>
        </div>
    );
};

export default ProjectCard;