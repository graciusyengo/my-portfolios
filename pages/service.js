import React from 'react'

const services = [
  {
    icon: '💻',
    title: 'Développement Web',
    description: 'Création de sites web modernes, performants et responsives adaptés à vos besoins.'
  },
  {
    icon: '🎨',
    title: 'Web Design',
    description: 'Conception d’interfaces élégantes, intuitives et attractives pour une expérience utilisateur optimale.'
  },
  {
    icon: '⚙️',
    title: 'Intégration & Optimisation',
    description: 'Intégration de maquettes, optimisation SEO et performance pour un site rapide et bien référencé.'
  }
];

export default function service() {
  return (
    <section className="service section">
      <div className='container'>
        <div className='row'>
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((serv, idx) => (
            <div className="service-item padd-15" key={idx} style={{flex: '0 0 33.333%', maxWidth: '33.333%'}}>
              <div className="service-card" style={{background: '#fdf9ff', borderRadius: 10, padding: 30, boxShadow: '0 2px 12px #e8dfec'}}>
                <div style={{fontSize: 40, marginBottom: 18}}>{serv.icon}</div>
                <h3 style={{marginBottom: 10, color: '#ec1839'}}>{serv.title}</h3>
                <p style={{color: '#504e70', fontSize: 15}}>{serv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
