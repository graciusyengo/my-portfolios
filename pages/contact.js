import React, { useState, useEffect} from 'react'
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
export default function contact() {
  const [submitted, setSubmitted] = useState(false);
 




    // EmailJS configuration
    const SERVICE_ID = 'service_gis4vea';
    const TEMPLATE_ID = 'template_ytb1ux4';


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',

  });

  useEffect(() => {
    // Initialize EmailJS
    try {
      emailjs.init("Kr2nRKP_ZL81x2ck5");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const handleChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const currentTime = new Date().toLocaleString();
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,

        time: currentTime
      };

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, "Kr2nRKP_ZL81x2ck5");

       // Réinitialiser le formulaire
       setFormData({
        name: '',
        email: '',
        message: '',
     
      });

      console.log('Email sent successfully:', result);
      toast.success('Merci pour votre demande ! Nous vous contacterons bientôt.', {
        icon: <HiCheckCircle className="text-green-500 text-2xl" />,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.", {
        icon: <HiXCircle className="text-red-500 text-2xl" />,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
        <ToastContainer />
    </section>
  )
}

