import React from 'react'

const projects = [
  {
    title: 'Portfolio Personnel',
    image: '/portfolio1.jpg',
    description: 'Un site personnel moderne présentant mon parcours, mes compétences et mes réalisations.',
    link: 'https://monportfolio.com',
    tags: ['React', 'Next.js', 'CSS']
  },
  {
    title: 'Application de Gestion',
    image: '/gestionapp.jpg',
    description: "Une application web complète pour gérer des tâches, des utilisateurs et des projets en équipe.",
    link: 'https://gestionapp.com',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Landing Page Produit',
    image: '/landingpage.jpg',
    description: 'Page de présentation d’un produit SaaS avec animations et responsive design.',
    link: 'https://landingpage.com',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
];

export default function portfolios() {
  return (
    <section className="portofolios section">
      <div className='container'>
        <div className='row'>
          <div className="section-title padd-15">
            <h2>Portofolios</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, idx) => (
            <div className="portfolio-item padd-15" key={idx} style={{flex: '0 0 33.333%', maxWidth: '33.333%'}}>
              <div className="portfolio-card">
                <img src={project.image} alt={project.title} className="portfolio-img" style={{width: '100%', borderRadius: '8px'}} />
                <h3 style={{margin: '12px 0 6px'}}>{project.title}</h3>
                <p style={{fontSize: '15px', color: '#504e70'}}>{project.description}</p>
                <div style={{margin: '8px 0'}}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{background: '#ec1839', color: '#fff', borderRadius: '12px', padding: '2px 10px', marginRight: '6px', fontSize: '12px'}}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginTop: '10px', display: 'inline-block'}}>Voir le projet</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
