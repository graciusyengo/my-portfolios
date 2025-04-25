import React, { useState } from 'react'

export default function contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourrais envoyer les données à une API ou un service email
    setSubmitted(true);
  };

  return (
    <section className="contact section">
      <div className='container'>
        <div className='row'>
          <div className="section-title padd-15">
            <h2>Me Contacter</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form padd-15" style={{flex: '0 0 60%', maxWidth: '60%', margin: 'auto'}}>
            {submitted ? (
              <div style={{background: '#e8dfec', padding: 30, borderRadius: 10, textAlign: 'center'}}>
                <h3 style={{color: '#ec1839'}}>Merci pour votre message !</h3>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 18}}>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
