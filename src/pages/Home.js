import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import './main.css';

const Home = () => {
    const projects = [
        {
            title: 'Projeto 1',
            description: 'Descrição do Projeto 1',
            demoLink: '#',
            repoLink: '#'
        },
        {
            title: 'Projeto 2',
            description: 'Descrição do Projeto 2',
            demoLink: '#',
            repoLink: '#'
        },
        {
            title: 'Projeto 3',
            description: 'Descrição do Projeto 3',
            demoLink: '#',
            repoLink: '#'
        }
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Meu Portfólio</h1>
                <section className="projects">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            demoLink={project.demoLink} 
                            repoLink={project.repoLink} 
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;